import React from "react";
import { TextAreaInputField } from "@/types/formInputs";

const TextAreaInput: React.FC<TextAreaInputField> = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  required,
  rows,
  cols,
  error,
  labelClassname,
  areaClassname,
}) => {
  return (
    <div className={`flex flex-col gap-1`}>
      <label
        htmlFor={name}
        className={`text-sm font-semibold ${labelClassname}`}
      >
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        rows={rows}
        cols={cols}
        onChange={onChange}
        className={`text-sm rounded-md py-1 px-2 shadow-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full h-30 ${areaClassname}`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default TextAreaInput;
