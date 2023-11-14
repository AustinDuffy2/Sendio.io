import React from "react";

import { Img, List, Text } from "components";

type PropertyDetailsPortfolio8Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheading"
  | "headingfive"
  | "language"
  | "heading"
  | "text"
  | "tag"
  | "tagone"
  | "tagtwo"
  | "button"
  | "heading1"
  | "text1"
  | "tag1"
  | "tagone1"
  | "tagtwo1"
  | "button1"
> &
  Partial<{
    subheading: string;
    headingfive: string;
    language: string;
    heading: string;
    text: string;
    tag: string;
    tagone: string;
    tagtwo: string;
    button: string;
    heading1: string;
    text1: string;
    tag1: string;
    tagone1: string;
    tagtwo1: string;
    button1: string;
  }>;

const PropertyDetailsPortfolio8: React.FC<PropertyDetailsPortfolio8Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheading}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingfive}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.language}
            </Text>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row md:gap-10 gap-20 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-[30px] h-full items-center justify-start w-full">
            <Img
              className="h-[500px] md:h-auto object-cover w-full"
              src="images/img_heroanimation.png"
              alt="heroanimation"
            />
            <div className="flex flex-col gap-5 h-[271px] md:h-auto items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 h-[92px] md:h-auto items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtRobotoBold24"
                >
                  {props?.heading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[552px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.text}
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-2 h-full items-start justify-start pt-4 w-full">
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] py-[5px] text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tag}
                </Text>
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] py-[5px] text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tagone}
                </Text>
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] py-[5px] text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tagtwo}
                </Text>
              </div>
              <div className="flex flex-col h-full items-start justify-start pt-6 w-full">
                <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] shadow-bs w-[120px]">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.button}
                  </Text>
                  <Img
                    className="h-[22px] w-6"
                    src="images/img_iconrelume.svg"
                    alt="folder"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[30px] h-[801px] md:h-auto items-center justify-start w-full">
            <Img
              className="h-[500px] md:h-auto object-cover w-full"
              src="images/img_heroanimation.png"
              alt="heroanimation"
            />
            <div className="flex flex-col gap-5 h-[271px] md:h-auto items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 h-[92px] md:h-auto items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtRobotoBold24"
                >
                  {props?.heading1}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[552px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.text1}
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-2 h-full items-start justify-start pt-4 w-full">
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] py-[5px] text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tag1}
                </Text>
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] py-[5px] text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tagone1}
                </Text>
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] py-[5px] text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tagtwo1}
                </Text>
              </div>
              <div className="flex flex-col h-full items-start justify-start pt-6 w-full">
                <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] shadow-bs w-[120px]">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.button1}
                  </Text>
                  <Img
                    className="h-[22px] w-6"
                    src="images/img_iconrelume.svg"
                    alt="folder"
                  />
                </div>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

PropertyDetailsPortfolio8.defaultProps = {
  subheading: "Portfolio",
  headingfive: "Short heading goes here",
  language: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  heading: "Project name here",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  tag: "Tag one",
  tagone: "Tag two",
  tagtwo: "Tag three",
  button: "Button",
  heading1: "Project name here",
  text1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  tag1: "Tag one",
  tagone1: "Tag two",
  tagtwo1: "Tag three",
  button1: "Button",
};

export default PropertyDetailsPortfolio8;
