import React from "react";

import { Button, Img, List, Text } from "components";

type PropertiesLayout237Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "tagline"
  | "searchtagline"
  | "searchdescription"
  | "locationsearchheading"
  | "locationsearchtext"
  | "propertytypefilterheading"
  | "propertytypefiltertext"
  | "sizepricerangefilterheading"
  | "sizepricerangefiltertext"
  | "searchbuttontext"
  | "signupbuttontext"
> &
  Partial<{
    tagline: string;
    searchtagline: string;
    searchdescription: JSX.Element | string;
    locationsearchheading: string;
    locationsearchtext: string;
    propertytypefilterheading: string;
    propertytypefiltertext: string;
    sizepricerangefilterheading: string;
    sizepricerangefiltertext: JSX.Element | string;
    searchbuttontext: string;
    signupbuttontext: string;
  }>;

const PropertiesLayout237: React.FC<PropertiesLayout237Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.tagline}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.searchtagline}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[1408px] md:max-w-full text-black-900 text-center text-lg"
              size="txtRobotoRegular18"
            >
              {props?.searchdescription}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-center justify-start w-full">
          <List
            className="sm:flex-col flex-row gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume_black_900.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                  size="txtRobotoBold32"
                >
                  {props?.locationsearchheading}
                </Text>
                <Text
                  className="text-base text-black-900 text-center w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.locationsearchtext}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume_black_900.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                  size="txtRobotoBold32"
                >
                  {props?.propertytypefilterheading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[437px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.propertytypefiltertext}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume_black_900.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                  size="txtRobotoBold32"
                >
                  {props?.sizepricerangefilterheading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[437px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.sizepricerangefiltertext}
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-row gap-6 items-center justify-start pt-4 w-auto">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto h-11 min-w-[98px] text-base text-center"
              shape="round"
              color="light_blue_500_72"
              size="md"
              variant="fill"
            >
              {props?.searchbuttontext}
            </Button>
            <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] shadow-bs w-auto">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtRobotoRegular16"
              >
                {props?.signupbuttontext}
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_iconrelume.svg"
                alt="folder"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PropertiesLayout237.defaultProps = {
  tagline: "Discover",
  searchtagline: "Find Your Perfect Property with Advanced Search Filters",
  searchdescription: (
    <>
      Our platform offers a highly advanced search feature that allows you to
      easily find the perfect property. With filters for location, property
      type, size, and price range, you can quickly narrow down your options and
      find exactly what you&#39;re looking for.
    </>
  ),
  locationsearchheading: "Location-Based Search",
  locationsearchtext:
    "Easily search for properties based on your desired location.",
  propertytypefilterheading: "Property Type Filter",
  propertytypefiltertext:
    "Filter properties based on their type, such as commercial real estate, multi-family, or industrial sites.",
  sizepricerangefilterheading: "Size and Price Range Filters",
  sizepricerangefiltertext: (
    <>
      Narrow down your search by specifying the size and price range of the
      properties you&#39;re interested in.
    </>
  ),
  searchbuttontext: "Search",
  signupbuttontext: "Sign Up",
};

export default PropertiesLayout237;
