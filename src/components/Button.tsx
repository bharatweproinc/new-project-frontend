import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
  size?: "small" | "medium" | "large";
}

const colorClasses: Record<string, any> = {
  primary: {
    contained: "bg-teal-600 text-white hover:bg-teal-700",
    outlined: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    text: "text-teal-600 hover:bg-teal-50",
  },
  secondary: {
    contained: "bg-gray-600 text-white hover:bg-gray-700",
    outlined: "border border-gray-600 text-gray-600 hover:bg-gray-50",
    text: "text-gray-600 hover:bg-gray-100",
  },
  danger: {
    contained: "bg-red-600 text-white hover:bg-red-700",
    outlined: "border border-red-600 text-red-600 hover:bg-red-50",
    text: "text-red-600 hover:bg-red-100",
  },
  success: {
    contained: "bg-green-600 text-white hover:bg-green-700",
    outlined: "border border-green-600 text-green-600 hover:bg-green-50",
    text: "text-green-600 hover:bg-green-100",
  },
  warning: {
    contained: "bg-yellow-500 text-white hover:bg-yellow-600",
    outlined: "border border-yellow-500 text-yellow-500 hover:bg-yellow-50",
    text: "text-yellow-600 hover:bg-yellow-100",
  },
};

const sizeClasses = {
  small: "text-sm px-3 py-1.5",
  medium: "text-base px-4 py-2",
  large: "text-lg px-6 py-3",
};

const Button: React.FC<ButtonProps> = ({
	children,
	variant = "contained",
	color = "primary",
	size = "medium",
	className = "",
	...props
}) => {
  const classes =
    `font-semibold rounded focus:outline-none transition-all duration-200 ` +
    sizeClasses[size] +
    " " +
    colorClasses[color][variant] +
    " " +
    className;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;