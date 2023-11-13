import React from "react";

import { Button, Img, Input, Line, PagerIndicator, Text } from "components";
import Header from "components/Header";
import LoginScreenLogin from "components/LoginScreenLogin";

const LoginScreenPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[120px] items-start justify-start mx-auto py-5 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 border-b border-black-900 border-solid flex items-center justify-center px-4 md:px-5 py-5 w-full" />
        <LoginScreenLogin className="flex md:flex-col flex-row gap-[30px] items-center justify-start px-3 py-2.5 w-full" />
      </div>
    </>
  );
};

export default LoginScreenPage;
