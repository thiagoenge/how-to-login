import { User, ValidationRule, ValidationData } from "src/interfaces";

/** Dummy user data. */
export const sampleUserData: User[] = [
  {
    id: 101,
    name: "Romário",
    email: "user@brasil.com",
    password: "mudar123!",
  },
  {
    id: 102,
    name: "Zamorano",
    email: "user@chile.com",
    password: "mudar123!",
  },
  {
    id: 103,
    name: "Santa Cruz",
    email: "user@paraguai.com",
    password: "mudar123!",
  },
  {
    id: 104,
    name: "Caniggia",
    email: "user@argentina.com",
    password: "mudar123!",
  },
];

export const validationData: ValidationData = {
  isEmpty(inputValue: string): ValidationRule {
    const isValid = !!inputValue;
    const result = {
      error: !isValid ? "o campo não pode ficar em branco" : "",
    };
    return {
      hasError: !isValid,
      message: result.error,
    };
  },
  isEmail(inputValue: string): ValidationRule {
    const emailRegex = /^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const isValid = inputValue.match(emailRegex);
    const result = {
      error: !isValid ? "o email digitado não é valido" : "",
    };
    return {
      hasError: !isValid,
      message: result.error,
    };
  },
};
