import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "components";

export default {
  title: "austin_s_application13/Input",
  component: Input,
};

export const SampleInput: Story<any> = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder20",
  variant: "Black",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
