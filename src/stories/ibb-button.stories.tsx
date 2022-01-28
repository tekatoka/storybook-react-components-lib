import React from "react";
import { ButtonType, IbbButton } from "../ibb-button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Buttons",
  component: IbbButton,
  argTypes: {
    buttontype: {
      options: [
        ButtonType.Primary,
        ButtonType.Secondary,
        ButtonType.Success,
        ButtonType.Warning,
        ButtonType.Danger,
        ButtonType.Info,
      ],
      control: {
        type: "select",
        labels: {
          0: "Primary",
          1: "Secondary",
          2: "Success",
          3: "Warning",
          4: "Danger",
          5: "Info",
        },
      },
      defaultValue: ButtonType.Primary,
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
  },
  decorators: [],
};

const Template = ({ buttontype, ...args }) => (
  <IbbButton
    buttontype={buttontype}
    {...args}
    onClick={action("button clicked")}
  >
    {args.children}
  </IbbButton>
);

export const withVariant = Template.bind({});
withVariant.args = {
  buttontype: ButtonType.Primary,
  children: "Button",
  disabled: false,
};
export const primary = Template.bind({});
primary.args = {
  buttontype: ButtonType.Primary,
  children: "Primary",
  disabled: false,
};

export const secondary = Template.bind({});
secondary.args = {
  buttontype: ButtonType.Secondary,
  children: "Secondary",
  disabled: false,
};
export const success = Template.bind({});
success.args = {
  buttontype: ButtonType.Success,
  children: "Success",
  disabled: false,
};
export const warning = Template.bind({});
warning.args = {
  buttontype: ButtonType.Warning,
  children: "Warning",
  disabled: false,
};
export const danger = Template.bind({});
danger.args = {
  buttontype: ButtonType.Danger,
  children: "Danger",
  disabled: false,
};
export const info = Template.bind({});
info.args = {
  buttontype: ButtonType.Info,
  children: "Info",
  disabled: false,
};
