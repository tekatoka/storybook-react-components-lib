import React from "react";
import tw from "tailwind-styled-components";
import { IbbTableDefaultRow } from "./ibb-table-default-row";

export interface ITableProps {
  header: string[];
  showColumnSums?: boolean;
  columnSumNames?: string[],
  itemComponent?: (rowData:any[])=>React.ReactNode;
  data: any[];
}

export const IbbTable = (props: ITableProps) => {
  return (
    <TwTable>
      <TwTableHeader>
        <tr>
          {props.header.map((item: string, i: number) => (
            <TwTableHead key={i} style={{width: `${100/props.header.length}%`}}>{item}</TwTableHead>
          ))}
        </tr>
      </TwTableHeader>
      <TwTableBody>
        {props.data.map((rowData, i: number) => (
            props.itemComponent ? (
              props.itemComponent(rowData)
            ) : (
              <IbbTableDefaultRow key={i} rowData={rowData} />
            )
        ))}
        {props.showColumnSums && <div>column sums</div>}
      </TwTableBody>
    </TwTable>
  );
};

const TwTable = tw.table`min-w-full divide-y divide-gray-200`;
const TwTableHeader = tw.thead`bg-gray-50`;
const TwTableHead = tw.th`p-2 text-left text-sm text-gray-500 font-semibold tracking-wider`;
const TwTableBody = tw.tbody`bg-white divide-y divide-gray-200`;
const TwTableDataRow = tw.tr``;
