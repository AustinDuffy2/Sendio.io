import React from "react";

import { Button, Img, Text } from "components";

type AIPlatformLayout25Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheadingtwo"
  | "headingthree"
  | "descriptionTwo"
  | "number"
  | "text"
  | "numberone"
  | "textone"
  | "learnMoreOne"
  | "buttonthree"
> &
  Partial<{
    subheadingtwo: string;
    headingthree: string;
    descriptionTwo: string;
    number: string;
    text: string;
    numberone: string;
    textone: string;
    learnMoreOne: string;
    buttonthree: string;
  }>;

const AIPlatformLayout25: React.FC<AIPlatformLayout25Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col items-start justify-center w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-base text-black-900 text-center w-auto"
                  size="txtRobotoSemiBold16"
                >
                  {props?.subheadingtwo}
                </Text>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="leading-[120.00%] max-w-[664px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                    size="txtRobotoCondensedBold48"
                  >
                    {props?.headingthree}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[664px] md:max-w-full text-black-900 text-lg"
                    size="txtRobotoRegular18"
                  >
                    {props?.descriptionTwo}
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start py-2 w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                    size="txtRobotoCondensedBold48"
                  >
                    {props?.number}
                  </Text>
                  <Text
                    className="leading-[150.00%] md:max-w-full max-w-xs text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.text}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                    size="txtRobotoCondensedBold48"
                  >
                    {props?.numberone}
                  </Text>
                  <Text
                    className="leading-[150.00%] md:max-w-full max-w-xs text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.textone}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center justify-start pt-4 w-auto">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto h-11 min-w-[129px] text-base text-center"
                shape="round"
                color="light_blue_500_72"
                size="md"
                variant="fill"
              >
                {props?.learnMoreOne}
              </Button>
              <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] shadow-bs w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.buttonthree}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_iconrelume.svg"
                  alt="foldertwo"
                />
              </div>
            </div>
          </div>
        </div>
        <Img
          className="flex-1 h-[500px] md:h-auto object-cover w-full"
          src="images/img_heroanimation.png"
          alt="heroanimationon"
        />
      </div>
    </>
  );
};

AIPlatformLayout25.defaultProps = {
  subheadingtwo: "Revolutionize",
  headingthree: "AI Platform: Transforming Real Estate Search",
  descriptionTwo:
    "Our AI platform revolutionizes the real estate search process by analyzing millions of data points. Find the perfect property with ease.",
  number: "50%",
  text: "AI-powered technology for accurate property recommendations.",
  numberone: "50%",
  textone: "Efficiently search and compare properties worldwide.",
  learnMoreOne: "Learn More",
  buttonthree: "Sign Up",
};

export default AIPlatformLayout25;
