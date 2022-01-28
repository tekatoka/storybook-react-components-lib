import React, { useState, useEffect } from "react";
import { IbbDropdownButtonIcon } from "./elements/ibb-dropdown-button-icon";
import { IbbDropdownMenuItem } from "./elements/ibb-dropdown-menu-item";
import {
  TwDropdown,
  TwDropdownSection,
  TwDropdownMenu,
  TwSelectField,
  TwLabel
} from "./helpers/twCommonElements";
import { FormElementOptions } from "./types/form-elements";

export interface IDropdownProps {
  field_label;
  field_id;
  field_value;
  field_name;
  handleChange?;
  defaultValue: string;
  items: any[];
  readonly?: boolean;
  options?: FormElementOptions;
  handleChangeInput?: (elementId: string, event: React.ChangeEvent) => void;
}

export const IbbDropdown = (props: IDropdownProps) => {
  const [selectedKey, setSelectedKey] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setSelectedKey(props.field_value);

    setSelectedValue(
      props.items && props.items.find((i) => i.id == props.field_value)
        ? props.items.find((i) => i.id == props.field_value).value
        : props.field_value,
    );
  }, [props]);

  const handleChange = (e) => {
    setSelectedKey(e.target.value);
    setSelectedValue(
      props.items && props.items.find((i) => i.id == e.target.value)
        ? props.items.find((i) => i.id == e.target.value).value
        : e.target.value,
    );
  };

  return (
    <>
      {!props.readonly ? (
        <TwSelectField
          name={props.field_name}
          id={props.field_id}
          value={
            selectedValue
          }
          onChange={
            props.handleChange ? props.handleChange : (e) => handleChange(e)
          }
          disabled={props.readonly}
        >
          {props.items.map((option: any, i) => (
            <option key={i} id={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </TwSelectField>
      ) : (
        <>
          <TwLabel>
            {selectedValue}
          </TwLabel>
        </>
      )}
    </>
  );
};
