const getCodefAccessToken = async () => {
  const tokenUrl = "https://oauth.codef.io/oauth/token";
  const client_id = "ef27cfaa-10c1-4470-adac-60ba476273f9";
  const client_secret = "83160c33-9045-4915-86d8-809473cdf5c3";

  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
      },
      body: "grant_type=client_credentials&scope=read",
    });

    const responseData = await response.json();
    console.log(responseData);

    if (responseData.access_token) {
      // 받은 토큰을 저장해두고, API 호출 시 사용하자.
      return responseData.access_token;
    } else {
      console.error("Failed to get access token");
      return null;
    }
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
};

module.exports = getCodefAccessToken;
