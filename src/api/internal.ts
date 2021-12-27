import { LoginReqBody } from "src/interfaces";
import fetcher from "src/utils/fetcher";

const BASE_URL = "http://localhost:4000/api/";

export const doLogin = (loginData: {}) => {
  return fetcher(`${BASE_URL}/login`, {
    method: "POST",
    body: JSON.stringify(loginData),
  });
};
