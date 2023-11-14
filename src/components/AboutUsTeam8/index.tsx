import React from "react";

import { Img, List, Text } from "components";

type AboutUsTeam8Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheadingTwo"
  | "headingThree"
  | "loremipsumdolorOne"
  | "useronename"
  | "useronejobtitle"
  | "description"
  | "usertwoname"
  | "usertwojobtitle"
  | "description1"
  | "userthreename"
  | "userthreejobtitle"
  | "description2"
> &
  Partial<{
    subheadingTwo: string;
    headingThree: string;
    loremipsumdolorOne: string;
    useronename: string;
    useronejobtitle: string;
    description: string;
    usertwoname: string;
    usertwojobtitle: string;
    description1: string;
    userthreename: string;
    userthreejobtitle: string;
    description2: string;
  }>;

const AboutUsTeam8: React.FC<AboutUsTeam8Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheadingTwo}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingThree}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.loremipsumdolorOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start px-2.5 w-full">
            <List
              className="sm:flex-col flex-row gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-6 items-center justify-start p-2.5 w-full">
                <Img
                  className="h-[500px] sm:h-auto object-cover w-full"
                  src="images/img_heroanimation.png"
                  alt="heroanimation"
                />
                <div className="flex flex-col gap-4 items-center justify-start px-2.5 w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.useronename}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.useronejobtitle}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[390px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.description}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-center w-[100px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start p-2.5 w-full">
                <Img
                  className="h-[500px] sm:h-auto object-cover w-full"
                  src="images/img_heroanimation.png"
                  alt="heroanimation"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.usertwoname}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.usertwojobtitle}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[410px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.description1}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start p-2.5 w-full">
                <Img
                  className="h-[500px] sm:h-auto object-cover w-full"
                  src="images/img_heroanimation.png"
                  alt="heroanimation"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.userthreename}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.userthreejobtitle}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[410px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.description2}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

AboutUsTeam8.defaultProps = {
  subheadingTwo: "Revolutionizing",
  headingThree: "Meet Our Team",
  loremipsumdolorOne:
    "Get to know the talented individuals driving our platform",
  useronename: "John Doe",
  useronejobtitle: "Founder",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  usertwoname: "Jane Smith",
  usertwojobtitle: "Developer",
  description1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  userthreename: "Michael Johnson",
  userthreejobtitle: "Advisor",
  description2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export default AboutUsTeam8;
