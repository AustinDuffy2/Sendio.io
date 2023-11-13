import React from "react";

import { Button, Img, Line, List, Text } from "components";

type AIPlatformLayout121Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheadingone"
  | "headingtwo"
  | "searchone"
  | "buttontwo"
  | "inputcriteriaheading"
  | "inputcriteriatext"
  | "receivesuggestionsheading"
  | "receivesuggestionstext"
  | "exploreoptionsheading"
  | "exploreoptionstext"
  | "makeinformeddecisionsheading"
  | "makeinformeddecisionstext"
> &
  Partial<{
    subheadingone: string;
    headingtwo: string;
    searchone: string;
    buttontwo: string;
    inputcriteriaheading: string;
    inputcriteriatext: JSX.Element | string;
    receivesuggestionsheading: string;
    receivesuggestionstext: string;
    exploreoptionsheading: string;
    exploreoptionstext: string;
    makeinformeddecisionsheading: string;
    makeinformeddecisionstext: string;
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
                {props?.subheadingone}
              </Text>
              <Text
                className="leading-[120.00%] max-w-[664px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtRobotoCondensedBold48"
              >
                {props?.headingtwo}
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
                {props?.searchone}
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
                  alt="folder_One"
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
                    {props?.inputcriteriaheading}
                  </Text>
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.inputcriteriatext}
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
                    {props?.receivesuggestionsheading}
                  </Text>
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.receivesuggestionstext}
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
                    {props?.exploreoptionsheading}
                  </Text>
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.exploreoptionstext}
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
                    {props?.makeinformeddecisionsheading}
                  </Text>
                  <Text
                    className="leading-[150.00%] md:max-w-full max-w-xl text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.makeinformeddecisionstext}
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
  subheadingone: "Revolutionize",
  headingtwo: "Streamline Your Property Search with AI",
  searchone: "Search",
  buttontwo: "Discover",
  inputcriteriaheading: "Input Criteria",
  inputcriteriatext: (
    <>
      Tell us what you&#39;re looking for and let our AI platform do the rest.
    </>
  ),
  receivesuggestionsheading: "Receive Suggestions",
  receivesuggestionstext:
    "Get personalized property suggestions based on your criteria and preferences.",
  exploreoptionsheading: "Explore Options",
  exploreoptionstext:
    "Browse through a wide range of properties that match your requirements.",
  makeinformeddecisionsheading: "Make Informed Decisions",
  makeinformeddecisionstext:
    "Access detailed property information and make confident choices for your next investment.",
};

export default AIPlatformLayout121;
