import React from "react";
import tw from "tailwind-styled-components";

export interface ITableDefaultRowProps {
  rowData: {};
}

export const IbbTableDefaultRow = (props: ITableDefaultRowProps) => {
  const { rowData } = props;
  return (
    <tr>
      {
        Object.keys(rowData).map(function(key, i) {
          return <TwTableData key={i}>{rowData[key]}</TwTableData>
        })
      }
    </tr>
  );
};

const TwTableData = tw.td`p-2`;
