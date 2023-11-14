import React from "react";

import { Button, Img, Input, Line, PagerIndicator, Text } from "components";

type SignUpScreenLoginProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "signup"
  | "login"
  | "heading"
  | "text"
  | "name"
  | "email"
  | "password"
  | "signUp"
  | "signUpWithGoogle"
  | "textOne"
  | "description"
  | "textTwo"
  | "textThree"
> &
  Partial<{
    signup: string;
    login: string;
    heading: string;
    text: string;
    name: string;
    email: string;
    password: string;
    signUp: string;
    signUpWithGoogle: string;
    textOne: string;
    description: JSX.Element | string;
    textTwo: string;
    textThree: string;
  }>;

const SignUpScreenLogin: React.FC<SignUpScreenLoginProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col md:gap-10 gap-32 items-center justify-start md:px-10 px-16 sm:px-5 w-full">
          <div className="flex flex-col gap-8 h-[754px] md:h-auto items-center justify-start pb-24 pt-2 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col h-12 md:h-auto items-center justify-center sm:px-5 px-6 py-3 w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.signup}
                  </Text>
                  <Line className="bg-black-900 h-px w-full" />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center sm:px-5 px-6 py-3 w-full">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.login}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
                size="txtRobotoCondensedBold48"
              >
                {props?.heading}
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.text}
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-center justify-center w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.name}
                </Text>
                <Input
                  name="textinput"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex h-12 outline outline-[1px] outline-black-900 w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.email}
                </Text>
                <Input
                  name="textinput_One"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex h-12 outline outline-[1px] outline-black-900 w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.password}
                </Text>
                <Input
                  name="textinput_Two"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex h-12 outline outline-[1px] outline-black-900 w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Button
                  className="!text-white-A700 cursor-pointer font-roboto outline outline-[1px] outline-white-A700 text-base text-center w-full"
                  shape="round"
                  color="light_blue_500"
                  size="md"
                  variant="fill"
                >
                  {props?.signUp}
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[565px] sm:min-w-full"
                  leftIcon={
                    <Img
                      className="h-6 mr-3"
                      src="images/img_icon_google.svg"
                      alt="Icon / Google"
                    />
                  }
                  shape="round"
                  color="light_blue_500_7f"
                  size="md"
                  variant="fill"
                >
                  <div className="font-roboto text-base text-left">
                    {props?.signUpWithGoogle}
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[72px] md:h-auto items-center justify-start w-full">
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              {props?.textOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center md:px-10 px-16 sm:px-5 py-12 w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <Img
              className="h-[18px] w-[116px]"
              src="images/img_stars.svg"
              alt="stars"
            />
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <Text
                className="leading-[140.00%] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                size="txtRobotoBold24"
              >
                {props?.description}
              </Text>
              <div className="flex flex-row gap-5 items-center justify-start w-full">
                <Img
                  className="h-14 md:h-auto rounded-[50%] w-14"
                  src="images/img_avatarimage_1.png"
                  alt="avatarimage"
                />
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoSemiBold16"
                  >
                    {props?.textTwo}
                  </Text>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.textThree}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-12 items-center justify-center w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_icon.svg"
                  alt="icon"
                />
                <PagerIndicator
                  className="flex gap-[9px] h-7 items-start justify-start p-2.5 w-[62px]"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-2 bg-black-900 w-2"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-400 w-2"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Img
                  className="h-12 w-12"
                  src="images/img_icon_black_900.svg"
                  alt="icon_One"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignUpScreenLogin.defaultProps = {
  signup: "Sign Up",
  login: "Login",
  heading: "Sign Up",
  text: "Welcome Back!",
  name: "Name*",
  email: "Email*",
  password: "Password*",
  signUp: "Sign Up",
  signUpWithGoogle: "Sign Up with Google",
  textOne: "© 2022 Relume",
  description: (
    <>
      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor interdum nulla.&quot;
    </>
  ),
  textTwo: "Name Surname",
  textThree: "Position, Company name",
};

export default SignUpScreenLogin;
