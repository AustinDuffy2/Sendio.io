import React from "react";

import { Button, Img, Input, Line, PagerIndicator, Text } from "components";
import Header from "components/Header";
import LoginScreenLogin from "components/LoginScreenLogin";

const LoginScreenPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[120px] items-start justify-start mx-auto py-5 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 border-b border-black-900 border-solid flex md:flex-row items-center justify-center px-4 md:px-5 py-5 w-full" />
        <LoginScreenLogin className="flex md:flex-col flex-row gap-[30px] items-center justify-start px-3 py-2.5 w-full" />
        <footer className="flex items-center justify-center px-4 md:px-5 py-5 w-full">
          <div className="flex flex-col gap-5 items-center justify-center w-full">
            <div className="border border-black-900 border-solid flex flex-row items-start justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex flex-1 flex-col gap-[30.73px] items-start justify-start w-full">
                  <Img
                    className="h-[25px] w-[60px]"
                    src="images/img_logo.svg"
                    alt="logo"
                  />
                  <div className="flex flex-col gap-[23.05px] items-start justify-start w-full">
                    <div className="flex flex-col gap-[3.84px] items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-sm w-full"
                        size="txtRobotoSemiBold14"
                      >
                        Address:
                      </Text>
                      <Text
                        className="text-black-900 text-sm w-full"
                        size="txtRobotoRegular14"
                      >
                        Level 1, 12 Sample St, Sydney NSW 2000
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[3.84px] items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-sm w-full"
                        size="txtRobotoSemiBold14"
                      >
                        Contact:
                      </Text>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-sm underline w-full"
                          size="txtRobotoRegular14"
                        >
                          1800 123 4567
                        </Text>
                        <Text
                          className="text-black-900 text-sm underline w-full"
                          size="txtRobotoRegular14"
                        >
                          info@relume.io
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[11.52px] items-start justify-start w-auto">
                      <Img
                        className="h-[23px] w-[23px]"
                        src="images/img_iconfacebook.svg"
                        alt="iconfacebook"
                      />
                      <Img
                        className="h-[23px] w-[23px]"
                        src="images/img_iconinstagram.svg"
                        alt="iconinstagram"
                      />
                      <Img
                        className="h-[23px] w-[23px]"
                        src="images/img_airplane.svg"
                        alt="airplane"
                      />
                      <Img
                        className="h-[23px] w-[23px]"
                        src="images/img_iconlinkedin.svg"
                        alt="iconlinkedin"
                      />
                      <Img
                        className="h-[23px] w-[23px]"
                        src="images/img_iconyoutube.svg"
                        alt="iconyoutube"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-[23.05px] items-start justify-start w-full">
                  <ul className="flex flex-1 flex-col gap-[11.52px] items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">Home</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">About Us</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">Property Search</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">Property Detail</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">AI Platform</Text>
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-1 flex-col gap-[11.52px] items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">Search</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">Contact Us</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">Sign In</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtRobotoSemiBold16">Sign Up</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="flex sm:flex-col flex-row gap-[15.37px] items-start justify-start w-full common-column-list">
              <li>
                <a href="javascript:" className="flex-1 text-black-900 text-sm">
                  <Text size="txtRobotoRegular14">
                    © 2023 Relume. All rights reserved.
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="flex-1 text-black-900 text-sm underline"
                >
                  <Text size="txtRobotoRegular14">Privacy Policy</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="flex-1 text-black-900 text-sm underline"
                >
                  <Text size="txtRobotoRegular14">Terms of Service</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="flex-1 text-black-900 text-sm underline"
                >
                  <Text size="txtRobotoRegular14">Cookies Settings</Text>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LoginScreenPage;
