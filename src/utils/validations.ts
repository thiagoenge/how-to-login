import { User } from "../interfaces";
import { ValidationRule, ValidationData } from "src/interfaces";

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Caroline" },
  { id: 104, name: "Dave" },
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
