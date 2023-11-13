import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import AIPlatformCta7 from "components/AIPlatformCta7";
import AIPlatformHeader26 from "components/AIPlatformHeader26";
import AIPlatformLayout121 from "components/AIPlatformLayout121";
import AIPlatformLayout241 from "components/AIPlatformLayout241";
import AIPlatformLayout25 from "components/AIPlatformLayout25";
import AIPlatformLayout27 from "components/AIPlatformLayout27";
import AIPlatformTestimonial7 from "components/AIPlatformTestimonial7";
import Footer from "components/Footer";
import Header from "components/Header";

const AIPlatformPage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[120px] items-start justify-end mx-auto py-10 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 border-b border-black-900 border-solid flex items-center justify-center px-4 md:px-5 py-5 w-full" />
        <AIPlatformHeader26 className="flex md:flex-col flex-row font-robotocondensed gap-[30px] items-start justify-center pt-5 px-4 w-full" />
        <div className="flex flex-col font-roboto gap-[20.82px] items-center justify-start px-[16.66px] py-[20.82px] w-full">
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
        <AIPlatformLayout241 className="flex flex-col font-roboto md:gap-10 gap-20 items-start justify-start px-4 py-5 w-full" />
        <AIPlatformLayout121 className="flex flex-col font-roboto gap-[120px] items-start justify-start px-4 py-5 w-full" />
        <AIPlatformLayout25 className="flex md:flex-col flex-row font-roboto md:gap-10 gap-20 items-start justify-start px-4 py-5 w-full" />
        <AIPlatformTestimonial7 className="flex flex-col font-roboto gap-20 items-center justify-start px-4 py-5 w-full" />
        <AIPlatformLayout27 className="flex flex-col gap-[120px] items-start justify-start px-4 py-5 w-full" />
        <AIPlatformCta7 className="flex flex-col font-roboto gap-20 items-start justify-start px-4 py-5 w-full" />
        <Footer className="flex font-roboto gap-5 items-center justify-center px-4 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default AIPlatformPage;
