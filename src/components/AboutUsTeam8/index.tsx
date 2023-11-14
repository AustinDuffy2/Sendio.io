import React from "react";

import { Img, List, Text } from "components";

type AboutUsTeam8Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheadingtwoon"
  | "headingthree"
  | "loremipsumdolorOne"
  | "username"
  | "userjobtitle"
  | "description"
  | "username1"
  | "userjobtitle1"
  | "description1"
  | "username2"
  | "userjobtitle2"
  | "description2"
> &
  Partial<{
    subheadingtwoon: string;
    headingthree: string;
    loremipsumdolorOne: string;
    username: string;
    userjobtitle: string;
    description: string;
    username1: string;
    userjobtitle1: string;
    description1: string;
    username2: string;
    userjobtitle2: string;
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
            {props?.subheadingtwoon}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingthree}
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
                      {props?.username}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.userjobtitle}
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
                      {props?.username1}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.userjobtitle1}
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
                      {props?.username2}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.userjobtitle2}
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
  subheadingtwoon: "Revolutionizing",
  headingthree: "Meet Our Team",
  loremipsumdolorOne:
    "Get to know the talented individuals driving our platform",
  username: "John Doe",
  userjobtitle: "Founder",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  username1: "Jane Smith",
  userjobtitle1: "Developer",
  description1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  username2: "Michael Johnson",
  userjobtitle2: "Advisor",
  description2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export default AboutUsTeam8;
