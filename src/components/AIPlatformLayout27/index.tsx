import React from "react";

import { Text } from "components";

type AIPlatformLayout27Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "headingFour"
  | "textTwo"
  | "numberTwo"
  | "textThree"
  | "numberThree"
  | "textFour"
> &
  Partial<{
    headingFour: string;
    textTwo: string;
    numberTwo: string;
    textThree: string;
    numberThree: string;
    textFour: string;
  }>;

const AIPlatformLayout27: React.FC<AIPlatformLayout27Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-center w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                size="txtRobotoCondensedBold40Black900"
              >
                {props?.headingFour}
              </Text>
              <Text
                className="text-black-900 text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.textTwo}
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start py-2 w-full">
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                  size="txtRobotoCondensedBold48"
                >
                  {props?.numberTwo}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.textThree}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                  size="txtRobotoCondensedBold48"
                >
                  {props?.numberThree}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.textFour}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AIPlatformLayout27.defaultProps = {
  headingFour: "Discover the Power of Our Platform",
  textTwo:
    "With our highly trained AI platform, we have successfully found countless properties and satisfied users worldwide.",
  numberTwo: "50%",
  textThree: "Increase in Property Discoveries and User Satisfaction",
  numberThree: "50%",
  textFour: "Growth in Property Listings and User Engagement",
};

export default AIPlatformLayout27;
