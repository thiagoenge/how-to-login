export type User = {
  id: number;
  name: string;
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

export interface FormInput {
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
  type: FormInput["type"];
  label: string;
  value: string;
  hint: string;
  id: string;
  required: boolean;
  error: string;
  validations: string[];
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
