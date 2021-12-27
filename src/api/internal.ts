import { LoginReqBody } from "src/interfaces";
import fetcher from "src/utils/fetcher";

export const doLogin = (loginData: {}) => {
  return fetcher("/api/login", {
    method: "POST",
    body: JSON.stringify(loginData),
  });
};
