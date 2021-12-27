import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "src/utils/validations";
import { User, LoginReqBody } from "src/interfaces";

const findUser = (user: LoginReqBody): User => {
  return sampleUserData.find(({ email, password: p }) => {
    return email === user.username && p === user.password;
  });
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error("Cannot find user data");
    }
    const { method, body } = req;
    if (method !== "POST") {
      throw new Error("Wrong method. Only post is acceptable");
    }
    const user = findUser(JSON.parse(body));
    if (!user) {
      return res
        .status(404)
        .json({ statusCode: 404, message: "usuário ou senha incorretos" });
    }
    res.status(200).json({ name: user.name, id: user.id });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
