import React from "react";
import { IbbDropdown, IDropdownProps } from "../ibb-form-dropdown";

export default {
  title: "Components/Dropdown",
  component: IbbDropdown,
};

export const DefaultDropdown = (args: IDropdownProps) => (
  <>
    <IbbDropdown {...args} />
    <br />
    <IbbDropdown {...args} />
  </>
);

DefaultDropdown.args = {
  defaultValue: "Select an option",
  field_label: "Custom dropdown",
  items: [
    { id: -1, href: "#", value: "- Select an option -" },
    { id: 0, href: "#", value: "Personal" },
    { id: 1, href: "#", value: "Business" },
  ],
  handleChange: (e) => { console.log(e) }
};
