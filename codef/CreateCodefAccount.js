const getCodefAccessToken = require("./GetCodefAccessToken");

// 계정 생성 함수 (아이디로 로그인)
const createCodefAccountById = async (accessToken) => {
  const codefAccountCreateUrl =
    "https://development.codef.io/v1/account/create";

  const codefAccountCreateBody = {
    accountList: [
      {
        countryCode: "KR",
        businessType: "BK",
        clientType: "P",
        organization: "0102",
        loginType: "1", // 0은 인증서, 1은 아이디/패스워드
        id: "codef", // 아이디
        password: "papass", // 패스워드
        birthDate: "980225",
        loginTypeLevel: "",
        clientTypeLevel: "",
        cardNo: "",
        cardPassword: "",
      },
    ],
  };

  try {
    const response = await fetch(codefAccountCreateUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(codefAccountCreateBody),
    });

    const responseData = await response.text();
    console.log("response data: ", responseData);
    const decodedResponse = decodeURIComponent(responseData);
    console.log(decodedResponse);

    // JSON 형식인지 확인
    try {
      const jsonData = JSON.parse(responseData);
      console.log(jsonData);
      // 응답을 처리하는 코드 추가
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      // 만약 JSON 형식이 아니라면 다른 형식으로 처리
    }
  } catch (error) {
    console.error("Error creating Codef account:", error);
  }
};

(async () => {
  const accessToken = await getCodefAccessToken();
  if (accessToken) {
    await createCodefAccountById(accessToken);
  }
})();
