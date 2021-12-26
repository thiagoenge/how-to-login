import { FormFields } from "src/interfaces/";

const formFields: FormFields = {
  username: {
    type: "text",
    label: "email",
    value: "",
    hint: "digite o email cadastrado",
    id: "username",
    required: true,
    error: "",
    validations: ["isEmpty", "isEmail"],
  },
  password: {
    type: "password",
    label: "senha",
    value: "",
    hint: "digite a senha cadastrada",
    id: "password",
    required: true,
    error: "",
    validations: ["isEmpty"],
  },
};

export default formFields;
