import React from "react";

import { Button, Text } from "components";

type HomeContentProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "headingone" | "texttwo" | "buttontext"
> &
  Partial<{ headingone: string; texttwo: string; buttontext: string }>;

const HomeContent: React.FC<HomeContentProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
            size="txtRobotoBold32"
          >
            {props?.headingone}
          </Text>
          <Text
            className="text-black-900 text-center text-lg w-full"
            size="txtRobotoRegular18"
          >
            {props?.texttwo}
          </Text>
        </div>
        <Button
          className="cursor-pointer font-roboto h-12 text-base text-center w-[155px]"
          shape="round"
          color="light_blue_500_7f"
          size="md"
          variant="fill"
        >
          {props?.buttontext}
        </Button>
      </div>
    </>
  );
};

HomeContent.defaultProps = {
  headingone: "Join Us!",
  texttwo: "Exciting opportunities to be part of our team",
  buttontext: "Button",
};

export default HomeContent;
