import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
} from "components";
import AboutUsContact15 from "components/AboutUsContact15";
import ContactContact27 from "components/ContactContact27";
import ContactContact4 from "components/ContactContact4";
import ContactTeam1 from "components/ContactTeam1";
import Footer from "components/Footer";
import Header from "components/Header";

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[120px] items-start justify-end mx-auto py-10 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 border-b border-black-900 border-solid flex items-center justify-center px-4 md:px-5 py-5 w-full" />
        <ContactContact27 className="flex flex-col gap-5 items-start justify-start px-4 py-5 w-full" />
        <ContactTeam1 className="flex flex-col gap-5 items-center justify-start px-4 py-5 w-full" />
        <AboutUsContact15 className="flex md:flex-col flex-row gap-5 items-start justify-center px-4 py-5 w-full" />
        <ContactContact4 className="flex flex-col gap-5 items-start justify-start px-4 py-5 w-full" />
        <Footer className="flex gap-5 items-center justify-center px-4 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
