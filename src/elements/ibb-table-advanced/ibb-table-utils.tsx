import React from "react";
import _ from "lodash";
import { useAsyncDebounce } from "react-table";
import { classNames } from "../../helpers/functions";
import tw from "tailwind-styled-components";
import { TwInputField } from "../../helpers/twCommonElements";
import { IbbDropdown, IDropdownProps } from "../../ibb-form-dropdown";
import { Element } from "../../element";
import { FormElement, InputType } from "../..";

// Define a default UI for filtering
export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  placeholder,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);
  return (
    <TwSearchInputField>
      <TwInputField
        type={"text"}
        placeholder={placeholder ? placeholder : `${count} Einträge...`}
        defaultValue={value || ""}
        id="search-field"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      ></TwInputField>
    </TwSearchInputField>
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  const args: IDropdownProps = {
    field_id: id,
    field_name: id,
    field_value: filterValue,
    defaultValue: `${render("Header")}: all`,
    field_label: render("Header"),
    items: [{ id: -1, value: `${render("Header")}: all` }].concat(
      options
        .filter((option) => option != undefined && option != "")
        .map((option: any, i) => ({ id: i, value: option })),
    ),
    handleChange: (e) => {
      setFilter(
        e.target.value && e.target.selectedIndex != 0
          ? e.target.value
          : undefined,
      );
    },
  };

  return <IbbDropdown {...args} />;
}

export function StatusPill({ value }) {
  const status = value ? value.toLowerCase() : "unknown";

  return (
    <span
      className={classNames(
        "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
        status.startsWith("active") ? "bg-green-100 text-green-800" : null,
        status.startsWith("inactive") ? "bg-yellow-100 text-yellow-800" : null,
        status.startsWith("offline") ? "bg-red-100 text-red-800" : null,
      )}
    >
      {status}
    </span>
  );
}

export function CustomCell({ value, column, row }) {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img
          className="h-10 w-10 rounded-full"
          src={row.original[column.imgAccessor]}
          alt=""
        />
      </div>
      <div className="ml-4">
        <div className="font-medium text-gray-900">{value}</div>
        <div className="text-gray-500">
          {row.original[column.emailAccessor]}
        </div>
      </div>
    </div>
  );
}

export function ComplexValue({ value }) {
  let complexValue = [];
  if (value) {
    value.forEach((element, i) => {
      complexValue.push(<div key={i}>{`${renderComplexValue(element)}`}</div>);
    });
  }
  return <span>{complexValue}</span>;
}

const renderComplexValue = (value) => {
  let complexValue = "";
  Object.keys(value).forEach((key) => {
    if (key != "id") complexValue += `${value[key]} `;
  });
  return complexValue;
};

export function ComplexAccessor(value) {
  let complexValue = [];
  if (value) {
    value.forEach((element, i) => {
      complexValue.push(`${renderComplexValue(element)}`);
    });
  }
  return complexValue.map((a) => a).join("\r\n");
}

export function PageButton({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex items-center px-2 py-2 bg-white font-medium",
        className,
        rest.disabled
          ? "text-gray-300 cursor-default"
          : "text-gray-600 cursor-pointer hover:bg-gray-100 focus:outline-none",
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

const TwSearchInputField = tw.div``;
