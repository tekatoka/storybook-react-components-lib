import React from "react";
import { IbbFormTextArea, IIbbFormTextAreaProps } from "../ibb-form-textarea";

export default {
  title: "Components/Inputs",
  component: IbbFormTextArea,
  argTypes: {
    field_label: { control: { type: "text" } },
  },
  decorators: [],
};

export const FormTextArea = (args: IIbbFormTextAreaProps) => (
  <IbbFormTextArea {...args} />
);

FormTextArea.args = {
  field_label: "Textarea Label",
  field_placeholder: "Placeholder",
  field_value: "Blah blah blah"
};
