import React from "react";

import { Img, Line, List, Text } from "components";

type HomeLayout219Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "headingtext"
  | "descriptiontext"
  | "headingtext1"
  | "descriptiontext1"
  | "headingtext2"
  | "descriptiontext2"
> &
  Partial<{
    headingtext: string;
    descriptiontext: JSX.Element | string;
    headingtext1: string;
    descriptiontext1: JSX.Element | string;
    headingtext2: string;
    descriptiontext2: JSX.Element | string;
  }>;

const HomeLayout219: React.FC<HomeLayout219Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="flex flex-1 flex-col gap-10 items-start w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 md:flex-col flex-row gap-8 items-start justify-start my-0 px-[10.41px] py-[20.82px] rounded-[20px] w-full">
            <Line className="bg-black-900 md:h-0.5 h-[196px] w-0.5 md:w-full" />
            <div className="flex flex-1 flex-col gap-4 items-start justify-center w-full">
              <Text
                className="leading-[130.00%] max-w-[641px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtRobotoBold32"
              >
                {props?.headingtext}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[641px] md:max-w-full text-base text-black-900"
                size="txtRobotoRegular16"
              >
                {props?.descriptiontext}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 md:flex-col flex-row gap-8 items-start justify-start my-0 px-[10.41px] py-[20.82px] rounded-[20px] w-full">
            <Line className="bg-black-900 md:h-0.5 h-[196px] w-0.5 md:w-full" />
            <div className="flex flex-1 flex-col gap-4 items-start justify-center w-full">
              <Text
                className="leading-[130.00%] max-w-[641px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtRobotoBold32"
              >
                {props?.headingtext1}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[641px] md:max-w-full text-base text-black-900"
                size="txtRobotoRegular16"
              >
                {props?.descriptiontext1}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 md:flex-col flex-row gap-8 items-start justify-start my-0 px-[10.41px] py-[20.82px] rounded-[20px] w-full">
            <Line className="bg-black-900 md:h-0.5 h-[196px] w-0.5 md:w-full" />
            <div className="flex flex-1 flex-col gap-4 items-start justify-center w-full">
              <Text
                className="leading-[130.00%] max-w-[641px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtRobotoBold32"
              >
                {props?.headingtext2}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[641px] md:max-w-full text-base text-black-900"
                size="txtRobotoRegular16"
              >
                {props?.descriptiontext2}
              </Text>
            </div>
          </div>
        </List>
        <Img
          className="flex-1 h-[500px] md:h-auto object-cover w-full"
          src="images/img_heroanimation.png"
          alt="heroanimationon"
        />
      </div>
    </>
  );
};

HomeLayout219.defaultProps = {
  headingtext: "Discover Personalized Property Recommendations",
  descriptiontext: (
    <>
      Our AI-powered platform analyzes real estate data to provide you with
      personalized property recommendations based on your preferences and
      requirements. Whether you&#39;re looking for commercial real estate,
      multi-family properties, industrial sites, or rental properties, we&#39;ve
      got you covered.
    </>
  ),
  headingtext1: "Discover Personalized Property Recommendations",
  descriptiontext1: (
    <>
      Our AI-powered platform analyzes real estate data to provide you with
      personalized property recommendations based on your preferences and
      requirements. Whether you&#39;re looking for commercial real estate,
      multi-family properties, industrial sites, or rental properties, we&#39;ve
      got you covered.
    </>
  ),
  headingtext2: "Discover Personalized Property Recommendations",
  descriptiontext2: (
    <>
      Our AI-powered platform analyzes real estate data to provide you with
      personalized property recommendations based on your preferences and
      requirements. Whether you&#39;re looking for commercial real estate,
      multi-family properties, industrial sites, or rental properties, we&#39;ve
      got you covered.
    </>
  ),
};

export default HomeLayout219;
