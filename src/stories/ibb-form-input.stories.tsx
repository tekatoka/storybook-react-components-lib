import React from "react";
import { IbbFormInput, IIbbFormInputProps, InputType } from "../ibb-form-input";

export default {
  title: "Components/Inputs",
  component: IbbFormInput,
  argTypes: {
    field_label: { control: { type: "text" } },
    input_type: {
      options: [InputType.text, InputType.currency],
      control: {
        type: "select",
        labels: {
          0: "Text",
          1: "Currency",
        },
      },
    },
  },
  decorators: [],
};

export const FormTextInput = (args: IIbbFormInputProps) => (
  <IbbFormInput {...args} />
);

FormTextInput.args = {
  field_label: "Custom Label",
  field_placeholder: "Placeholder",
  field_value: "My text value",
  input_type: InputType.text,
};
