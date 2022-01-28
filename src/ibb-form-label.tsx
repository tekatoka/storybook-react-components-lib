import React, { useMemo } from "react";
import { TwLabelNormal } from "./helpers/twCommonElements";

export interface IIbbFormLabelElementProps {
  field_value?: string;
  field_id: string;
  maxlength?: number;
  readonly?: boolean;
}

export const IbbFormLabelElement = (props: IIbbFormLabelElementProps) => {
  return <TwLabelNormal id={props.field_id}>{props.field_value}</TwLabelNormal>;
};
