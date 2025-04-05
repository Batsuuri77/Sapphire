import React from "react";

interface MainWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const MainWrapper: React.FC<MainWrapperProps> = ({
  children,
  className = "flex-1 flex flex-col items-center justify-center w-full",
}) => {
  return (
    <main className={className}>
      <div className="flex flex-col">{children}</div>
    </main>
  );
};

export default MainWrapper;
