import React from "react";

import { Button, Img, PagerIndicator, Slider, Text } from "components";

type AIPlatformTestimonial7Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userquote" | "username" | "userposition"
> &
  Partial<{ userquote: string; username: string; userposition: string }>;

const AIPlatformTestimonial7: React.FC<AIPlatformTestimonial7Props> = (
  props,
) => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-12 items-center justify-start w-full">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 1 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="w-full"
            items={[...Array(5)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex flex-col items-center justify-between max-w-[1408px] mx-2.5">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                    <Button
                      className="flex h-12 items-center justify-center rounded-[50%] w-12"
                      shape="circle"
                      color="black_900"
                      size="lg"
                      variant="outline"
                    >
                      <Img
                        className="h-4"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </Button>
                    <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
                      <Img
                        className="h-12 w-[120px]"
                        src="images/img_webflowblack.svg"
                        alt="webflowblack"
                      />
                      <Text
                        className="leading-[140.00%] max-w-[1312px] md:max-w-full text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                        size="txtRobotoBold24"
                      >
                        {props?.userquote}
                      </Text>
                      <div className="flex flex-col gap-4 items-center justify-start w-[300px]">
                        <Img
                          className="h-14 md:h-auto rounded-[50%] w-14"
                          src="images/img_avatarimage_56x56.png"
                          alt="avatarimage"
                        />
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <Text
                            className="text-base text-black-900 text-center w-full"
                            size="txtRobotoSemiBold16"
                          >
                            {props?.username}
                          </Text>
                          <Text
                            className="text-base text-black-900 text-center w-full"
                            size="txtRobotoRegular16"
                          >
                            {props?.userposition}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="flex h-12 items-center justify-center rounded-[50%] w-12"
                      shape="circle"
                      color="black_900"
                      size="lg"
                      variant="outline"
                    >
                      <Img
                        className="h-4"
                        src="images/img_arrowleft.svg"
                        alt="arrowright"
                      />
                    </Button>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer rounded-[50%] h-2 bg-black-900 w-2" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-400 w-2"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="flex gap-[9px] h-7 items-start justify-start p-2.5 w-24"
            count={5}
            activeCss="inline-block cursor-pointer rounded-[50%] h-2 bg-black-900 w-2"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-400 w-2"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div>
      </div>
    </>
  );
};

AIPlatformTestimonial7.defaultProps = {
  userquote:
    "Our AI platform has revolutionized the way we search for properties. It has made the process faster, more efficient, and highly accurate.",
  username: "John Doe",
  userposition: "CEO, ABC Company",
};

export default AIPlatformTestimonial7;
