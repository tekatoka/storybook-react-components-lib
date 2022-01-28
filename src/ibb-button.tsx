import React from "react";
import tw from "tailwind-styled-components";
import { classNames } from "./helpers/functions";

export enum ButtonType {
  Primary,
  Secondary,
  Success,
  Warning,
  Danger,
  Info,
  Submit,
}

export type IbbButtonProps = {
  buttontype?: ButtonType;
  children: any;
  disabled?: boolean;
  customclasses?: string;
  form?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const IbbButton = (props: IbbButtonProps) => {
  const type = props.buttontype == ButtonType.Submit ? "submit" : "button";
  const form = props.form ? props.form : null;

  if (props.disabled)
    return <DisabledButton {...props}>{props.children}</DisabledButton>;
  else
    return (
      <TwButton type={type} {...props} form={form}>
        {props.children}
      </TwButton>
    );
};

const getButtonColors = (buttonProps: IbbButtonProps): string => {
  switch (buttonProps.buttontype) {
    case ButtonType.Primary:
    case ButtonType.Submit: {
      return (
        "bg-ibb border-bg-ibb-dark" +
        (buttonProps.disabled ? "" : " hover:bg-ibb-dark")
      );
    }
    case ButtonType.Secondary: {
      return (
        "bg-gray-50 border-bg-gray-300" +
        (buttonProps.disabled ? "" : " hover:bg-gray-300")
      );
    }
    case ButtonType.Success: {
      return (
        "bg-green-500 border-bg-green-700" +
        (buttonProps.disabled ? "" : " hover:bg-green-700")
      );
    }
    case ButtonType.Warning: {
      return (
        "bg-yellow-500 border-bg-yellow-700" +
        (buttonProps.disabled ? "" : " hover:bg-yellow-700")
      );
    }
    case ButtonType.Danger: {
      return (
        "bg-red-500 border-bg-red-700" +
        (buttonProps.disabled ? "" : " hover:bg-red-700")
      );
    }
    case ButtonType.Info: {
      return (
        "bg-indigo-500 border-bg-indigo-700" +
        (buttonProps.disabled ? "" : " hover:bg-indigo-700")
      );
    }
    default: {
      return (
        "bg-transparent text-blue-700 hover:text-white border-blue-500 hover:border-transparent" +
        (buttonProps.disabled ? "" : " hover:bg-blue-500")
      );
    }
  }
};

const TwButton = tw.button<IbbButtonProps>`${(p) => getButtonColors(p)} ${(p) =>
  classNames(p.customclasses)} ${(p) =>
  p.disabled || p.buttontype == ButtonType.Secondary
    ? "text-gray-800"
    : "text-white"} border px-4 py-2 max-w-32 appearance-none leading-4 hover:border-white`;
const DisabledButton = tw(
  TwButton,
)<IbbButtonProps>`opacity-50 cursor-not-allowed`;
