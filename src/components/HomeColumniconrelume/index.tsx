import React from "react";

import { Button, Img, List, Text } from "components";

type HomeColumniconrelumeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "sectionheading"
  | "sectiondescription"
  | "buttonlabel"
  | "buttonOne"
  | "sectionheading1"
  | "sectiondescription1"
  | "buttonlabel1"
  | "buttonone1"
  | "sectionheading2"
  | "sectiondescription2"
  | "buttonlabel2"
  | "buttonone2"
> &
  Partial<{
    sectionheading: string;
    sectiondescription: string;
    buttonlabel: string;
    buttonOne: string;
    sectionheading1: string;
    sectiondescription1: string;
    buttonlabel1: string;
    buttonone1: string;
    sectionheading2: string;
    sectiondescription2: string;
    buttonlabel2: string;
    buttonone2: string;
  }>;

const HomeColumniconrelume: React.FC<HomeColumniconrelumeProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="sm:flex-col flex-row gap-[46.1px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-[30px] h-[451px] md:h-auto items-center justify-between p-2.5 w-full">
            <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
              <Img
                className="h-[46px] w-[46px]"
                src="images/img_iconrelume_black_900.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[314px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtRobotoBold32"
                >
                  {props?.sectionheading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[314px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.sectiondescription}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[23.05px] items-center justify-center pt-[15.37px] w-full">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto h-[42px] min-w-[92px] rounded-[9px] text-base text-center"
                shape="round"
                color="light_blue_500_72"
                size="md"
                variant="fill"
              >
                {props?.buttonlabel}
              </Button>
              <div className="h-[23px] relative w-[76px]">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[9px] shadow-bs3 w-auto">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.buttonOne}
                  </Text>
                </div>
                <Img
                  className="absolute h-[23px] inset-y-[0] my-auto right-[0] w-[23px]"
                  src="images/img_iconrelume.svg"
                  alt="folder"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[30px] h-[451px] md:h-auto items-center justify-between p-2.5 w-full">
            <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
              <Img
                className="h-[46px] w-[46px]"
                src="images/img_iconrelume_black_900.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[314px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtRobotoBold32"
                >
                  {props?.sectionheading1}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[314px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.sectiondescription1}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[23.05px] items-center justify-center pt-[15.37px] w-full">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto h-[42px] min-w-[92px] rounded-[9px] text-base text-center"
                shape="round"
                color="light_blue_500_72"
                size="md"
                variant="fill"
              >
                {props?.buttonlabel1}
              </Button>
              <div className="flex flex-row gap-[7.68px] items-center justify-center rounded-[9px] shadow-bs3 w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.buttonone1}
                </Text>
                <Img
                  className="h-[23px] w-[23px]"
                  src="images/img_iconrelume.svg"
                  alt="folder"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[30px] h-[451px] md:h-auto items-center justify-between p-2.5 w-full">
            <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
              <Img
                className="h-[46px] w-[46px]"
                src="images/img_iconrelume_black_900.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[314px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtRobotoBold32"
                >
                  {props?.sectionheading2}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[314px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.sectiondescription2}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[23.05px] items-center justify-center pt-[15.37px] w-full">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto h-[42px] min-w-[92px] rounded-[9px] text-base text-center"
                shape="round"
                color="light_blue_500_72"
                size="md"
                variant="fill"
              >
                {props?.buttonlabel2}
              </Button>
              <div className="h-[23px] relative w-[76px]">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[9px] shadow-bs3 w-auto">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.buttonone2}
                  </Text>
                </div>
                <Img
                  className="absolute h-[23px] inset-y-[0] my-auto right-[0] w-[23px]"
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

HomeColumniconrelume.defaultProps = {
  sectionheading: "Medium length section heading goes here",
  sectiondescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  buttonlabel: "Button",
  buttonOne: "Button",
  sectionheading1: "Medium length section heading goes here",
  sectiondescription1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  buttonlabel1: "Button",
  buttonone1: "Button",
  sectionheading2: "Medium length section heading goes here",
  sectiondescription2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  buttonlabel2: "Button",
  buttonone2: "Button",
};

export default HomeColumniconrelume;
