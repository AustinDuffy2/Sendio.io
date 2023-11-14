import React from "react";

import { Button, Img, Text } from "components";

type AIPlatformHeader26Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "searchtext" | "searchdescription" | "searchbutton" | "signupbutton"
> &
  Partial<{
    searchtext: string;
    searchdescription: string;
    searchbutton: string;
    signupbutton: string;
  }>;

const AIPlatformHeader26: React.FC<AIPlatformHeader26Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-[38.42px] items-center justify-center w-full">
          <Text
            className="leading-[120.00%] max-w-[705px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center"
            size="txtRobotoCondensedBold56"
          >
            {props?.searchtext}
          </Text>
          <div className="flex flex-col items-center justify-start p-[2.88px] w-full">
            <Text
              className="max-w-[699px] md:max-w-full text-[13px] text-black-900 text-center tracking-[-0.26px]"
              size="txtWorkSansRegular13"
            >
              {props?.searchdescription}
            </Text>
          </div>
          <div className="flex flex-row gap-[14.76px] items-center justify-center p-[2.88px] w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[92px] rounded-[9px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.searchbutton}
            </Button>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto h-10 min-w-[97px] rounded-[9px] text-base text-center"
              shape="round"
              color="light_blue_500_72"
              size="md"
              variant="fill"
            >
              {props?.signupbutton}
            </Button>
          </div>
        </div>
        <Img
          className="flex-1 md:h-auto object-cover w-[0]"
          src="images/img_heroanimation.png"
          alt="heroanimation"
        />
      </div>
    </>
  );
};

AIPlatformHeader26.defaultProps = {
  searchtext: "Find the perfect property for your needs today",
  searchdescription:
    "Discover a wide range of commercial real estate, multi-family, industrial sites, and rental properties around the world with our AI-powered platform.",
  searchbutton: "Search",
  signupbutton: "Sign Up",
};

export default AIPlatformHeader26;
