import React from "react";
import { FormElementOptions } from ".";
import {
  TwInputCheckbox,
  TwInputCheckboxInlineLabel,
  TwInputFieldLabel,
} from "./helpers/twCommonElements";

export const IbbFormCheckbox = ({
  field_id,
  field_label,
  field_name,
  field_value,
  readonly,
  options,
  handleChangeInput,
}: {
  field_id: string;
  field_label: string;
    field_value: boolean;
    field_name: string;
    readonly?: boolean;
    options?: FormElementOptions;
  handleChangeInput?: (
    elementId: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}) => {
  const handleChange = (
    field_id: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (handleChangeInput) handleChangeInput(field_id, event);
    else {
      console.debug("Change Input Event not handled..");
    }
  };
  return (
    <>
      <TwInputFieldLabel htmlFor={field_id}>
        <TwInputCheckbox
          type={"checkbox"}
          id={field_id}
          name={field_name}
          checked={field_value}
          //defaultChecked={field_value}
          disabled={readonly}
          onChange={(event) => handleChange(field_id, event)}
        ></TwInputCheckbox>
        <TwInputCheckboxInlineLabel>{field_label}</TwInputCheckboxInlineLabel>
      </TwInputFieldLabel>
    </>
  );
};
