import React from "react";
import tw from "tailwind-styled-components";

export interface IDropdownMenuItemProps {
  value: string;
  href: string;
  id?: string;
}

export const IbbDropdownMenuItem = (props: IDropdownMenuItemProps) => {
  return (
    <TwTableData href={props.href} id={props.id}>{props.value}</TwTableData>
  );
};

const TwTableData = tw.a`text-gray-900 hover:bg-gray-100 block px-4 py-2`;
