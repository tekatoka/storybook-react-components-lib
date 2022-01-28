import React from "react";

import { IbbFormRadiobutton } from "../ibb-form-radiobutton";

export default {
  title: "Components/Radiobuttons",
  component: IbbFormRadiobutton,
};

export const FormRadioButton = (args) => <IbbFormRadiobutton {...args} />;
FormRadioButton.args = {
  field_label: "Account Type",
  field_id: "acctype",
  field_value: 0,
  selections: [
    { id: 0, name: "Personal" },
    { id: 1, name: "Business" },
  ],
};
