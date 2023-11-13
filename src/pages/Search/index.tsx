import React from "react";

import { Button, Img, Line, List, Text } from "components";
import AIPlatformLayout121 from "components/AIPlatformLayout121";
import AIPlatformLayout27 from "components/AIPlatformLayout27";
import Footer from "components/Footer";
import Header from "components/Header";
import SearchCta45 from "components/SearchCta45";

const SearchPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[120px] items-start justify-end mx-auto py-10 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 border-b border-black-900 border-solid flex items-center justify-center px-4 md:px-5 py-5 w-full" />
        <AIPlatformLayout121 className="flex flex-col gap-[120px] items-start justify-start px-4 py-5 w-full" />
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
        <AIPlatformLayout27 className="flex flex-col gap-[120px] items-start justify-start px-4 py-5 w-full" />
        <SearchCta45 className="flex flex-col gap-[120px] items-center justify-start px-4 py-5 w-full" />
        <Footer className="flex gap-5 items-center justify-center px-4 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default SearchPage;
