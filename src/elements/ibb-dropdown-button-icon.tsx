import React from "react";
import tw from "tailwind-styled-components";

export interface IDropdownButtonIconProps {
  color?: string;
}

export const IbbDropdownButtonIcon = (props: IDropdownButtonIconProps) => {
  return (
    <TwSvg>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      />
    </TwSvg>
  );
};

const TwSvg = tw.svg`-mr-1 ml-2 h-5 w-5 pt-1 float-right`;
