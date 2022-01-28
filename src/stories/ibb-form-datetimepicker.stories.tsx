import React from "react";
import { IbbFormDatetimepicker, IIbbFormDatetimepickerProps } from "..";

export default {
  title: "Components/Datetimepicker",
  component: IbbFormDatetimepicker,
};

export const DefaultDatepicker = (args: IIbbFormDatetimepickerProps) => <IbbFormDatetimepicker {...args} />;

DefaultDatepicker.args = {
  field_value: "10.11.2021"
};
