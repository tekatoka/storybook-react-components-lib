import React from "react";
import tw from "tailwind-styled-components";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table";

export interface ITablePropsElements {
  title: string;
  columns: any[];
  itemComponent?: (rowData: any[]) => React.ReactNode;
  data: any[];
  showFooter?: boolean;
}

export const IbbTableElements = ({
  title,
  columns,
  data,
  showFooter,
}: ITablePropsElements) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, prepareRow, page } = useTable(
    {
      columns,
      data,
    },
    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    usePagination, // new
  );
  return (
    <>
      {/* table */}
      <TwTableContainer>
        <TwTableInnerContainer>
          <TwTable {...getTableProps()}>
            <TwTableHead>
              <tr>
                {columns.map((col, i) => (
                  <TwTableHeader
                    scope="col"
                    key={i}
                    style={{ width: `${100 / columns.length}%` }}
                  >
                    {col.Header}
                  </TwTableHeader>
                ))}
              </tr>
            </TwTableHead>
            <TwTableBody {...getTableBodyProps()}>
              {page.map((row, i) => {
                // new
                prepareRow(row);
                return (
                  <TwTableBodyRow {...row.getRowProps()}>
                    {row.cells.map((cell, i) => {
                      return (
                        <TwTableBodyCell {...cell.getCellProps()} role="cell" key={i}>
                          <TwTableBodyCellContent>
                            {cell.render("Cell")}
                          </TwTableBodyCellContent>
                        </TwTableBodyCell>
                      );
                    })}
                  </TwTableBodyRow>
                );
              })}
            </TwTableBody>
            {showFooter && (
              <TwTableFooter>
                <tr>
                  {columns.map((col, i) => (
                    <TwTableFooterCell scope="col" key={i}>
                      {col.Footer}
                    </TwTableFooterCell>
                  ))}
                </tr>
              </TwTableFooter>
            )}
          </TwTable>
        </TwTableInnerContainer>
      </TwTableContainer>
    </>
  );
};

const TwTableContainer = tw.div`flex flex-col`;
const TwTableInnerContainer = tw.div`-my-2 overflow-x-auto py-2 align-middle inline-block min-w-full`;
const TwTable = tw.table`min-w-full divide-y divide-white mb-6`;
const TwTableHead = tw.thead`bg-gray-100 hover:bg-gray-200 text-gray-900`;
const TwTableHeader = tw.th`p-2 text-left text-sm text-gray-500 font-semibold tracking-wider`;
const TwTableBody = tw.tbody`bg-white divide-y divide-gray-200`;
const TwTableBodyRow = tw.tr`bg-white hover:bg-gray-200 text-gray-900`;
const TwTableBodyCell = tw.td`p-2 whitespace-nowrap border-t border-b`;
const TwTableBodyCellContent = tw.div``;
const TwTableFooter = tw.tfoot`bg-gray-200 hover:bg-gray-200 text-gray-900`;
const TwTableFooterCell = tw.th`text-left p-2 w-px flex-1 text-gray-700 font-bold`;
