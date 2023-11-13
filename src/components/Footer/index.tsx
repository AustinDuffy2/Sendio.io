import React from "react";

import { Img, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
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
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoSemiBold16"
                    >
                      Home
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoSemiBold16"
                    >
                      About Us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoSemiBold16"
                    >
                      Property Search
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoSemiBold16"
                    >
                      Property Detail
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoSemiBold16"
                    >
                      AI Platform
                    </Text>
                  </li>
                </ul>
                <ul className="flex flex-1 flex-col gap-[11.52px] items-start justify-start w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoSemiBold16"
                    >
                      Search
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoSemiBold16"
                    >
                      Contact Us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoSemiBold16"
                    >
                      Sign In
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoSemiBold16"
                    >
                      Sign Up
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="flex sm:flex-col flex-row gap-[15.37px] items-start justify-start w-full common-column-list">
            <li>
              <Text
                className="flex-1 text-black-900 text-sm"
                size="txtRobotoRegular14"
              >
                © 2023 Relume. All rights reserved.
              </Text>
            </li>
            <li>
              <Text
                className="flex-1 text-black-900 text-sm underline"
                size="txtRobotoRegular14"
              >
                Privacy Policy
              </Text>
            </li>
            <li>
              <Text
                className="flex-1 text-black-900 text-sm underline"
                size="txtRobotoRegular14"
              >
                Terms of Service
              </Text>
            </li>
            <li>
              <Text
                className="flex-1 text-black-900 text-sm underline"
                size="txtRobotoRegular14"
              >
                Cookies Settings
              </Text>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
