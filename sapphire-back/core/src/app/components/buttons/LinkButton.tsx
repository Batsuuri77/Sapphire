import React from "react";

interface LinkButtonProps {
  title: string; // Button title
  href: string; // URL to navigate to
  disabled?: boolean; // Optional disabled state
  additionalClassName?: string; // Optional additional class names
}

const LinkButton: React.FC<LinkButtonProps> = ({
  title,
  href,
  disabled = false,
  additionalClassName,
}) => {
  return (
    <a
      href={href}
      aria-disabled={disabled}
      className={`bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 w-full ${additionalClassName}`}
    >
      {title}
    </a>
  );
};

export default LinkButton;
