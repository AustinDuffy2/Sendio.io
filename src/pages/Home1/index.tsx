import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeColumnframe from "components/HomeColumnframe";
import HomeColumniconrelume from "components/HomeColumniconrelume";
import HomeContent from "components/HomeContent";
import HomeHerolanding1 from "components/HomeHerolanding1";
import HomeLayout219 from "components/HomeLayout219";
import HomeLayoutcustom1 from "components/HomeLayoutcustom1";
import HomeTestimonial4 from "components/HomeTestimonial4";

const Home1Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[120px] items-start justify-end mx-auto py-10 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 border-b border-black-900 border-solid flex flex-row items-center justify-center px-4 md:px-5 py-5 w-full" />
        <HomeHerolanding1 className="flex md:flex-col flex-row font-robotocondensed gap-5 items-center justify-center px-4 py-5 w-full" />
        <HomeColumnframe className="flex flex-col gap-5 items-start justify-start px-4 py-5 w-full" />
        <div className="flex flex-col font-roboto gap-5 items-center justify-start pt-5 px-4 w-full">
          <Text
            className="text-black-900 text-lg text-shadow-ts1 w-full"
            size="txtRobotoBold18"
          >
            Trusted by industry-leading companies worldwide
          </Text>
          <Img
            className="h-[53px] max-w-[1408px] mx-auto w-full"
            src="images/img_content.svg"
            alt="content"
          />
        </div>
        <HomeLayoutcustom1 className="flex flex-col font-roboto gap-5 items-start justify-start px-4 py-5 w-full" />
        <HomeLayout219 className="flex md:flex-col flex-row font-roboto gap-5 items-start justify-center px-4 py-5 w-full" />
        <HomeTestimonial4 className="flex flex-col font-roboto gap-5 items-center justify-start pt-5 px-4 w-full" />
        <HomeColumniconrelume className="flex flex-col font-roboto gap-5 items-start justify-center px-4 py-5 w-full" />
        <HomeContent className="flex flex-col font-roboto gap-5 items-center justify-start px-4 py-5 w-full" />
        <Footer className="flex font-roboto gap-5 items-center justify-center px-4 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
