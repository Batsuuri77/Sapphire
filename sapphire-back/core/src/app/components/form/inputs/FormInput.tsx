import { InputField } from "@/types/formInputs";
import React from "react";

const FormInput: React.FC<InputField> = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
  labelClassname,
  inputClassname,
  required,
}) => {
  return (
    <div className={`flex flex-col gap-1`}>
      <label
        htmlFor={name}
        className={`text-sm font-semibold text-gray-700 ${labelClassname}`}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`text-sm rounded-md py-1 px-2 shadow-2xl border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full ${inputClassname}`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default FormInput;
