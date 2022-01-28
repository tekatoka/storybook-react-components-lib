import React, { useMemo, useRef } from "react";
import CurrencyInput from "react-currency-input-field";
import {
  decimalCount,
  formatNumberValue,
  unformatNumberValue,
} from "./helpers/functions";
import {
  TwInputField,
  TwInputFieldAddon,
  TwInputFieldWithAddon,
  TwInputFieldAddonContainer,
  TwInputFieldWithAddonContainer,
} from "./helpers/twCommonElements";
import { FormElementOptions } from "./types/form-elements";

export interface IIbbFormInputProps {
  field_label?: string;
  field_name?: string;
  field_placeholder?: string;
  field_value?: string;
  field_id: string;
  input_type?: InputType;
  readonly?: boolean;
  maxlength?: number;
  options?: FormElementOptions;
  handleChangeInput: (
    elementId: string,
    event: React.ChangeEvent,
    decimalSeparator?: string,
    groupSeparator?: string,
    decimalsLimit?: number,
  ) => void;
}

export enum InputType {
  text,
  currency,
  number,
}

let focusKey;

const getCurrencyInputStyle = () => {
  return (
    "form-control flex-shrink flex-grow flex-auto leading-normal py-2 px-4 w-px flex-1 text-gray-700 " +
    "leading-tight border border-grey-light hover:border-gray-400 focus:outline-none focus:bg-white " +
    "focus:text-gray-900 focus:bg-white focus:border-gray-400 focus:outline-none relative"
  );
};

export const IbbFormInput = (props: IIbbFormInputProps) => {
  const currentInputType = useMemo(() => {
    return props.input_type ? props.input_type : InputType.text;
  }, [props.input_type]);
  const handleChange = (
    field_id: string,
    event: React.ChangeEvent,
    decimalSeparator?: string,
    groupSeparator?: string,
    decimalsLimit?: number,
  ) => {
    if (props.handleChangeInput)
      props.handleChangeInput(
        field_id,
        event,
        decimalSeparator,
        groupSeparator,
        decimalsLimit,
      );
    else {
      console.debug("Change Input Event not handled.");
    }
    focusKey = field_id;
  };
  return (
    <>
      {currentInputType == InputType.currency
        ? getCurrencyInput(props, handleChange, focusKey)
        : getInput(props, currentInputType, handleChange, focusKey)}
    </>
  );
};

function getCurrencyInput(
  props: IIbbFormInputProps,
  handleChange: (
    field_id: string,
    event: React.ChangeEvent,
    decimalSeparator?: string,
    groupSeparator?: string,
    decimalsLimit?: number,
  ) => void,
  focusKey?,
): React.ReactNode {
  const decimalSeparator =
    props.options && props.options.decimalsymbol
      ? props.options.decimalsymbol
      : ",";
  const groupSeparator =
    props.options && props.options.thousandssymbol
      ? props.options.thousandssymbol
      : ".";
  const decimalsLimit =
    props.options && props.options.precision
      ? parseInt(props.options.precision)
      : 2;

  const value = formatNumberValue(props.field_value, decimalsLimit);

  const handleBlur = (event) => {
    let value = event.target.value;
    if (!value) return;
    value = parseFloat(
      unformatNumberValue(value, groupSeparator, decimalSeparator),
    ).toFixed(decimalsLimit);
    event.target.value = value;
    handleChange(props.field_id, event);
  };

  return (
    <TwInputFieldWithAddonContainer>
      <CurrencyInput
        className={getCurrencyInputStyle()}
        key={props.field_id}
        id={props.field_id}
        name={props.field_name}
        placeholder={props.field_placeholder ? props.field_placeholder : ""}
        value={value}
        decimalsLimit={decimalsLimit}
        fixedDecimalLength={decimalsLimit}
        decimalSeparator={decimalSeparator}
        decimalScale={decimalsLimit}
        groupSeparator={groupSeparator}
        autoFocus={focusKey && focusKey == props.field_id}
        onBlur={(event) => handleBlur(event)}
        onChange={(event) =>
          handleChange(
            props.field_id,
            event,
            decimalSeparator,
            groupSeparator,
            decimalsLimit,
          )
        }
        readOnly={props.readonly}
      />
      {/* <TwInputFieldWithAddon
        type={"text"}
        key={props.field_id}
        placeholder={props.field_placeholder}
        //defaultValue={props.field_value}
        id={props.field_id}
        name={props.field_name}
        maxLength={props.maxlength}
        readOnly={props.readonly}
        onChange={(event) => handleChange(props.field_id, event, decimalSeparator, groupSeparator, decimalsLimit)}
        value={value}
        //autoFocus={focusKey && focusKey == props.field_id}
      ></TwInputFieldWithAddon> */}
      <TwInputFieldAddonContainer>
        <TwInputFieldAddon>
          {props.options && props.options.suffix ? props.options.suffix : ""}
        </TwInputFieldAddon>
      </TwInputFieldAddonContainer>
    </TwInputFieldWithAddonContainer>
  );
}

function getInput(
  props: IIbbFormInputProps,
  currentInputType: InputType,
  handleChange: (field_id: string, event: React.ChangeEvent) => void,
  focusKey?,
): React.ReactNode {
  return (
    <TwInputField
      type={InputType[currentInputType]}
      placeholder={props.field_placeholder}
      key={props.field_id}
      //defaultValue={props.field_value}
      id={props.field_id}
      name={props.field_name}
      maxLength={props.maxlength}
      readOnly={props.readonly}
      value={props.field_value}
      onChange={(event) => handleChange(props.field_id, event)}
      autoFocus={focusKey && focusKey == props.field_id}
    ></TwInputField>
  );
}
