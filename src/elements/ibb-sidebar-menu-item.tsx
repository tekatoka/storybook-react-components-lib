import React from "react";
import tw from "tailwind-styled-components";
import { NavItem } from "../types/nav-item";

export interface ISidebarMenuItemProps {
  item: NavItem
}

export const IbbSidebarMenuItem = (item: NavItem) => {
  return (
    <TwItemContainer href={item.link}
    >
    {item.icon && <TwItemIcon>{item.icon}</TwItemIcon>}
        {item.text}
    
    </TwItemContainer>
  );
};

const TwItemContainer = tw.a`flex items-center px-6 py-4 text-gray-500 hover:text-orange-600 group`;
const TwItemIcon = tw.span`h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500`;
