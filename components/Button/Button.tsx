import cs from "classnames";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    React.PropsWithChildren {
  variant?: "primary" | "secondary" | "info";
}

const { BaseTheme, PrimaryTheme, SecondaryTheme, InfoTheme } = {
  BaseTheme:
    "py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full",
  PrimaryTheme: "bg-primary",
  SecondaryTheme: "bg-secondary",
  InfoTheme: "bg-white",
};

export const Button: React.FunctionComponent<ButtonProps> = ({
  variant = "primary",
  children,
  ...rest
}) => {
  switch (variant) {
    case "primary":
      return (
        <button className={cs(BaseTheme, PrimaryTheme)} {...rest}>
          {children}
        </button>
      );
    case "secondary":
      return (
        <button className={cs(BaseTheme, SecondaryTheme)} {...rest}>
          {children}
        </button>
      );
    case "info":
      return (
        <button className={cs(BaseTheme, InfoTheme)} {...rest}>
          {children}
        </button>
      );
    default:
      return (
        <button className={cs(BaseTheme)} {...rest}>
          {children}
        </button>
      );
  }
};
