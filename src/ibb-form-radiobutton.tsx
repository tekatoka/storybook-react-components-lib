import React from "react";
import tw from "tailwind-styled-components";
import {
  TwInputFieldLabel,
  TwRadioButton,
  TwRadioButtonInlineLabel,
} from "./helpers/twCommonElements";
import { FormElementOptions } from "./types/form-elements";

export interface IbbFormRadiobuttonProps {
  field_label?: string;
  field_name?: string;
  field_value?: boolean;
  field_id: string;
  selections: any;
  readonly?: boolean;
  options?: FormElementOptions;
  handleChangeInput: (elementId: string, event: React.ChangeEvent) => void;
}

export const IbbFormRadiobutton = ({
  field_label,
  field_id,
  field_value,
  field_name,
  selections,
  handleChangeInput,
  readonly,
  options
}: IbbFormRadiobuttonProps) => {
  const handleChange = (
    field_id: any,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (handleChangeInput) handleChangeInput(field_id, event);
    else {
      console.debug("Change Input Event not handled..");
    }
  };
  return (
    <>
      {selections.map((item, index) => (
        <TwRadioButtonInlineLabel key={index}>
          <TwRadioButton
            type={"radio"}
            name={field_name}
            checked={field_value == item.id}
            readOnly={readonly}
            onChange={(event) => handleChange(field_id, event)}
          />
          <TwInputFieldLabel>{item.name}</TwInputFieldLabel>
        </TwRadioButtonInlineLabel>
      ))}
    </>
  );
};
