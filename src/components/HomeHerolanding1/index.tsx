import React from "react";

import { Button, Img, Text } from "components";

type HomeHerolanding1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "username"
  | "userdescription"
  | "search"
  | "signUp"
  | "usertagline"
  | "userwelcomemessage"
> &
  Partial<{
    username: string;
    userdescription: string;
    search: string;
    signUp: string;
    usertagline: string;
    userwelcomemessage: JSX.Element | string;
  }>;

const HomeHerolanding1: React.FC<HomeHerolanding1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-[30px] items-center justify-center px-2.5 w-full">
          <Text
            className="leading-[120.00%] max-w-[674px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-black-900"
            size="txtRobotoCondensedBold56"
          >
            {props?.username}
          </Text>
          <div className="flex flex-col items-start justify-start p-[3px] w-full">
            <Text
              className="max-w-[668px] md:max-w-full text-[13px] text-black-900 tracking-[-0.26px]"
              size="txtWorkSansRegular13"
            >
              {props?.userdescription}
            </Text>
          </div>
          <div className="flex flex-row gap-[15.37px] items-center justify-center p-[3px] w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[96px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.search}
            </Button>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto h-[42px] min-w-[101px] text-base text-center"
              shape="round"
              color="light_blue_500_72"
              size="md"
              variant="fill"
            >
              {props?.signUp}
            </Button>
          </div>
          <div className="flex flex-col gap-[30px] items-start justify-end pb-2.5 pt-[50px] w-full">
            <Text
              className="sm:text-[25px] md:text-[27px] text-[29px] text-black-900 w-full"
              size="txtDarkerGrotesqueBold29"
            >
              {props?.usertagline}
            </Text>
            <div className="flex md:flex-col flex-row gap-2 items-center justify-start w-full">
              <div className="flex relative w-[99px]">
                <div className="flex my-auto w-[79%]">
                  <div className="flex my-auto w-[74%]">
                    <Img
                      className="h-[37px] ml-[undefinedpx] my-auto rounded-[50%] w-[37px] z-[1]"
                      src="images/img_ellipse1.png"
                      alt="ellipseOne"
                    />
                    <Img
                      className="h-[37px] ml-[-16.19px] my-auto rounded-[50%] w-[37px] z-[1]"
                      src="images/img_ellipse2.png"
                      alt="ellipseTwo"
                    />
                  </div>
                  <Img
                    className="h-[37px] ml-[-16.19px] my-auto rounded-[50%] w-[37px] z-[1]"
                    src="images/img_ellipse3.png"
                    alt="ellipseThree"
                  />
                </div>
                <Img
                  className="h-[37px] ml-[-16.18px] my-auto rounded-[50%] w-[37px] z-[1]"
                  src="images/img_ellipse4.png"
                  alt="ellipseFour"
                />
              </div>
              <Text
                className="flex-1 leading-[101.00%] max-w-[566px] md:max-w-full text-[15px] text-black-900"
                size="txtDarkerGrotesqueMedium15"
              >
                {props?.userwelcomemessage}
              </Text>
            </div>
          </div>
        </div>
        <Img
          className="flex-1 h-[500px] md:h-auto object-cover w-full"
          src="images/img_heroanimation.png"
          alt="heroanimation"
        />
      </div>
    </>
  );
};

HomeHerolanding1.defaultProps = {
  username: "Find the perfect property for your needs today",
  userdescription:
    "Discover a wide range of commercial real estate, multi-family, industrial sites, and rental properties around the world with our AI-powered platform.",
  search: "Search",
  signUp: "Sign Up",
  usertagline: "We have the best AI image generator",
  userwelcomemessage: (
    <>
      Join our Community,
      <br />
      We are waiting for you
    </>
  ),
};

export default HomeHerolanding1;
