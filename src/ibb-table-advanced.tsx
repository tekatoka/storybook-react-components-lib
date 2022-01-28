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
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";
import {
  SortIcon,
  SortUpIcon,
  SortDownIcon,
} from "./elements/ibb-table-advanced/ibb-table-sort-icons";
import { ButtonType, IbbButton } from ".";
import {
  GlobalFilter,
  PageButton,
} from "./elements/ibb-table-advanced/ibb-table-utils";

export interface ITablePropsAdvanced {
  title: string;
  columns: string[];
  itemComponent?: (rowData: any[]) => React.ReactNode;
  data: any[];
  filterPlaceholder: string;
}

export const IbbTableAdvanced = ({
  title,
  columns,
  data,
  filterPlaceholder,
}: ITablePropsAdvanced) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page, which has only the rows for the active page
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    usePagination, // new
  );

  // Render the UI for your table
  return (
    <>
      <TwHeadRowContainer>
        {title && <TwTableTitle>{title}</TwTableTitle>}
        <TwFilterContainer>
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            placeholder={filterPlaceholder}
          />
          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map((column) =>
              column.Filter ? (
                <TwFilter key={column.id}>{column.render("Filter")}</TwFilter>
              ) : null,
            ),
          )}
        </TwFilterContainer>
      </TwHeadRowContainer>
      {/* table */}
      <TwTableContainer>
        <TwTableInnerContainer>
          <TwTable {...getTableProps()}>
            <TwTableHead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TwTableHeader
                      scope="col"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={column.id === "actions" && "w-1"}
                    >
                      <TwTableHeaderCell actions={column.id === "actions"}>
                        {column.render("Header")}
                        {/* Add a sort direction indicator */}
                        {column.id !== "actions" && (
                          <span>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <SortDownIcon />
                              ) : (
                                <SortUpIcon />
                              )
                            ) : (
                              <SortIcon />
                            )}
                          </span>
                        )}
                      </TwTableHeaderCell>
                    </TwTableHeader>
                  ))}
                </tr>
              ))}
            </TwTableHead>
            <TwTableBody {...getTableBodyProps()}>
              {page.map((row, i) => {
                // new
                prepareRow(row);
                return (
                  <TwTableBodyRow
                    {...row.getRowProps()}
                    even={i == 0 || i % 2 == 0 ? true : false}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <TwTableBodyCell {...cell.getCellProps()} role="cell">
                          <TwTableBodyCellContent
                            className={
                              cell.column.id === "actions"
                                ? "flex flex-col content-between space-y-1"
                                : "whitespace-pre"
                            }
                          >
                            {cell.render("Cell")}
                          </TwTableBodyCellContent>
                        </TwTableBodyCell>
                      );
                    })}
                  </TwTableBodyRow>
                );
              })}
            </TwTableBody>
          </TwTable>
        </TwTableInnerContainer>
      </TwTableContainer>
      {/* Pagination */}
      <TwTablePaginationContainer>
        <TwTablePaginationButtonsContainer>
          <IbbButton onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </IbbButton>
          <IbbButton onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </IbbButton>
        </TwTablePaginationButtonsContainer>
        <TwTablePagerContainer>
          <TwTablePager>
            <span className="text-gray-700">
              Seite <span className="font-medium">{state.pageIndex + 1}</span>{" "}
              von <span className="font-medium">{pageOptions.length}</span>
            </span>
            <label>
              <span className="sr-only">Einträge pro Seite</span>
              <TwTablePageSelector
                value={state.pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </TwTablePageSelector>
            </label>
          </TwTablePager>
          <div>
            <TwTablePageNavigation aria-label="Pagination">
              <PageButton
                className="rounded-l-md"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className=""
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className=""
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton
                className="rounded-r-md"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <ChevronDoubleRightIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </PageButton>
            </TwTablePageNavigation>
          </div>
        </TwTablePagerContainer>
      </TwTablePaginationContainer>
    </>
  );
};

const TwTableTitle = tw.h3`px-4 text-gray-800 uppercase text-bold tracking-widest font-semibold h-5/6 flex items-center`;
const TwHeadRowContainer = tw.div`flex justify-between gap-x-2 mb-2`;
const TwFilterContainer = tw.div`flex items-baseline flex-row-reverse gap-x-2`;
const TwFilter = tw.div`flex flex-col`;
const TwTableContainer = tw.div`flex flex-col`;
const TwTableInnerContainer = tw.div`-my-2 overflow-x-auto py-2 align-middle inline-block min-w-full`;
const TwTable = tw.table`min-w-full divide-y divide-white`;
const TwTableHead = tw.thead`bg-gray-100 hover:bg-gray-200 text-gray-900`;
const TwTableHeader = tw.th`text-right items-right group p-3 font-semibold capitalize border-t border-b border-gray-300`;
// const TwTableHeader = tw.th`group px-6 py-2 text-left font-semibold capitalize border-t border-b border-gray-300`;
// const TwTableHeaderActions = tw.th`group px-6 py-2 text-right items-right w-100 border-t border-b border-gray-300`;
//const TwTableHeaderCell = tw.div`flex items-center justify-between`;

const TwTableBody = tw.tbody`divide-y divide-white`;
const TwTableBodyCell = tw.td`p-3 whitespace-nowrap border-t border-b border-gray-300`;
const TwTableBodyCellContent = tw.div``;

const TwTablePaginationContainer = tw.div`py-3 flex items-center justify-between`;
const TwTablePaginationButtonsContainer = tw.div`flex-1 flex justify-between sm:hidden`;
const TwTablePagerContainer = tw.div`hidden sm:flex-1 sm:flex sm:items-center sm:justify-between`;
const TwTablePager = tw.div`flex gap-x-2 items-baseline`;
const TwTablePageSelector = tw.select`mt-1 ml-3 block w-full border border-grey-light hover:bg-gray-200 max-w-lg bg-gray-100 w-full p-2 text-gray-700 focus:outline-none focus:bg-white focus:border-ibb-dark`;
const TwTablePageNavigation = tw.nav`relative z-0 inline-flex -space-x-px`;

function TwTableHeaderCell({ children, actions }) {
  const TwHeaderCell = tw.div`${(p) =>
    actions
      ? "flex flex-col content-between space-y-1"
      : "flex items-center justify-between"}`;
  return <TwHeaderCell>{children}</TwHeaderCell>;
}

function TwTableBodyRow({ children, even }) {
  const TwRow = tw.tr`${(p) =>
    even ? "bg-gray-50" : "bg-gray-100"} hover:bg-gray-200 text-gray-900`;
  return <TwRow>{children}</TwRow>;
}
