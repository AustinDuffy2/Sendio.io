import React from "react";

const sizeClasses = {
  txtDarkerGrotesqueBold29: "font-bold font-darkergrotesque",
  txtRobotoBold18: "font-bold font-roboto",
  txtRobotoCondensedBold40Black900: "font-bold font-robotocondensed",
  txtDarkerGrotesqueMedium15: "font-darkergrotesque font-medium",
  txtWorkSansRegular13: "font-normal font-worksans",
  txtRobotoSemiBold20: "font-roboto font-semibold",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoCondensedBold48: "font-bold font-robotocondensed",
  txtRobotoCondensedBold56: "font-bold font-robotocondensed",
  txtRobotoRegular18: "font-normal font-roboto",
  txtRobotoLight16: "font-light font-roboto",
  txtRobotoBold24: "font-bold font-roboto",
  txtRobotoSemiBold16: "font-roboto font-semibold",
  txtRobotoSemiBold14: "font-roboto font-semibold",
  txtRobotoCondensedBold40: "font-bold font-robotocondensed",
  txtRobotoRegular20: "font-normal font-roboto",
  txtRobotoBold20: "font-bold font-roboto",
  txtRobotoBold32: "font-bold font-roboto",
  txtRobotoRegular16Gray800: "font-normal font-roboto",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
