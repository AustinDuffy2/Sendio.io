import React from "react";

import { Button, Text } from "components";

type SearchCta45Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "headingtext" | "contenttext" | "signupbuttontext" | "learnmorebuttontext"
> &
  Partial<{
    headingtext: string;
    contenttext: string;
    signupbuttontext: string;
    learnmorebuttontext: string;
  }>;

const SearchCta45: React.FC<SearchCta45Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start py-12 w-full">
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
              size="txtRobotoCondensedBold40Black900"
            >
              {props?.headingtext}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.contenttext}
            </Text>
          </div>
          <div className="flex flex-1 flex-row gap-4 items-start justify-center w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[103px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.signupbuttontext}
            </Button>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto h-11 min-w-[129px] text-base text-center"
              shape="round"
              color="light_blue_500_72"
              size="md"
              variant="fill"
            >
              {props?.learnmorebuttontext}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

SearchCta45.defaultProps = {
  headingtext: "Unlock Advanced Search Features Today",
  contenttext: "Discover the Perfect Property for You",
  signupbuttontext: "Sign Up",
  learnmorebuttontext: "Learn More",
};

export default SearchCta45;
