import React from "react";

import { Button, Img, Text } from "components";

type PropertyDetailsLayout22Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "headingtext" | "descriptiontext" | "learnmoretext" | "buttononetext"
> &
  Partial<{
    headingtext: string;
    descriptiontext: string;
    learnmoretext: string;
    buttononetext: string;
  }>;

const PropertyDetailsLayout22: React.FC<PropertyDetailsLayout22Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col items-start justify-center w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Img
                className="h-20 w-20"
                src="images/img_iconrelume_black_900.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                  size="txtRobotoCondensedBold48"
                >
                  {props?.headingtext}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[699px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoRegular18"
                >
                  {props?.descriptiontext}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center justify-start pt-4 w-full">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto h-11 min-w-[129px] text-base text-center"
                shape="round"
                color="light_blue_500_72"
                size="md"
                variant="fill"
              >
                {props?.learnmoretext}
              </Button>
              <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] shadow-bs w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.buttononetext}
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
        <Img
          className="flex-1 md:h-auto object-cover w-[0]"
          src="images/img_heroanimation.png"
          alt="heroanimation"
        />
      </div>
    </>
  );
};

PropertyDetailsLayout22.defaultProps = {
  headingtext: "Key Features of the Property",
  descriptiontext:
    "Discover the amazing amenities, nearby facilities, and investment potential of this property.",
  learnmoretext: "Learn More",
  buttononetext: "Sign Up",
};

export default PropertyDetailsLayout22;
