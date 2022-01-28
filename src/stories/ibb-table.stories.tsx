import React from "react";
import { ButtonType, IbbButton, IbbFormInput, InputType } from "..";
import {
  ComplexValue,
  ComplexAccessor,
  StatusPill
} from "../elements/ibb-table-advanced/ibb-table-utils";
import { IbbTable, ITableProps } from "../ibb-table";
import { IbbTableAdvanced, ITablePropsAdvanced } from "../ibb-table-advanced";
import { SelectColumnFilter } from "../elements/ibb-table-advanced/ibb-table-utils";
import { ItemComponent } from "../elements/ibb-tree-menu/ibb-tree-menu-items";
import { Element, ElementAccessor } from "../element";

export default {
  title: "Components/Tables",
  component: IbbTable,
};

export const DefaultTable = (args: ITableProps) => <IbbTable {...args} />;
export const DefaultTable2 = (args: ITableProps) => <IbbTable {...args} />;
export const AdvancedTable = (args: ITablePropsAdvanced) => (
  <IbbTableAdvanced {...args} />
);
export const AdvancedTable2 = (args: ITablePropsAdvanced) => (
  <IbbTableAdvanced {...args} />
);

DefaultTable.args = {
  header: ["Id", "Name", "Price"],
  data: [
    {
      id: 1,
      name: "Brot",
      price: 1.29,
    },
    {
      id: 2,
      name: "Milch",
      price: 0.99,
    },
    {
      id: 3,
      name: "Butter",
      price: 2.19,
    },
    {
      1: (
        <IbbFormInput
          field_id={"test1"}
          field_placeholder="Test 1"
          handleChangeInput={() => ""}
        ></IbbFormInput>
      ),
      2: (
        <IbbFormInput
          field_id={"test2"}
          field_placeholder="Test 2"
          handleChangeInput={() => ""}
        ></IbbFormInput>
      ),
      3: <IbbButton onClick={() => console.log("OK")}>OK</IbbButton>,
    },
  ],
};

const testData = [
  [
    {
      field_id: "kosten-1-kostenart",
      field_label: "Kostenart",
      field_placeholder: "Kostenart",
      field_type: "dropdown-component",
      field_value: "Personal",
      field_dropdown_options: [],
      field_readonly: true,
      field_custom_action: false,
    },
    {
      field_id: "kosten-1-foerderfaehig",
      field_label: "Foerderfaehig",
      field_placeholder: "Foerderfaehig",
      field_type: "input-numeric-component",
      field_value: 141392.9063,
      field_dropdown_options: [],
      field_options: {
        suffix: "€",
        precision: "2",
        thousandssymbol: ".",
        decimalsymbol: ",",
      },
      field_readonly: false,
      field_custom_action: false,
    },
    {
      field_id: "kosten-1-nichtfoerderfaehig",
      field_label: "NichtFoerderfaehig",
      field_placeholder: "NichtFoerderfaehig",
      field_type: "input-numeric-component",
      field_value: 47130.9688,
      field_dropdown_options: [],
      field_options: {
        suffix: "€",
        precision: "2",
        thousandssymbol: ".",
        decimalsymbol: ",",
      },
      field_readonly: false,
      field_custom_action: false,
    },
  ],
  [
    {
      field_id: "kosten-2-kostenart",
      field_label: "Kostenart",
      field_placeholder: "Kostenart",
      field_type: "dropdown-component",
      field_value: "PauschSatz",
      field_dropdown_options: [],
      field_readonly: true,
      field_custom_action: false,
    },
    {
      field_id: "kosten-2-foerderfaehig",
      field_label: "Foerderfaehig",
      field_placeholder: "Foerderfaehig",
      field_type: "input-numeric-component",
      field_value: 47130.9688,
      field_dropdown_options: [],
      field_options: {
        suffix: "€",
        precision: "2",
        thousandssymbol: ".",
        decimalsymbol: ",",
      },
      field_readonly: false,
      field_custom_action: false,
    },
    {
      field_id: "kosten-2-nichtfoerderfaehig",
      field_label: "NichtFoerderfaehig",
      field_placeholder: "NichtFoerderfaehig",
      field_type: "input-numeric-component",
      field_value: 141392.9063,
      field_dropdown_options: [],
      field_options: {
        suffix: "€",
        precision: "2",
        thousandssymbol: ".",
        decimalsymbol: ",",
      },
      field_readonly: false,
      field_custom_action: false,
    },
  ],
  [
    {
      field_id: "kosten-0:honorar-kostenart",
      field_label: "Kostenart",
      field_placeholder: "Kostenart",
      field_type: "dropdown-component",
      field_value: "Honorar",
      field_dropdown_options: [],
      field_readonly: true,
      field_custom_action: false,
    },
    {
      field_id: "kosten-0:honorar-foerderfaehig",
      field_label: "Foerderfaehig",
      field_placeholder: "Foerderfaehig",
      field_type: "input-numeric-component",
      field_value: 0,
      field_dropdown_options: [],
      field_options: {
        suffix: "€",
        precision: "2",
        thousandssymbol: ".",
        decimalsymbol: ",",
      },
      field_readonly: false,
      field_custom_action: false,
    },
    {
      field_id: "kosten-0:honorar-nichtfoerderfaehig",
      field_label: "NichtFoerderfaehig",
      field_placeholder: "NichtFoerderfaehig",
      field_type: "input-numeric-component",
      field_value: 0,
      field_dropdown_options: [],
      field_options: {
        suffix: "€",
        precision: "2",
        thousandssymbol: ".",
        decimalsymbol: ",",
      },
      field_readonly: false,
      field_custom_action: false,
    },
  ],
  [
    {
      field_id: "kosten-0:sach-kostenart",
      field_label: "Kostenart",
      field_placeholder: "Kostenart",
      field_type: "dropdown-component",
      field_value: "Sach",
      field_dropdown_options: [],
      field_readonly: true,
      field_custom_action: false,
    },
    {
      field_id: "kosten-0:sach-foerderfaehig",
      field_label: "Foerderfaehig",
      field_placeholder: "Foerderfaehig",
      field_type: "input-numeric-component",
      field_value: 0,
      field_dropdown_options: [],
      field_options: {
        suffix: "€",
        precision: "2",
        thousandssymbol: ".",
        decimalsymbol: ",",
      },
      field_readonly: false,
      field_custom_action: false,
    },
    {
      field_id: "kosten-0:sach-nichtfoerderfaehig",
      field_label: "NichtFoerderfaehig",
      field_placeholder: "NichtFoerderfaehig",
      field_type: "input-numeric-component",
      field_value: 0,
      field_dropdown_options: [],
      field_options: {
        suffix: "€",
        precision: "2",
        thousandssymbol: ".",
        decimalsymbol: ",",
      },
      field_readonly: false,
      field_custom_action: false,
    },
  ],
  [
    {
      field_id: "kosten-0:tnkosten-kostenart",
      field_label: "Kostenart",
      field_placeholder: "Kostenart",
      field_type: "dropdown-component",
      field_value: "TnKosten",
      field_dropdown_options: [],
      field_readonly: true,
      field_custom_action: false,
    },
    {
      field_id: "kosten-0:tnkosten-foerderfaehig",
      field_label: "Foerderfaehig",
      field_placeholder: "Foerderfaehig",
      field_type: "input-numeric-component",
      field_value: 0,
      field_dropdown_options: [],
      field_options: {
        suffix: "€",
        precision: "2",
        thousandssymbol: ".",
        decimalsymbol: ",",
      },
      field_readonly: false,
      field_custom_action: false,
    },
    {
      field_id: "kosten-0:tnkosten-nichtfoerderfaehig",
      field_label: "NichtFoerderfaehig",
      field_placeholder: "NichtFoerderfaehig",
      field_type: "input-numeric-component",
      field_value: 0,
      field_dropdown_options: [],
      field_options: {
        suffix: "€",
        precision: "2",
        thousandssymbol: ".",
        decimalsymbol: ",",
      },
      field_readonly: false,
      field_custom_action: false,
    },
  ],
  [
    {
      field_id: "kosten-0:pauschbetrag-kostenart",
      field_label: "Kostenart",
      field_placeholder: "Kostenart",
      field_type: "dropdown-component",
      field_value: "PauschBetrag",
      field_dropdown_options: [],
      field_readonly: true,
      field_custom_action: false,
    },
    {
      field_id: "kosten-0:pauschbetrag-foerderfaehig",
      field_label: "Foerderfaehig",
      field_placeholder: "Foerderfaehig",
      field_type: "input-numeric-component",
      field_value: 0,
      field_dropdown_options: [],
      field_options: {
        suffix: "€",
        precision: "2",
        thousandssymbol: ".",
        decimalsymbol: ",",
      },
      field_readonly: false,
      field_custom_action: false,
    },
    {
      field_id: "kosten-0:pauschbetrag-nichtfoerderfaehig",
      field_label: "NichtFoerderfaehig",
      field_placeholder: "NichtFoerderfaehig",
      field_type: "input-numeric-component",
      field_value: 0,
      field_dropdown_options: [],
      field_options: {
        suffix: "€",
        precision: "2",
        thousandssymbol: ".",
        decimalsymbol: ",",
      },
      field_readonly: false,
      field_custom_action: false,
    },
  ],
];

const getTestData = (testData) => {
  let result = [];
  testData.map((row, i) => {
    const resultRow = {};

    row.map((item, i) => {
      resultRow[i] = (
        <IbbFormInput
          field_value={item.field_value}
          field_id={item.field_id}
          handleChangeInput={() => ""}
        ></IbbFormInput>
      );
    });

    result.push(resultRow);
  });
  return result;
};

const getTestDataAdvanced = (testData) => {
  let result = [];
  testData.map((row, i) => {
    const resultRow = {};
    row.map((item, i) => {
      resultRow[i] = (
        <IbbFormInput
          field_value={item.field_value}
          field_id={item.field_id}
          handleChangeInput={() => ""}
        ></IbbFormInput>
      );
    });

    result.push(resultRow);
  });
  return result;
};

DefaultTable2.args = {
  header: ["Kostenart", "Foerderfaehig", "NichtFoerderfaehig"],
  showColumnSums: true,
  columnSumNames: ["Foerderfaehig"],
  data: testData,
  //getTestDataAdvanced(testData),
};

const handleCreate = () => {
  console.log("create");
};

const handleEdit = (props) => {
  console.log(props);
};

const getColumns = (keys) => {
  let columns = [];
  keys.forEach((element) => {
    if (element == "Trainer") {
      const field = element.toLowerCase();
      columns.push({
        accessor: (row) => row[field] && ComplexAccessor(row[field]),
        Header: element,
        //Cell: ComplexValue,
        //filter: "includes",
        Filter: SelectColumnFilter,
      });
    } else {
      columns.push({
        accessor: element.toLowerCase(),
        Header: element,
        Cell: (props) => <div>{props.value}</div>,
        //filter: "includes",
      });
    }
  });

  //   Cell: ({ row }: { row: Row }) => (
  //   <p>{row.values['nested.thing.to.display']}</p>
  // ),

  columns.push({
    Header: (
      <IbbButton onClick={() => handleCreate()} buttontype={ButtonType.Primary}>
        Create
      </IbbButton>
    ),
    id: "actions",
    accessor: "actions",
    isSorted: false,
    width: 500,
    Cell: ({ row }) => (
      <>
        <IbbButton
          onClick={() => handleEdit(row.original)}
          buttontype={ButtonType.Secondary}
          //customclasses="mr-1"
        >
          Edit
        </IbbButton>
        <IbbButton
          onClick={() => handleEdit(row.original)}
          buttontype={ButtonType.Danger}
        >
          Delete
        </IbbButton>
      </>
    ),
  });

  return columns;
};

const getColumnsAdvanced = (keys) => {
  let columns = [];
  keys.forEach((element, i) => {
    const field = element.toLowerCase();
    columns.push({
        accessor: (row) => ElementAccessor(row.find(r => r["field_label"] == element)),
        Header: element
    });
  });

  return columns;
};

AdvancedTable2.args = {
  title: "IBB Table",
  columns: getColumnsAdvanced([
    "Kostenart",
    "Foerderfaehig",
    "NichtFoerderfaehig",
  ]),
  data: testData,
  filterPlaceholder: "Search...",
};

AdvancedTable.args = {
  title: "IBB Table",
  columns: getColumns(["Id", "Name", "Country_id", "Trainer"]),
  data: fakePlayers(),
  filterPlaceholder: "Search...",
};

function fakePlayers() {
  return [
    {
      id: 1,
      name: "Sadio Mane",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "10",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position: {
        name: "attach",
        id: 2,
      },
      trainer: [
        {
          Nachname: "Mustermann",
          Vorname: "Max",
        },
        {
          Nachname: "Musterfrau",
          Vorname: "Maria",
        },
      ],
    },
    {
      id: 2,
      name: "Mohammed Sala",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "11",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position: {
        name: "Forward",
        id: 4,
      },
    },
    {
      id: 2,
      name: "Mohammed Sala",
      country_id: 8,
      club_id: 2,
      position_id: 1,
      shirt_number: "11",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position: {
        name: "Forward",
        id: 4,
      },
    },
    {
      id: 2,
      name: "Mohammed Sala",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "11",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position: {
        name: "Forward",
        id: 4,
      },
    },
    {
      id: 2,
      name: "Mohammed Sala",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "11",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position: {
        name: "Forward",
        id: 4,
      },
    },
    {
      id: 3,
      name: "Robertor Fermino",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "8",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position: {
        name: "Defence",
        id: 9,
      },
    },
  ];
}
