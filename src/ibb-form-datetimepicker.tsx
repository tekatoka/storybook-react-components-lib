import React, { useState, useEffect, forwardRef } from "react";
import moment from "moment";
import { CalendarIcon } from "@heroicons/react/outline";
import tw from "tailwind-styled-components/dist/tailwind";
import DatePicker, { registerLocale } from "react-datepicker";

import {
  TwInputField,
  TwInputFieldWithAddonContainer,
  TwInputFieldAddonContainer,
  TwInputFieldAddon,
} from "./helpers/twCommonElements";
import de from "date-fns/locale/de";
import { FormElementOptions } from "./types/form-elements";

export interface IIbbFormDatetimepickerProps {
  field_id;
  field_placeholder;
  field_label;
  field_value;
  field_name;
  readonly?: boolean;
  options?: FormElementOptions;
  handleChangeInput: (elementId: string, event: React.ChangeEvent) => void;
}

const getDatetimeInputStyle = () => {
  return (
    "form-control flex-shrink flex-grow flex-auto leading-normal py-2 px-4 w-px flex-1 text-gray-700 " +
    "leading-tight border border-grey-light hover:border-gray-400 focus:outline-none focus:bg-white " +
    "focus:text-gray-900 focus:bg-white focus:border-gray-400 focus:outline-none relative"
  );
};

export const IbbFormDatetimepicker = (props: IIbbFormDatetimepickerProps) => {
  const handleChange = (field_id: string, event: any, date: any) => {
    date && setStartDate(date);
    if (!event.target.value)
      event.target.value = moment(date).format("DD.MM.YYYY");
    if (props.handleChangeInput) props.handleChangeInput(field_id, event);
    else {
      console.debug("Change Datetime Picker Event not handled..");
    }
  };

  const [startDate, setStartDate] = useState(
    props.field_value
      ? moment(props.field_value, "DD.MM.YYYY").toDate()
      : new Date(),
  );
  const [endDate, setEndDate] = useState(
    props.field_value
      ? new Date(props.field_value).setMonth(startDate.getMonth() + 1)
      : new Date().setMonth(startDate.getMonth() + 1),
  );

  registerLocale("de", de);

  return (
    <TwInputFieldWithAddonContainer>
      <DatePicker
        className={getDatetimeInputStyle()}
        selected={startDate}
        onChange={(value, e) => handleChange(props.field_id, e, value)}
        selectsStart
        dateFormat="dd.MM.yyyy"
        startDate={props.field_value ? props.field_value : startDate}
        endDate={endDate}
        key={props.field_id}
        id={props.field_id}
        name={props.field_name}
        customInput={<CustomInput />}
        nextMonthButtonLabel=">"
        previousMonthButtonLabel="<"
        popperClassName="react-datepicker-left"
        wrapperClassName="block"
        locale="de"
        calendarStartDay={1}
      />
      <TwInputFieldAddonContainer>
        <TwInputFieldAddon>
          <CalendarIcon width="16" className="text-gray-700 cursor-pointer" />
        </TwInputFieldAddon>
      </TwInputFieldAddonContainer>
    </TwInputFieldWithAddonContainer>
  );
};

const CustomInput = forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
>((props, ref) => (
  <TwInputField
    onChange={(event) => props.onChange(event)}
    placeholder={props.placeholder}
    value={props.value}
    id={props.id}
    key={props.id}
    name={props.name}
    readOnly={props.readOnly}
    disabled={props.readOnly}
    onClick={props.onClick}
  />
));
