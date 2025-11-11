"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  variant?: "primary" | "secondary" | "loginbtn" | "savebtn" | "bluebtn";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  paddings?: string;
}

const ActionButton: React.FC<ButtonProps> = ({
  label,
  className,
  variant = "primary",
  icon,
  iconPosition = "left",
  paddings,
  ...props
}) => {
  const baseStyles =
    "rr-btn flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 min-w-[120px] min-h-9 ms-2";

  const variants = {
    primary: "bg-[#FAA71B] text-[#222222]",
    secondary: "bg-amber-400  text-[#333333]",
    loginbtn: "bg-blue-800 text-white",
    savebtn: "bg-white text-gray-500 hover:text-blue-700",
    bluebtn: "bg-blue-800 text-white",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        paddings,
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{label}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default ActionButton;
