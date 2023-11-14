import React from "react";

import { Button, Img, List, Text } from "components";
import AboutUsContact15 from "components/AboutUsContact15";
import AboutUsLayout4 from "components/AboutUsLayout4";
import AboutUsTeam8 from "components/AboutUsTeam8";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeColumniconrelume from "components/HomeColumniconrelume";
import HomeContent from "components/HomeContent";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[180px] items-start justify-end mx-auto py-10 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 border-b border-black-900 border-solid flex items-center justify-center px-4 md:px-5 py-5 w-full" />
        <AboutUsLayout4 className="flex md:flex-col flex-row gap-[30px] items-start justify-center px-4 py-5 w-full" />
        <div className="flex flex-col gap-[20.82px] items-center justify-start px-[16.66px] py-[20.82px] w-full">
          <Text
            className="text-black-900 text-lg text-shadow-ts2 w-full"
            size="txtRobotoBold18"
          >
            Trusted by industry-leading companies worldwide
          </Text>
          <Img
            className="h-14 max-w-[1406px] mx-auto w-full"
            src="images/img_content.svg"
            alt="content"
          />
        </div>
        <HomeColumniconrelume className="flex flex-col gap-[20.82px] items-start justify-center px-[16.66px] py-[20.82px] w-full" />
        <AboutUsContact15 className="flex md:flex-col flex-row gap-5 items-start justify-center px-4 py-5 w-full" />
        <AboutUsTeam8 className="flex flex-col md:gap-10 gap-20 items-center justify-start px-4 py-5 w-full" />
        <div className="flex flex-col gap-6 items-center justify-start px-4 py-5 w-full">
          <Button
            className="cursor-pointer h-12 text-base text-center w-[155px]"
            shape="round"
            color="light_blue_500_7f"
            size="md"
            variant="fill"
          >
            Button
          </Button>
          <HomeContent className="flex flex-col gap-5 items-center justify-start max-w-[1408px] mx-auto md:px-5 py-5 w-full" />
        </div>
        <Footer className="flex gap-5 items-center justify-center px-4 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default AboutUsPage;
