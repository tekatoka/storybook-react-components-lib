import React, { Fragment } from "react";
import tw from "tailwind-styled-components";
import { NavItem } from "./types/nav-item";
import { IbbSidebarMenuItem } from "./elements/ibb-sidebar-menu-item";

export interface ISidebarProps {
  logo?: any;
  treeMenu?: any;
  primaryMenu?: {
    title: string;
    items: NavItem[];
  };
  secondaryMenu?: {
    title: string;
    items: NavItem[];
  };
  bottomText?: Element;
}

export const IbbLeftSidebar = (props: ISidebarProps) => {
  return (
    <TwContainer>
      {props.logo && <TwLogoContainer>{props.logo}</TwLogoContainer>}

      {props.treeMenu && (
        <TwMenuItemsContainer>{props.treeMenu}</TwMenuItemsContainer>
      )}
      {props.primaryMenu && (
        <>
          <TwDivider />
          <TwMenuItemsContainer>
            <TwMenuTitle>{props.primaryMenu.title}</TwMenuTitle>

            {props.primaryMenu.items.map((item, i) => {
              return <IbbSidebarMenuItem {...item} key={i} />;
            })}
          </TwMenuItemsContainer>
        </>
      )}

      {props.secondaryMenu && (
        <>
          <TwDivider />
          <TwMenuItemsContainer>
            <TwMenuTitle>{props.secondaryMenu.title}</TwMenuTitle>

            {props.secondaryMenu.items.map((item, i) => {
              return <IbbSidebarMenuItem {...item} key={i} />;
            })}
          </TwMenuItemsContainer>
        </>
      )}
      {props.bottomText && (
        <>
          <TwBottom>{props.bottomText}</TwBottom>
        </>
      )}
    </TwContainer>
  );
};

const TwContainer = tw.div`w-64 py-6 bg-gray-50 border-r border-gray-200 z-10 relative`;
const TwMenuItemsContainer = tw.div`mb-10`;
const TwMenuTitle = tw.h3`mx-4 mb-2 text-xs text-gray-400 uppercase tracking-widest`;
const TwLogoContainer = tw.div`p-4`;
const TwDivider = tw.hr`m-2`;
const TwBottom = tw.div`px-2 absolute bottom-2 w-full text-xs text-gray-400`;
