import React from "react";

import { Button, Text } from "components";

type PropertyDetailsColumnheadingtwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "headingtwo"
  | "textone"
  | "waterfrontlabel"
  | "luxurylabel"
  | "exclusivelabel"
  | "text"
  | "clientname"
  | "text1"
  | "date"
  | "text2"
  | "role"
  | "text3"
  | "websiteurl"
> &
  Partial<{
    headingtwo: string;
    textone: string;
    waterfrontlabel: string;
    luxurylabel: string;
    exclusivelabel: string;
    text: string;
    clientname: string;
    text1: string;
    date: string;
    text2: string;
    role: string;
    text3: string;
    websiteurl: string;
  }>;

const PropertyDetailsColumnheadingtwo: React.FC<
  PropertyDetailsColumnheadingtwoProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-full">
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 w-full"
                size="txtRobotoCondensedBold56"
              >
                {props?.headingtwo}
              </Text>
              <Text
                className="text-black-900 text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.textone}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-start justify-start w-full">
              <Button
                className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[84px] text-center text-sm"
                shape="square"
                color="gray_100"
                size="sm"
                variant="fill"
              >
                {props?.waterfrontlabel}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[59px] text-center text-sm"
                shape="square"
                color="gray_100"
                size="sm"
                variant="fill"
              >
                {props?.luxurylabel}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[75px] text-center text-sm"
                shape="square"
                color="gray_100"
                size="sm"
                variant="fill"
              >
                {props?.exclusivelabel}
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="md:gap-5 gap-8 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.text}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.clientname}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.text1}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.date}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.text2}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.role}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.text3}
                </Text>
                <Text
                  className="text-base text-black-900 underline w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.websiteurl}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PropertyDetailsColumnheadingtwo.defaultProps = {
  headingtwo: "Luxury Condo Project",
  textone:
    "Experience modern living at its finest in this luxurious waterfront condominium.",
  waterfrontlabel: "Waterfront",
  luxurylabel: "Luxury",
  exclusivelabel: "Exclusive",
  text: "Client",
  clientname: "John Doe",
  text1: "Date",
  date: "April 2023",
  text2: "Role",
  role: "Architect",
  text3: "Website",
  websiteurl: "www.luxurycondos.com",
};

export default PropertyDetailsColumnheadingtwo;
