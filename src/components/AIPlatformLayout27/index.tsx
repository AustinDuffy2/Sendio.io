import React from "react";

import { Text } from "components";

type AIPlatformLayout27Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "headingfour"
  | "texttwo"
  | "numbertwo"
  | "textthree"
  | "numberthree"
  | "textfour"
> &
  Partial<{
    headingfour: string;
    texttwo: string;
    numbertwo: string;
    textthree: string;
    numberthree: string;
    textfour: string;
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
                {props?.headingfour}
              </Text>
              <Text
                className="text-black-900 text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.texttwo}
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start py-2 w-full">
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                  size="txtRobotoCondensedBold48"
                >
                  {props?.numbertwo}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.textthree}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                  size="txtRobotoCondensedBold48"
                >
                  {props?.numberthree}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.textfour}
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
  headingfour: "Discover the Power of Our Platform",
  texttwo:
    "With our highly trained AI platform, we have successfully found countless properties and satisfied users worldwide.",
  numbertwo: "50%",
  textthree: "Increase in Property Discoveries and User Satisfaction",
  numberthree: "50%",
  textfour: "Growth in Property Listings and User Engagement",
};

export default AIPlatformLayout27;
