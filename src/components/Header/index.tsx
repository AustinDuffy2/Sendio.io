import React from "react";

import { Button, Img } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row gap-8 items-center justify-center w-full">
          <Img
            className="flex-1 h-[25px] max-h-[25px] sm:w-[] md:w-[]"
            src="images/img_column.svg"
            alt="column"
          />
          <div className="flex flex-row gap-6 items-center justify-center w-auto">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[88px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              Button
            </Button>
            <div className="flex flex-col items-start justify-start p-3 w-12">
              <Img
                className="h-6 w-6"
                src="images/img_iconmenu.svg"
                alt="iconmenu"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
