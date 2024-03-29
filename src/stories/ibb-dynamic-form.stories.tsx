import React from "react";
import { IbbDynamicForm, FormElements, FormBlock } from "..";

export default {
  title: "Components/DynamicForm",
  component: IbbDynamicForm,
};

export const DynamicForm = (args) => <IbbDynamicForm {...args} />;

DynamicForm.args = {
  id: "dynamic-form",
  onSubmit: () => alert("submitted"),
  blocks: [
    {
      title: "Allgemein",
      display: true,
      fields: [
        {
          field_id: "test_1",
          field_value: "Test 1",
          field_label: "Test Input",
          field_type: "input-text-component",
          field_readonly: true,
          field_maxlength: 10,
        },
        {
          field_id: "test_1_1",
          field_value: 123,
          field_label: "Test Currency Input",
          field_type: "input-number-component",
          field_readonly: false,
          field_maxlength: 10,
          field_options: { suffix: "€" },
        },
        {
          field_id: "test_2",
          field_value: "Lorem Ipsum dolor sit amet 10 rows",
          field_label: "Test Textarea",
          field_type: "text-area-component",
          field_options: { rows: "10" },
        },
        {
          field_id: "Antragseingang",
          field_value: "01.01.2022",
          field_label: "Antragseingang",
          field_type: "date-component"
        },
        {
          field_id: "test_2",
          field_value: "Projektträger bearbeiten",
          field_label: "Projektträger bearbeiten",
          field_type: "subform-component",
          field_custom_action: (e) => {
            console.log(e);
          },
        },
        {
          field_id: "test_2_1",
          field_value: "Test ABC 1",
          field_label: "Test Input 2_1",
          field_type: "input-text-component",
        },
        {
          field_id: "test_2_2",
          field_value: "Lorem Ipsum dolor sit amet",
          field_label: "Test Textarea",
          field_type: "text-area-component",
        },
        {
          field_id: "test_2_3",
          field_value: "Test 2_3",
          field_label: "Test Input 2_3",
          field_type: "input-text-component",
        },
        {
          field_id: "test_2_4",
          field_value: "Test 2_4",
          field_label: "Test Checkbox 2_4",
          field_type: "input-checkbox-component",
        },
      ],
    },

    {
      title: "KoFi",
      display: true,
      fields: [
        {
          field_id: "_kosten",
          field_label: "Kosten",
          field_placeholder: "Kosten",
          field_type: "table-component",
          table_headers: [
            "Kostenart",
            "Förderfähige Summe",
            "Nicht förderfähige Summe",
          ],
          table_show_columns_sums: true,
          table_columns_sums: [
            "Förderfähige Summe",
            "Nicht förderfähige Summe",
          ],
          field_value: [
            [
              {
                field_id: "kosten-1-kostenart",
                field_label: "Kostenart",
                field_placeholder: "Kostenart",
                field_type: "dropdown-component",
                field_value: "Pers",
                field_dropdown_options: [
                  { id: -1, href: "#", value: "- Select an option -" },
                  { id: "Pers", href: "#", value: "Personal" },
                  { id: "Fremd", href: "#", value: "Fremd" },
                ],
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
                field_dropdown_options: [
                  {
                    id: "PauschBetrag",
                    href: "#",
                    value: "Pauschalbetrag",
                  },
                  { id: "Honorar", href: "#", value: "Honorarkosten" },
                  { id: "PauschSatz", href: "#", value: "Pauschalsatz" },
                ],
                field_readonly: false,
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
                field_dropdown_options: [
                  {
                    id: "PauschBetrag",
                    href: "#",
                    value: "Pauschalbetrag",
                  },
                  { id: "Honorar", href: "#", value: "Honorarkosten" },
                  { id: "PauschSatz", href: "#", value: "Pauschalsatz" },
                ],
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
                field_dropdown_options: [
                  {
                    id: "PauschBetrag",
                    href: "#",
                    value: "Pauschalbetrag",
                  },
                  { id: "Honorar", href: "#", value: "Honorarkosten" },
                  { id: "PauschSatz", href: "#", value: "Pauschalsatz" },
                ],
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
          ],
        },
        {
          field_id: "_finanzierung",
          field_label: "Finanzierung",
          field_placeholder: "Finanzierung",
          field_type: "table-component",
          table_headers: [
            "Finanzierungart",
            "Förderfähige Summe",
            "Nicht förderfähige Summe",
          ],
          table_show_columns_sums: true,
          table_columns_sums: [
            "Förderfähige Summe",
            "Nicht förderfähige Summe",
          ],
          field_value: [
            [
              {
                field_id: "finanzierung-1-finanzierungsart",
                field_label: "Finanzierungsart",
                field_placeholder: "Finanzierungsart",
                field_type: "dropdown-component",
                field_value: "Fremd",
                field_dropdown_options: [
                  { id: -1, href: "#", value: "- Select an option -" },
                  { id: 0, href: "#", value: "Personal" },
                  { id: 1, href: "#", value: "Fremd" },
                ],
                field_readonly: false,
                field_custom_action: false,
              },
              {
                field_id: "finanzierung-1-foerderfaehig",
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
                field_id: "finanzierung-1-nichtfoerderfaehig",
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
                field_id: "finanzierung-2-finanzierungsart",
                field_label: "Finanzierungsart",
                field_placeholder: "Finanzierungsart",
                field_type: "dropdown-component",
                field_value: "Foerder",
                field_dropdown_options: [],
                field_readonly: true,
                field_custom_action: false,
              },
              {
                field_id: "finanzierung-2-foerderfaehig",
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
                field_id: "finanzierung-2-nichtfoerderfaehig",
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
                field_id: "finanzierung-0:vermittelt-finanzierungsart",
                field_label: "Finanzierungsart",
                field_placeholder: "Finanzierungsart",
                field_type: "dropdown-component",
                field_value: "Vermittelt",
                field_dropdown_options: [],
                field_readonly: true,
                field_custom_action: false,
              },
              {
                field_id: "finanzierung-0:vermittelt-foerderfaehig",
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
                field_id: "finanzierung-0:vermittelt-nichtfoerderfaehig",
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
                field_id: "finanzierung-0:eigen-finanzierungsart",
                field_label: "Finanzierungsart",
                field_placeholder: "Finanzierungsart",
                field_type: "dropdown-component",
                field_value: "Eigen",
                field_dropdown_options: [],
                field_readonly: true,
                field_custom_action: false,
              },
              {
                field_id: "finanzierung-0:eigen-foerderfaehig",
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
                field_id: "finanzierung-0:eigen-nichtfoerderfaehig",
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
          ],
          field_dropdown_options: [],
          field_readonly: false,
          field_custom_action: false,
        },
      ],
    },

    {
      title: "Historie",
      display: true,
      fields: [
        {
          field_id: "_historie",
          field_label: "Historie",
          field_placeholder: "Historie",
          field_type: "table-component",
          table_headers: ["Datum", "Bearbeiter", "Auftrag", ""],
          field_value: [
            [
              {
                field_id: "25.01.2022 11:43",
                field_label: "25.01.2022 11:43",
                field_type: "label-template",
                readonly: "true",
              },
              {
                field_id: "TODO-Username",
                field_label: "TODO-Username",
                field_type: "label-template",
                readonly: "true",
              },
              {
                field_id: " / Foerderfaehig: '10,0000' => '100'",
                field_label: " / Foerderfaehig: '10,0000' => '100'",
                field_type: "label-template",
                readonly: "true",
              },
            ],
            [
              {
                field_id: "25.01.2022 10:45",
                field_label: "25.01.2022 10:45",
                field_type: "label-template",
                readonly: "true",
              },
              {
                field_id: "TODO-Username",
                field_label: "TODO-Username",
                field_type: "label-template",
                readonly: "true",
              },
              {
                field_id: " / Foerderfaehig: '0,0000' => '90'",
                field_label: " / Foerderfaehig: '0,0000' => '90'",
                field_type: "label-template",
                readonly: "true",
              },
            ],
          ],
        },
      ],
    },
  ],
};
