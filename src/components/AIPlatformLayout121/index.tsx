import React from "react";

import { Button, Img, Line, List, Text } from "components";

type AIPlatformLayout121Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheadingtext"
  | "searchtext"
  | "searchbutton"
  | "buttontwo"
  | "heading"
  | "text"
  | "heading1"
  | "text1"
  | "heading2"
  | "text2"
  | "heading3"
  | "descriptiontext"
> &
  Partial<{
    subheadingtext: string;
    searchtext: string;
    searchbutton: string;
    buttontwo: string;
    heading: string;
    text: JSX.Element | string;
    heading1: string;
    text1: string;
    heading2: string;
    text2: string;
    heading3: string;
    descriptiontext: string;
  }>;

const AIPlatformLayout121: React.FC<AIPlatformLayout121Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-center w-full">
          <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtRobotoSemiBold16"
              >
                {props?.subheadingtext}
              </Text>
              <Text
                className="leading-[120.00%] max-w-[664px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtRobotoCondensedBold48"
              >
                {props?.searchtext}
              </Text>
            </div>
            <div className="flex flex-row gap-6 items-center justify-start pt-4 w-auto">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto h-11 min-w-[98px] text-base text-center"
                shape="round"
                color="light_blue_500_72"
                size="md"
                variant="fill"
              >
                {props?.searchbutton}
              </Button>
              <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] shadow-bs w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.buttontwo}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_iconrelume.svg"
                  alt="folderone"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <List
              className="flex flex-col gap-4 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-12 w-12"
                    src="images/img_iconrelume_black_900.svg"
                    alt="iconrelume"
                  />
                  <Line className="bg-black-900 h-[100px] w-0.5" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.heading}
                  </Text>
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.text}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-12 w-12"
                    src="images/img_iconrelume_black_900.svg"
                    alt="iconrelume"
                  />
                  <Line className="bg-black-900 h-[100px] w-0.5" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.heading1}
                  </Text>
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.text1}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-12 w-12"
                    src="images/img_iconrelume_black_900.svg"
                    alt="iconrelume"
                  />
                  <Line className="bg-black-900 h-[100px] w-0.5" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.heading2}
                  </Text>
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.text2}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start w-12">
                  <Img
                    className="h-12 w-12"
                    src="images/img_iconrelume_black_900.svg"
                    alt="iconrelume"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.heading3}
                  </Text>
                  <Text
                    className="leading-[150.00%] md:max-w-full max-w-xl text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.descriptiontext}
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

AIPlatformLayout121.defaultProps = {
  subheadingtext: "Revolutionize",
  searchtext: "Streamline Your Property Search with AI",
  searchbutton: "Search",
  buttontwo: "Discover",
  heading: "Input Criteria",
  text: (
    <>
      Tell us what you&#39;re looking for and let our AI platform do the rest.
    </>
  ),
  heading1: "Receive Suggestions",
  text1:
    "Get personalized property suggestions based on your criteria and preferences.",
  heading2: "Explore Options",
  text2:
    "Browse through a wide range of properties that match your requirements.",
  heading3: "Make Informed Decisions",
  descriptiontext:
    "Access detailed property information and make confident choices for your next investment.",
};

export default AIPlatformLayout121;
