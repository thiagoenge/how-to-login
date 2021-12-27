export type User = {
  id: number;
  name: string;
  email?: string;
  password?: string;
};

type InputType =
  | "button"
  | "checkbox"
  | "date"
  | "datetime-local"
  | "email"
  | "hidden"
  | "number"
  | "password"
  | "radio"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url";

export interface FormInputProps {
  value: string;
  label?: string;
  placeholder?: string;
  name: string;
  id: string;
  type: InputType;
  hint?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  error: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  tabIndex: number;
  className?: string;
  autoComplete?: "on" | "off";
  autoCorrect?: "on" | "off";
  autoCapitalize?: "on" | "off";
  spellCheck?: boolean;
}

interface FormFieldsState {
  type: FormInputProps["type"];
  label: string;
  value: string;
  hint: string;
  id: string;
  required: boolean;
  error: string;
  validations: string[];
  touched?: boolean;
}
export interface FormFields {
  [key: string]: FormFieldsState;
}

export interface ValidationData {
  [key: string]: Function;
}
export interface ValidationRule {
  hasError: boolean;
  message: string;
}
export interface ButtonProps {
  className?: string;
  type: "button" | "submit";
  label: string;
  variant?: "primary" | "secondary";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  tabIndex?: number;
}
export interface LoginReqBody {
  username: string;
  password: string;
}
