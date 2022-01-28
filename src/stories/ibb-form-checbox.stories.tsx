import React from "react";
import { IbbFormCheckbox } from "..";

export default {
  title: "Components/Checkboxes",
  component: IbbFormCheckbox,
  argTypes: {
    field_label: { control: { type: "text" } },
  },
};

export const FormCheckbox = (args) => <IbbFormCheckbox {...args} />;
FormCheckbox.args = {
  field_label: "Label",
  field_value: false,
};
