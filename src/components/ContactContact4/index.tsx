import React from "react";

import { Button, Img, Input, Line, Radio, RadioGroup, Text } from "components";

type ContactContact4Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheadingthree"
  | "headingfour"
  | "languageThree"
  | "firstname"
  | "lastname"
  | "email"
  | "phonenumber"
  | "chooseatopic"
  | "whichbestdescriOne"
  | "message"
  | "typeyourmessageOne"
  | "submitbutton"
> &
  Partial<{
    subheadingthree: string;
    headingfour: string;
    languageThree: string;
    firstname: string;
    lastname: string;
    email: string;
    phonenumber: string;
    chooseatopic: string;
    whichbestdescriOne: string;
    message: string;
    typeyourmessageOne: string;
    submitbutton: string;
  }>;

const ContactContact4: React.FC<ContactContact4Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheadingthree}
          </Text>
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingfour}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.languageThree}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoRegular16"
              >
                {props?.firstname}
              </Text>
              <Input
                name="textinput"
                placeholder="Placeholder"
                className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
                wrapClassName="outline outline-[1px] outline-black-900 w-full"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoRegular16"
              >
                {props?.lastname}
              </Text>
              <Input
                name="textinputone"
                placeholder="Placeholder"
                className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
                wrapClassName="outline outline-[1px] outline-black-900 w-full"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoRegular16"
              >
                {props?.email}
              </Text>
              <Input
                name="textinputtwo"
                placeholder="Placeholder"
                className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
                wrapClassName="outline outline-[1px] outline-black-900 w-full"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoRegular16"
              >
                {props?.phonenumber}
              </Text>
              <Input
                name="textinputthree"
                placeholder="Placeholder"
                className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
                wrapClassName="outline outline-[1px] outline-black-900 w-full"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-base text-black-900 w-full"
              size="txtRobotoRegular16"
            >
              {props?.chooseatopic}
            </Text>
            <Input
              name="select"
              placeholder="Select one..."
              className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
              wrapClassName="flex outline outline-[1px] outline-black-900 w-full"
              suffix={
                <Img
                  className="h-6 ml-[35px] my-auto"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start py-4 w-full">
            <Text
              className="text-base text-black-900 w-auto"
              size="txtRobotoRegular16"
            >
              {props?.whichbestdescriOne}
            </Text>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
              <RadioGroup
                className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full"
                name="column"
              >
                <Radio
                  value="Radio"
                  className="font-roboto sm:pr-5 text-base text-black-900 text-left"
                  inputClassName="bg-white-A700 h-[18px] mr-[5px] outline outline-[1px] outline-black-900 rounded-[9px] w-[18px]"
                  checked={false}
                  name="column"
                  label="Radio"
                  id="Radio"
                ></Radio>
                <Radio
                  value="Radio1"
                  className="font-roboto sm:pr-5 text-base text-black-900 text-left"
                  inputClassName="bg-white-A700 h-[18px] mr-[5px] outline outline-[1px] outline-black-900 rounded-[9px] w-[18px]"
                  checked={false}
                  name="column"
                  label="Radio1"
                  id="Radio1"
                ></Radio>
                <Radio
                  value="Radio2"
                  className="font-roboto sm:pr-5 text-base text-black-900 text-left"
                  inputClassName="bg-white-A700 h-[18px] mr-[5px] outline outline-[1px] outline-black-900 rounded-[9px] w-[18px]"
                  checked={false}
                  name="column"
                  label="Radio2"
                  id="Radio2"
                ></Radio>
              </RadioGroup>
              <RadioGroup
                className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full"
                name="column1"
              >
                <Radio
                  value="Radio"
                  className="font-roboto sm:pr-5 text-base text-black-900 text-left"
                  inputClassName="bg-white-A700 h-[18px] mr-[5px] outline outline-[1px] outline-black-900 rounded-[9px] w-[18px]"
                  checked={false}
                  name="column1"
                  label="Radio"
                  id="Radio4"
                ></Radio>
                <Radio
                  value="Radio1"
                  className="font-roboto sm:pr-5 text-base text-black-900 text-left"
                  inputClassName="bg-white-A700 h-[18px] mr-[5px] outline outline-[1px] outline-black-900 rounded-[9px] w-[18px]"
                  checked={false}
                  name="column1"
                  label="Radio1"
                  id="Radio12"
                ></Radio>
                <Radio
                  value="Radio2"
                  className="font-roboto text-base text-black-900 text-left"
                  inputClassName="bg-white-A700 h-[18px] mr-[5px] outline outline-[1px] outline-black-900 rounded-[9px] w-[18px]"
                  checked={false}
                  name="column1"
                  label="Radio2"
                  id="Radio22"
                ></Radio>
              </RadioGroup>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-base text-black-900 w-full"
              size="txtRobotoRegular16"
            >
              {props?.message}
            </Text>
            <div className="bg-white-A700 flex flex-col h-[180px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900 p-3 rounded-[20px] w-full">
              <div className="flex flex-col md:gap-10 gap-[137px] justify-start w-full">
                <Text
                  className="mr-[1243px] text-base text-gray-800 w-auto"
                  size="txtRobotoRegular16Gray800"
                >
                  {props?.typeyourmessageOne}
                </Text>
                <div className="md:ml-[0] ml-[1388px] relative w-1.5">
                  <Line className="absolute bg-black-900 bottom-[0] h-px right-[0] rotate-[-135deg] w-0.5" />
                  <Line className="absolute bg-black-900 h-px inset-[0] justify-center m-auto rotate-[-135deg] w-1.5" />
                </div>
              </div>
            </div>
          </div>
          <Radio
            value="Radio"
            className="font-roboto sm:pr-5 text-base text-black-900 text-left"
            inputClassName="bg-white-A700 h-[18px] mr-[5px] outline outline-[1px] outline-black-900 rounded-[9px] w-[18px]"
            checked={false}
            name="labelsix"
            label="Radio"
            id="Radio7"
          ></Radio>
          <Button
            className="!text-white-A700 cursor-pointer font-roboto text-base text-center w-[99px]"
            shape="round"
            color="light_blue_500"
            size="md"
            variant="fill"
          >
            {props?.submitbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

ContactContact4.defaultProps = {
  subheadingthree: "Tagline",
  headingfour: "Contact us",
  languageThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  firstname: "First name",
  lastname: "Last name",
  email: "Email",
  phonenumber: "Phone number",
  chooseatopic: "Choose a topic",
  whichbestdescriOne: "Which best describes you?",
  message: "Message",
  typeyourmessageOne: "Type your message...",
  submitbutton: "Button",
};

export default ContactContact4;
