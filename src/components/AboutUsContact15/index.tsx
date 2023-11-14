import React from "react";

import { Img, List, Text } from "components";

type AboutUsContact15Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "tagline"
  | "contactusheading"
  | "contactustext"
  | "emailheading"
  | "emailaddress"
  | "phoneheading"
  | "phonenumber"
  | "officeheading"
  | "officeaddress"
> &
  Partial<{
    tagline: string;
    contactusheading: string;
    contactustext: string;
    emailheading: string;
    emailaddress: string;
    phoneheading: string;
    phonenumber: string;
    officeheading: string;
    officeaddress: string;
  }>;

const AboutUsContact15: React.FC<AboutUsContact15Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-4 items-start justify-center w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.tagline}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.contactusheading}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[694px] md:max-w-full text-black-900 text-center text-lg"
              size="txtRobotoRegular18"
            >
              {props?.contactustext}
            </Text>
          </div>
          <List
            className="flex flex-col gap-6 items-center py-2 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 md:flex-col flex-row gap-4 items-start justify-start my-0 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_iconenvelope.svg"
                alt="iconenvelope"
              />
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.emailheading}
                </Text>
                <Text
                  className="text-base text-black-900 underline w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.emailaddress}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-4 items-start justify-start my-0 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_iconphone.svg"
                alt="iconphone"
              />
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.phoneheading}
                </Text>
                <Text
                  className="text-base text-black-900 underline w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.phonenumber}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-4 items-start justify-start my-0 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_iconmap.svg"
                alt="iconmap"
              />
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.officeheading}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.officeaddress}
                </Text>
              </div>
            </div>
          </List>
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

AboutUsContact15.defaultProps = {
  tagline: "Tagline",
  contactusheading: "Contact us",
  contactustext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  emailheading: "Email",
  emailaddress: "hello@relume.io",
  phoneheading: "Phone",
  phonenumber: "+1 (555) 000-0000",
  officeheading: "Office",
  officeaddress: "123 Sample St, Sydney NSW 2000 AU",
};

export default AboutUsContact15;
