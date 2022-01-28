import React, { useEffect, useState } from "react";
import unformat from 'accounting-js/lib/unformat.js';
import { Element } from "./element";
import tw from "tailwind-styled-components";
import { FormBlock, FormElement, FormElements } from "./types/form-elements";
import { unformatNumberValue } from "./helpers/functions";

export const IbbDynamicForm = ({
  blocks,
  id,
  onSubmit,
}: {
  blocks: FormBlock[];
  id: string;
  onSubmit: any;
}) => {
  const [elements, setElements] = useState<FormElements>(null);
  useEffect(() => {
    let formElements = { fields: [] };
    blocks.map((block) => {
      formElements.fields.push(...block.fields);
      const tableElements = formElements.fields.filter(
        (f) => f.field_type === "table-component",
      );
      if (tableElements)
        tableElements.map((e) => {
          e.field_value.forEach((tableValues) => {
            tableValues.map((tv) => {
              formElements.fields.push(tv);
            });
          });
        });
    });
    setElements(formElements);
  }, [, blocks]);

  const handleChangeInput = (id: string, event: any, decimalSeparator?: string, groupSeparator?: string, decimalsLimit?: number) => {
    const newFields = [...elements.fields];
    newFields.forEach((field: any) => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case "checkbox":
          case "input-checkbox-component":
            field["field_value"] = event.target.checked;
            break;
          case "input-numeric-component":
            let value = unformatNumberValue(event.target.value, groupSeparator, decimalSeparator);
            field["field_value"] = value;
            break;
          default:
            field["field_value"] = event.target.value;
        }

        setElements({ ...elements, fields: newFields });
      }
    });
  };

  return (
    <form id={id} onSubmit={onSubmit}>
      {blocks && elements
        ? blocks.map((block: FormBlock, i: number) => (
            <TwFormBlockContainer
              key={i}
              style={{ display: block.display ? "block" : "none" }}
            >
              {block.title && (
                <TwFormBlockTitle>{block.title}</TwFormBlockTitle>
              )}
              <TwFormBlockElements>
                {block.fields &&
                  block.fields.map((field, i) => {
                    const element = elements.fields.find(
                      (e) => e.field_id == field.field_id,
                    );

                    return [
                      <div className="px-4 mb-4" key={i}>
                        <>
                          {element && (
                            <Element
                              key={element.field_id}
                              field={element}
                              handleChangeInput={handleChangeInput}
                            />
                          )}
                        </>
                      </div>,
                    ];
                  })}
              </TwFormBlockElements>
            </TwFormBlockContainer>
          ))
        : null}
    </form>
  );
};

const TwForm = tw.form``;
const TwFormBlockContainer = tw.div`p-4 bg-gray-100 mb-2`;
const TwFormBlockTitle = tw.h3`px-4 mb-4 text-gray-800 uppercase text-bold tracking-widest font-semibold`;
const TwFormBlockElements = tw.div`max-w-6xl m-auto`;
const TwFormBlockElementTitle = tw.h4`mt-4 mb-2 text-gray-800 text-sm uppercase text-bold tracking-widest font-semibold`;
