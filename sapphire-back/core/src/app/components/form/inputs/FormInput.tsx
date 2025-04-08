import React from "react";

interface FormInputProps {
  label: string; // Label for the input field
  placeholder?: string; // Placeholder text for the input field
  type?: string; // Type of the input field (e.g., text, email, password)
  name: string; // Name attribute for the input field
  value: string; // Value of the input field
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change event handler
  error?: string; // Optional error message
  labelClassname?: string; // Optional additional class names for the label
  inputClassname?: string; // Optional additional class names
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  error,
  inputClassname,
  labelClassname,
}) => {
  return (
    <div className={`flex flex-col gap-1`}>
      <label
        htmlFor={name}
        className={`text-sm font-bold text-gray-700 ${labelClassname}`}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`text-sm rounded-md py-1 px-2 shadow-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full ${inputClassname}`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default FormInput;
