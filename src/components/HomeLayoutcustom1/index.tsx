import React from "react";

import { Button, Img, List, Text } from "components";

type HomeLayoutcustom1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "featuredpropertOne"
  | "exploreAll"
  | "residentProperty"
  | "commercialProperty"
  | "industrialProperty"
  | "agricultureProperty"
  | "p286162ndaveoaklone"
  | "p3bedroom"
  | "bathcounter"
  | "sqftcounter"
  | "p1bath"
  | "button"
  | "price"
  | "p286162ndaveoaklone1"
  | "p3bedroom1"
  | "bathcounter1"
  | "sqftcounter1"
  | "p1bath1"
  | "button1"
  | "price1"
  | "p286162ndaveoaklone2"
  | "p3bedroom2"
  | "bathcounter2"
  | "sqftcounter2"
  | "p1bath2"
  | "button2"
  | "price2"
> &
  Partial<{
    featuredpropertOne: string;
    exploreAll: string;
    residentProperty: string;
    commercialProperty: string;
    industrialProperty: string;
    agricultureProperty: string;
    p286162ndaveoaklone: string;
    p3bedroom: string;
    bathcounter: string;
    sqftcounter: string;
    p1bath: string;
    button: string;
    price: string;
    p286162ndaveoaklone1: string;
    p3bedroom1: string;
    bathcounter1: string;
    sqftcounter1: string;
    p1bath1: string;
    button1: string;
    price1: string;
    p286162ndaveoaklone2: string;
    p3bedroom2: string;
    bathcounter2: string;
    sqftcounter2: string;
    p1bath2: string;
    button2: string;
    price2: string;
  }>;

const HomeLayoutcustom1: React.FC<HomeLayoutcustom1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start py-[30px] w-full">
          <Text
            className="flex-1 sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-auto"
            size="txtRobotoCondensedBold40"
          >
            {props?.featuredpropertOne}
          </Text>
          <Button
            className="bg-transparent cursor-pointer flex flex-1 items-center justify-center w-full"
            rightIcon={
              <Img
                className="h-6 mb-px ml-[35px]"
                src="images/img_arrowright.svg"
                alt="arrow_right"
              />
            }
            size="xs"
          >
            <div className="font-bold font-roboto text-gray-400 text-left text-xl">
              {props?.exploreAll}
            </div>
          </Button>
        </div>
        <div className="flex flex-col gap-5 items-center justify-start py-5 w-full">
          <div className="flex sm:flex-col flex-row gap-5 items-start justify-center py-[30px] w-full">
            <Button className="bg-transparent cursor-pointer font-medium font-roboto min-w-[145px] text-black-900 text-center text-lg">
              {props?.residentProperty}
            </Button>
            <Button className="bg-transparent cursor-pointer font-medium font-roboto min-w-[172px] text-black-900 text-center text-lg">
              {props?.commercialProperty}
            </Button>
            <Button className="bg-transparent cursor-pointer font-medium font-roboto min-w-[150px] text-black-900 text-center text-lg">
              {props?.industrialProperty}
            </Button>
            <Button className="bg-transparent cursor-pointer font-medium font-roboto min-w-[164px] text-black-900 text-center text-lg">
              {props?.agricultureProperty}
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center p-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-start justify-start rounded-[10px] shadow-bs2 w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 text-black-900 text-xl w-auto"
                      size="txtRobotoRegular20"
                    >
                      {props?.p286162ndaveoaklone}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-10 items-center justify-between w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_crop.svg"
                          alt="crop"
                        />
                        <Text
                          className="flex-1 text-base text-gray-400 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p3bedroom}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_offer.svg"
                          alt="offer"
                        />
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.bathcounter}
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-10 items-center justify-between px-[5px] w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_minimize.svg"
                          alt="minimize"
                        />
                        <Text
                          className="flex-1 text-base text-gray-400 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.sqftcounter}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_minimize_20x20.svg"
                          alt="minimizeone"
                        />
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-center w-full">
                    <Button
                      className="!text-white-A700 cursor-pointer font-roboto min-w-[96px] text-base text-center"
                      shape="round"
                      color="light_blue_500"
                      size="md"
                      variant="fill"
                    >
                      {props?.button}
                    </Button>
                    <Text
                      className="flex-1 md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                      size="txtRobotoBold32"
                    >
                      {props?.price}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start rounded-[10px] shadow-bs2 w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 text-black-900 text-xl w-auto"
                      size="txtRobotoRegular20"
                    >
                      {props?.p286162ndaveoaklone1}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-10 items-center justify-between w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_crop.svg"
                          alt="crop"
                        />
                        <Text
                          className="flex-1 text-base text-gray-400 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p3bedroom1}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_offer.svg"
                          alt="offer"
                        />
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.bathcounter1}
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-10 items-center justify-between px-[5px] w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_minimize.svg"
                          alt="minimize"
                        />
                        <Text
                          className="flex-1 text-base text-gray-400 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.sqftcounter1}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_minimize_1.svg"
                          alt="minimizeone"
                        />
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath1}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-center w-full">
                    <Button
                      className="!text-white-A700 cursor-pointer font-roboto min-w-[96px] text-base text-center"
                      shape="round"
                      color="light_blue_500"
                      size="md"
                      variant="fill"
                    >
                      {props?.button1}
                    </Button>
                    <Text
                      className="flex-1 md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                      size="txtRobotoBold32"
                    >
                      {props?.price1}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start rounded-[10px] shadow-bs2 w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 text-black-900 text-xl w-auto"
                      size="txtRobotoRegular20"
                    >
                      {props?.p286162ndaveoaklone2}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-10 items-center justify-between w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_crop.svg"
                          alt="crop"
                        />
                        <Text
                          className="flex-1 text-base text-gray-400 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p3bedroom2}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_offer.svg"
                          alt="offer"
                        />
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.bathcounter2}
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-10 items-center justify-between px-[5px] w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_minimize.svg"
                          alt="minimize"
                        />
                        <Text
                          className="flex-1 text-base text-gray-400 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.sqftcounter2}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_minimize_2.svg"
                          alt="minimizeone"
                        />
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath2}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-center w-full">
                    <Button
                      className="!text-white-A700 cursor-pointer font-roboto min-w-[96px] text-base text-center"
                      shape="round"
                      color="light_blue_500"
                      size="md"
                      variant="fill"
                    >
                      {props?.button2}
                    </Button>
                    <Text
                      className="flex-1 md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                      size="txtRobotoBold32"
                    >
                      {props?.price2}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

HomeLayoutcustom1.defaultProps = {
  featuredpropertOne: "Featured Properties",
  exploreAll: "Explore All",
  residentProperty: "Resident Property",
  commercialProperty: "Commercial Property",
  industrialProperty: "Industrial Property",
  agricultureProperty: "Agriculture Property",
  p286162ndaveoaklone: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom: "3 Bed Room3",
  bathcounter: "1 Bath",
  sqftcounter: "1,032 sqft",
  p1bath: "Family",
  button: "Button",
  price: "$649,900",
  p286162ndaveoaklone1: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom1: "3 Bed Room3",
  bathcounter1: "1 Bath",
  sqftcounter1: "1,032 sqft",
  p1bath1: "Family",
  button1: "Button",
  price1: "$649,900",
  p286162ndaveoaklone2: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom2: "3 Bed Room3",
  bathcounter2: "1 Bath",
  sqftcounter2: "1,032 sqft",
  p1bath2: "Family",
  button2: "Button",
  price2: "$649,900",
};

export default HomeLayoutcustom1;
