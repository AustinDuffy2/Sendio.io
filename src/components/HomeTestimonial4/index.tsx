import React from "react";

import { Img, Text } from "components";

type HomeTestimonial4Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "description" | "name" | "title"
> &
  Partial<{ description: string; name: string; title: string }>;

const HomeTestimonial4: React.FC<HomeTestimonial4Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[30.73px] items-center justify-start w-full">
          <Img
            className="h-[18px] w-[111px]"
            src="images/img_stars.svg"
            alt="stars"
          />
          <div className="flex flex-col gap-[27px] items-center justify-start w-full">
            <Text
              className="leading-[140.00%] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
              size="txtRobotoBold24"
            >
              {props?.description}
            </Text>
            <div className="flex md:flex-col flex-row gap-[19.21px] items-center justify-center w-full">
              <Img
                className="h-[53px] md:h-auto rounded-[50%] w-[53px]"
                src="images/img_avatarimage.png"
                alt="avatarimage"
              />
              <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="flex md:justify-center justify-start text-base text-black-900 w-full"
                  size="txtRobotoSemiBold16"
                >
                  {props?.name}
                </Text>
                <Text
                  className="flex md:justify-center text-base text-black-900 text-center w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.title}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeTestimonial4.defaultProps = {
  description:
    "Our platform has been a game-changer for me. I was able to find my dream property within days, thanks to the advanced search features and comprehensive real estate data.",
  name: "John Doe",
  title: "CEO, ABC Company",
};

export default HomeTestimonial4;
