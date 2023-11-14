import React from "react";

import { Img, List, Text } from "components";

type ContactContact27Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheading"
  | "heading"
  | "language"
  | "locationname"
  | "locationaddress"
  | "locationbutton"
  | "heading1"
  | "text"
  | "locationbutton1"
> &
  Partial<{
    subheading: string;
    heading: string;
    language: string;
    locationname: string;
    locationaddress: string;
    locationbutton: string;
    heading1: string;
    text: string;
    locationbutton1: string;
  }>;

const ContactContact27: React.FC<ContactContact27Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheading}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.heading}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.language}
            </Text>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row md:gap-10 gap-16 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <Img
              className="h-[500px] md:h-auto object-cover w-full"
              src="images/img_heroanimation.png"
              alt="heroanimation"
            />
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                  size="txtRobotoBold32"
                >
                  {props?.locationname}
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.locationaddress}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] shadow-bs w-full">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.locationbutton}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_iconrelume.svg"
                  alt="folder"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <Img
              className="md:h-auto object-cover w-full"
              src="images/img_heroanimation.png"
              alt="heroanimation"
            />
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                  size="txtRobotoBold32"
                >
                  {props?.heading1}
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.text}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] shadow-bs w-full">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.locationbutton1}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_iconrelume.svg"
                  alt="folder"
                />
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

ContactContact27.defaultProps = {
  subheading: "Tagline",
  heading: "Locations",
  language: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  locationname: "Sydney",
  locationaddress: "123 Sample St, Sydney NSW 2000 AU",
  locationbutton: "Button",
  heading1: "New York",
  text: "123 Sample St, New York NY 10000 USA",
  locationbutton1: "Button",
};

export default ContactContact27;
