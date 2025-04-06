import React from "react";

interface MainWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const MainWrapper: React.FC<MainWrapperProps> = ({
  children,
  className = "flex flex-col min-h-screen w-screen",
}) => {
  return <main className={className}>{children}</main>;
};

export default MainWrapper;
