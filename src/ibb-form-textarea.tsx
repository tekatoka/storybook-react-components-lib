import React, { useMemo } from "react";
import { TwTextArea } from "./helpers/twCommonElements";
import { FormElementOptions } from "./types/form-elements";

export interface IIbbFormTextAreaProps {
  field_label?: string;
  field_name?: string;
  field_placeholder?: string;
  field_value?: string;
  field_id: string;
  maxlength?: number;
  readonly?: boolean;
  options?: FormElementOptions;
  handleChangeInput: (elementId: string, event: React.ChangeEvent) => void;
}

export const IbbFormTextArea = (props: IIbbFormTextAreaProps) => {
  const handleChange = (field_id: string, event: React.ChangeEvent) => {
    if (props.handleChangeInput) props.handleChangeInput(field_id, event);
    else {
      console.debug("Change Input Event not handled.");
    }
  };
  return (
    <TwTextArea
      placeholder={props.field_placeholder}
      //defaultValue={props.field_value}
      value={props.field_value}
      name={props.field_name}
      id={props.field_id}
      rows={props.options && props.options.rows ? props.options.rows : 12}
      onChange={(event) => handleChange(props.field_id, event)}
    ></TwTextArea>
  );
};
