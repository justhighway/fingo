const https = require("https");
const parse = require("url-parse");
const urlencode = require("urlencode");

// ========== HTTP 기본 함수 ==========
const httpSender = (url, token, body) => {
  console.log("========== httpSender ========== ");
  const uri = parse(url, true);

  const request = https.request(
    {
      hostname: uri.hostname,
      path: uri.pathname,
      port: uri.port,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
    codefApiCallback
  );
  request.write(urlencode.encode(JSON.stringify(body)));
  request.end();
};

// ========== Token 재발급 ==========
const requestToken = (url, client_id, client_secret) => {
  console.log("========== requestToken ========== ");
  const uri = parse(url);

  const authHeader = Buffer.from(`${client_id}:${client_secret}`).toString(
    "base64"
  );

  const request = https.request(
    {
      hostname: uri.hostname,
      path: uri.pathname,
      port: uri.port,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${authHeader}`,
      },
    },
    authTokenCallback
  );
  request.write("grant_type=client_credentials&scope=read");
  request.end();
};

// API 서버 샌드박스 도메인
const CODEF_URL = "https://tsandbox.codef.io";
const TOKEN_URL = "https://oauth.codef.io/oauth/token";
const SANDBOX_CLIENT_ID = "ef27cfaa-10c1-4470-adac-60ba476273f9"; // CODEF 샌드박스 클라이언트 아이디
const SANDBOX_SECRET_KEY = "83160c33-9045-4915-86d8-809473cdf5c3"; // CODEF 샌드박스 클라이언트 시크릿

// 은행 개인 보유계좌
const account_list_path = "/v1/kr/bank/p/account/account-list";

// 기 발급된 토큰
let token = "";

// BodyData
const codef_api_body = {
  connectedId: "sandbox_connectedId", // SANDBOX 커넥티드아이디
  organization: "0004", // 기관코드(https://developer.codef.io "은행 목록" 참조)
};

// Auth Token Callback
const authTokenCallback = (response) => {
  console.log("authTokenCallback Status: " + response.statusCode);
  console.log("authTokenCallback Headers: " + JSON.stringify(response.headers));

  let body = "";
  response.setEncoding("utf8");
  response.on("data", (data) => {
    body += data;
  });

  // end 이벤트가 감지되면 데이터 수신을 종료하고 내용을 출력한다
  response.on("end", () => {
    // 데이저 수신 완료
    console.log("authTokenCallback body = " + body);
    token = JSON.parse(body).access_token;
    if (response.statusCode == 200) {
      console.log("토큰발급 성공");
      console.log("token = " + token);

      // CODEF API 요청
      httpSender(`${CODEF_URL}${account_list_path}`, token, codef_api_body);
    } else {
      console.log("토큰발급 오류");
    }
  });
};

// CODEF API Callback
const codefApiCallback = (response) => {
  console.log("codefApiCallback Status: " + response.statusCode);
  console.log("codefApiCallback Headers: " + JSON.stringify(response.headers));

  let body = "";
  response.setEncoding("utf8");
  response.on("data", (data) => {
    body += data;
  });

  // end 이벤트가 감지되면 데이터 수신을 종료하고 내용을 출력한다
  response.on("end", () => {
    console.log("codefApiCallback body:" + urlencode.decode(body));

    // 데이저 수신 완료
    if (response.statusCode == 200) {
      console.log("정상처리");
    } else if (response.statusCode == 401) {
      requestToken(TOKEN_URL, SANDBOX_CLIENT_ID, SANDBOX_SECRET_KEY);
    } else {
      console.log("API 요청 오류");
    }
  });
};

// CODEF API 요청
httpSender(`${CODEF_URL}${account_list_path}`, token, codef_api_body);
