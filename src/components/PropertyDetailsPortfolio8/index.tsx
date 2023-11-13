import React from "react";

import { Img, List, Text } from "components";

type PropertyDetailsPortfolio8Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheading"
  | "userheading"
  | "userlanguage"
  | "projectheading"
  | "projecttext"
  | "projecttagone"
  | "projecttagtwo"
  | "projecttagthree"
  | "button"
  | "projectheadingtwo"
  | "projecttexttwo"
  | "projecttagonetwo"
  | "projecttagtwotwo"
  | "projecttagthreetwo"
  | "button1"
> &
  Partial<{
    subheading: string;
    userheading: string;
    userlanguage: string;
    projectheading: string;
    projecttext: string;
    projecttagone: string;
    projecttagtwo: string;
    projecttagthree: string;
    button: string;
    projectheadingtwo: string;
    projecttexttwo: string;
    projecttagonetwo: string;
    projecttagtwotwo: string;
    projecttagthreetwo: string;
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
              {props?.userheading}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.userlanguage}
            </Text>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row md:gap-10 gap-20 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-[30px] h-full items-center justify-start w-full">
            <Img
              className="md:h-auto object-cover"
              src="images/img_heroanimation.png"
              alt="heroanimation"
            />
            <div className="flex flex-col gap-5 h-[271px] md:h-auto items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 h-[92px] md:h-auto items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtRobotoBold24"
                >
                  {props?.projectheading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[552px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.projecttext}
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-2 h-full items-start justify-start pt-4 w-full">
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] py-[5px] text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.projecttagone}
                </Text>
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] py-[5px] text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.projecttagtwo}
                </Text>
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] py-[5px] text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.projecttagthree}
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
              className="md:h-auto object-cover"
              src="images/img_heroanimation.png"
              alt="heroanimation"
            />
            <div className="flex flex-col gap-5 h-[271px] md:h-auto items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 h-[92px] md:h-auto items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtRobotoBold24"
                >
                  {props?.projectheadingtwo}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[552px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.projecttexttwo}
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-2 h-full items-start justify-start pt-4 w-full">
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] py-[5px] text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.projecttagonetwo}
                </Text>
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] py-[5px] text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.projecttagtwotwo}
                </Text>
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] py-[5px] text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.projecttagthreetwo}
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
  userheading: "Short heading goes here",
  userlanguage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  projectheading: "Project name here",
  projecttext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  projecttagone: "Tag one",
  projecttagtwo: "Tag two",
  projecttagthree: "Tag three",
  button: "Button",
  projectheadingtwo: "Project name here",
  projecttexttwo:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  projecttagonetwo: "Tag one",
  projecttagtwotwo: "Tag two",
  projecttagthreetwo: "Tag three",
  button1: "Button",
};

export default PropertyDetailsPortfolio8;
