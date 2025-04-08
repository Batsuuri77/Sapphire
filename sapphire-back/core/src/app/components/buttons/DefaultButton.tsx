import React from "react";

interface DefaultButtonProps {
  onClick?: () => void; // Optional click handler
  title: string; // Button title
  disabled?: boolean; // Optional disabled state
  loading?: boolean; // Optional loading state
  loadingText?: string; // Optional loading text
  additionalClassName?: string; // Optional additional class names
  type?: "button" | "submit" | "reset"; // Button type
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
  title,
  additionalClassName = "",
  onClick,
  disabled = false,
  loading = false,
  loadingText = "Loading...",
  type = "button",
}) => {
  return (
    <button
      disabled={disabled}
      className={`bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 w-full cursor-pointer ${additionalClassName}`}
      type={type}
      onClick={onClick}
      aria-disabled={disabled}
      aria-busy={loading}
      aria-label={loading ? loadingText : title}
    >
      {title}
    </button>
  );
};

export default DefaultButton;
