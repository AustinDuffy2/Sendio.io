import React from "react";

import { Button, Img, List, Text } from "components";
import AIPlatformCta7 from "components/AIPlatformCta7";
import Footer from "components/Footer";
import Header from "components/Header";
import PropertyDetailsColumnheadingtwo from "components/PropertyDetailsColumnheadingtwo";
import PropertyDetailsContent2 from "components/PropertyDetailsContent2";
import PropertyDetailsFaq1 from "components/PropertyDetailsFaq1";
import PropertyDetailsLayout22 from "components/PropertyDetailsLayout22";
import PropertyDetailsPortfolio8 from "components/PropertyDetailsPortfolio8";

const PropertyDetailsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[120px] items-start justify-end mx-auto py-10 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 border-b border-black-900 border-solid flex items-center justify-center px-4 md:px-5 py-5 w-full" />
        <PropertyDetailsLayout22 className="flex md:flex-col flex-row gap-2.5 items-start justify-start px-4 py-5 w-full" />
        <div className="flex flex-col gap-[20.82px] items-center justify-start px-4 py-5 w-full">
          <Text
            className="text-black-900 text-lg text-shadow-ts2 w-full"
            size="txtRobotoBold18"
          >
            Trusted by industry-leading companies worldwide
          </Text>
          <Img
            className="h-14 max-w-[1408px] mx-auto w-full"
            src="images/img_content.svg"
            alt="content"
          />
        </div>
        <PropertyDetailsColumnheadingtwo className="flex flex-col gap-20 items-start justify-start px-4 py-5 w-full" />
        <PropertyDetailsContent2 className="flex md:flex-col flex-row font-robotocondensed gap-[30px] items-start justify-center px-4 py-5 w-full" />
        <AIPlatformCta7 className="flex flex-col font-roboto gap-20 items-start justify-start px-4 py-5 w-full" />
        <PropertyDetailsPortfolio8 className="flex flex-col font-roboto md:gap-10 gap-20 items-start justify-start px-4 py-5 w-full" />
        <PropertyDetailsFaq1 className="flex flex-col font-roboto gap-20 items-center justify-start px-4 py-5 w-full" />
        <Footer className="flex font-roboto gap-5 items-center justify-center px-4 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default PropertyDetailsPage;
