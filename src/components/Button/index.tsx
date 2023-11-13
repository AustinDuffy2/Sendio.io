import React from "react";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-[10px]",
} as const;
const variants = {
  fill: {
    light_blue_500: "bg-light_blue-500 shadow-bs",
    light_blue_500_72: "bg-light_blue-500_72 shadow-bs",
    white_A700: "bg-white-A700 shadow-bs1",
    gray_100: "bg-gray-100",
    light_blue_500_7f: "bg-light_blue-500_7f shadow-bs text-white-A700",
  },
  outline: { black_900: "border border-black-900 border-solid" },
} as const;
const sizes = { xs: "py-px", sm: "p-1.5", md: "p-3", lg: "p-4" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
