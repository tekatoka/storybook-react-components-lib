import React from "react";
import _ from "lodash";
import {
  IbbFormInput,
  IbbFormCheckbox,
  IbbFormRadiobutton,
  IbbDropdown,
  IbbFormDatetimepicker,
  IbbButton,
  ButtonType,
  IbbTable,
  IbbFormLabelElement,
  IbbTableAdvanced,
  IbbTableElements,
} from ".";
import { FormElement } from "./types/form-elements";
import {
  TwElementContainer,
  TwElementButtonContainer,
  TwElementContainerGrid_1_3,
  TwElementContainerGrid_2_3,
  TwInputFieldLabel,
} from "./helpers/twCommonElements";
import { InputType } from "../src/ibb-form-input";
import { IbbFormTextArea } from "./ibb-form-textarea";

interface IProps {
  field: FormElement;
  handleChangeInput?: any;
  hideLabel?: boolean;
  isTableElement?: boolean;
}

const ElementTypes = {
  inputText: "input-text-component",
  inputNumeric: "input-numeric-component",
  inputNumber: "input-number-component",
  inputCurrency: "input-currency-component",
  textarea: "text-area-component",
  date: "date-component",
  dropdown: "dropdown-component",
  checkbox: "input-checkbox-component",
  radio: "input-radiobutton-component",
  subformButton: "subform-component",
  table: "table-component",
  label: "label-component",
  labelTemplate: "label-template",
};

export const FieldWrapper = ({ type, id, label, children, showGrid }) => {
  return !showGrid ? (
    <div>
      {label && type != ElementTypes.checkbox && type != ElementTypes.radio && (
        <TwInputFieldLabel htmlFor={id}>{label}</TwInputFieldLabel>
      )}{" "}
      {children}
    </div>
  ) : type == ElementTypes.subformButton ? (
    <TwElementButtonContainer>{children}</TwElementButtonContainer>
  ) : (
    <TwElementContainer>
      <TwElementContainerGrid_1_3>
        {label &&
          type != ElementTypes.checkbox &&
          type != ElementTypes.radio && (
            <TwInputFieldLabel htmlFor={id}>{label}</TwInputFieldLabel>
          )}{" "}
      </TwElementContainerGrid_1_3>
      <TwElementContainerGrid_2_3>{children}</TwElementContainerGrid_2_3>
    </TwElementContainer>
  );
};

export const Element = (props: IProps) => {
  const {
    field_type,
    field_id,
    field_label,
    field_placeholder,
    field_value,
    field_readonly,
    field_maxlength,
    field_options,
    field_dropdown_options,
    field_name,
    field_custom_action,
    table_columns_sums,
    table_show_columns_sums,
    table_show_hidden_rows,
    table_headers,
  } = props.field;

  const { hideLabel, isTableElement } = props;

  switch (field_type) {
    case ElementTypes.inputText:
    case ElementTypes.inputNumber:
    case ElementTypes.inputNumeric:
    case ElementTypes.inputCurrency:
      const type =
        field_type == ElementTypes.inputCurrency ||
        (field_options && field_options.suffix)
          ? InputType.currency
          : field_type == ElementTypes.inputNumber ||
            field_type == ElementTypes.inputNumeric
          ? InputType.number
          : InputType.text;
      return (
        <FieldWrapper
          type={field_type}
          id={field_id}
          label={!hideLabel && field_label}
          showGrid={!isTableElement}
        >
          <IbbFormInput
            field_id={field_id}
            field_placeholder={field_placeholder}
            field_label={field_label}
            field_value={field_value}
            field_name={field_name}
            input_type={type}
            readonly={field_readonly}
            maxlength={field_maxlength}
            options={field_options}
            handleChangeInput={props.handleChangeInput}
          />
        </FieldWrapper>
      );
    case ElementTypes.textarea:
      return (
        <FieldWrapper
          type={field_type}
          id={field_id}
          label={!hideLabel && field_label}
          showGrid={!isTableElement}
        >
          <IbbFormTextArea
            field_id={field_id}
            field_placeholder={field_placeholder}
            field_label={field_label}
            field_value={field_value}
            field_name={field_name}
            readonly={field_readonly}
            maxlength={field_maxlength}
            options={field_options}
            handleChangeInput={props.handleChangeInput}
          />
        </FieldWrapper>
      );
    case ElementTypes.date:
      return (
        <FieldWrapper
          type={field_type}
          id={field_id}
          label={!hideLabel && field_label}
          showGrid={!isTableElement}
        >
          <IbbFormDatetimepicker
            field_id={field_id}
            field_placeholder={
              field_placeholder ? field_placeholder : field_label
            }
            field_label={field_label}
            field_value={field_value}
            field_name={field_name}
            readonly={field_readonly}
            options={field_options}
            handleChangeInput={props.handleChangeInput}
          />
        </FieldWrapper>
      );
    case ElementTypes.checkbox:
      return (
        <FieldWrapper
          type={field_type}
          id={field_id}
          label={!hideLabel && field_label}
          showGrid={!isTableElement}
        >
          <IbbFormCheckbox
            field_id={field_id}
            field_label={field_label}
            field_value={field_value}
            field_name={field_name}
            readonly={field_readonly}
            options={field_options}
            handleChangeInput={props.handleChangeInput}
          />
        </FieldWrapper>
      );
    case ElementTypes.radio:
      return (
        <FieldWrapper
          type={field_type}
          id={field_id}
          label={!hideLabel && field_label}
          showGrid={!isTableElement}
        >
          <IbbFormRadiobutton
            field_id={field_id}
            field_label={field_label}
            field_name={field_name}
            field_value
            // TODO get selections
            selections={[]}
            readonly={field_readonly}
            options={field_options}
            handleChangeInput={props.handleChangeInput}
          />
        </FieldWrapper>
      );
    case ElementTypes.dropdown:
      return (
        <FieldWrapper
          type={field_type}
          id={field_id}
          label={!hideLabel && field_label}
          showGrid={!isTableElement}
        >
          <IbbDropdown
            field_id={field_id}
            field_label={field_label}
            field_value={field_value}
            field_name={field_name}
            defaultValue={field_value ? field_value : undefined}
            items={field_dropdown_options}
            readonly={field_readonly}
            options={field_options}
            handleChangeInput={props.handleChangeInput}
          />
        </FieldWrapper>
      );
    case ElementTypes.subformButton:
      return (
        <FieldWrapper
          type={field_type}
          id={field_id}
          label={!hideLabel && field_label}
          showGrid={!isTableElement}
        >
          <IbbButton
            buttontype={ButtonType.Primary}
            children={field_label}
            disabled={field_readonly}
            onClick={field_custom_action}
          />
        </FieldWrapper>
      );
    case ElementTypes.label:
    case ElementTypes.labelTemplate:
      return (
        <FieldWrapper
          type={field_type}
          id={field_id}
          label={!hideLabel && field_label}
          showGrid={!isTableElement}
        >
          <IbbFormLabelElement
            field_id={field_id}
            field_value={field_label}
            readonly={field_readonly}
            maxlength={field_maxlength}
          />
        </FieldWrapper>
      );
    case ElementTypes.table:
      return (
        <FieldWrapper
          type={field_type}
          id={field_id}
          label={!hideLabel && field_label}
          showGrid={false}
        >
          <IbbTableElements
            title=""
            showFooter={table_show_columns_sums}
            columns={getColumnValues(
              table_headers,
              field_value,
              table_show_columns_sums,
              table_columns_sums,
              props.handleChangeInput,
            )}
            data={field_value}
          ></IbbTableElements>
          {/* <IbbTable
            header={table_headers}
            showColumnSums={table_show_columns_sums}
            columnSumNames={table_columns_sums}
            data={getTableValues(table_headers, field_value, props.handleChangeInput)}
          ></IbbTable> */}
        </FieldWrapper>
      );
    default:
      //default input field
      return (
        <FieldWrapper
          type={field_type}
          id={field_id}
          label={!hideLabel && field_label}
          showGrid={!isTableElement}
        >
          <IbbFormInput
            field_id={field_id}
            field_placeholder={field_placeholder}
            field_label={field_label}
            field_value={field_value}
            field_name={field_name}
            readonly={field_readonly}
            maxlength={field_maxlength}
            options={field_options}
            handleChangeInput={props.handleChangeInput}
          />
        </FieldWrapper>
      );
  }
};

const getColumnValues = (
  keys,
  data,
  showColumnSums,
  columnSumFields,
  handleChangeInput,
) => {
  let columns = [];
  keys.filter(e => e).forEach((element, index) => {
    columns.push({
      accessor: (row) =>
        row[index] ? ElementAccessor(row[index], handleChangeInput) : "",
      Header: element,
      id: element,
      Footer:
        showColumnSums &&
        columnSumFields.indexOf(element) > -1 &&
        FooterSum(data, index),
    });
  });

  return columns;
};

const getTableValues = (
  table_headers: string[],
  tableData: any,
  handleChangeInput: () => void,
) => {
  let result = [];
  tableData.map((row, i) => {
    const resultRow = {};

    row.map((item, i) => {
      item["field_options"] = { header: table_headers[i] };
      resultRow[i] = item && item && (
        <Element
          key={i}
          field={item}
          hideLabel={true}
          isTableElement={true}
          handleChangeInput={handleChangeInput}
        />
      );
    });

    result.push(resultRow);
  });
  return result;
};

export const ElementAccessor = (
  value: FormElement,
  handleChangeInput?: () => void,
) => {
  return (
    <Element
      key={value.field_id}
      field={value}
      hideLabel={true}
      isTableElement={true}
      handleChangeInput={handleChangeInput}
    />
  );
};

export const FooterSum = (data: [], index: number) => {
  let options = {};
  let fieldType;
  const sum = _.sum(
    _.map(data, (row) => {
      const field: FormElement = row[index];
      if (field) options = field.field_options;
      fieldType = field.field_type;
      return Number(field.field_value);
    }),
  )//.toLocaleString();

  const sumField: FormElement = {
    field_id: `sum-${index}`,
    field_name: `sum-${index}`,
    field_placeholder: sum,
    field_value: sum,
    field_options: options,
    field_readonly: true,
    field_type: fieldType
  };

  return (
    <Element
      key={index}
      field={sumField}
      hideLabel={true}
      isTableElement={true}
    />
  );
};
