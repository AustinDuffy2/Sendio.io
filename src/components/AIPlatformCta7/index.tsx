import React from "react";

import { Button, Text } from "components";

type AIPlatformCta7Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "headingfive" | "textfive" | "signuplabel" | "learnmorelabel"
> &
  Partial<{
    headingfive: string;
    textfive: string;
    signuplabel: string;
    learnmorelabel: string;
  }>;

const AIPlatformCta7: React.FC<AIPlatformCta7Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-center w-full">
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                size="txtRobotoCondensedBold40Black900"
              >
                {props?.headingfive}
              </Text>
              <Text
                className="text-black-900 text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.textfive}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-row gap-4 items-start justify-end w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[103px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.signuplabel}
            </Button>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto h-11 min-w-[129px] text-base text-center"
              shape="round"
              color="light_blue_500_72"
              size="md"
              variant="fill"
            >
              {props?.learnmorelabel}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

AIPlatformCta7.defaultProps = {
  headingfive: "Unlock the Power of AI",
  textfive: "Discover the Future of Real Estate with Our AI Platform",
  signuplabel: "Sign Up",
  learnmorelabel: "Learn More",
};

export default AIPlatformCta7;
