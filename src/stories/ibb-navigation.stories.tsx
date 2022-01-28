import React from "react";
import { action, withActions } from '@storybook/addon-actions';
import { IbbNavbar, INavbarProps } from "../ibb-navbar";
import { IbbLeftSidebar, ISidebarProps } from "../ibb-left-sidebar";
import { ButtonType, IbbButton } from "..";
import { TableIcon, HomeIcon, LogoutIcon, PresentationChartBarIcon, UserIcon } from '@heroicons/react/outline';
import { UserCircleIcon } from "@heroicons/react/outline";
import { IbbTreeMenu } from "..";
import { sampleTreeMenuData } from "./ibb-treemenu.stories";

const logo = require("./../assets/logo-ibb.png")

export default {
  title: "Components/Navigation",
  component: IbbLeftSidebar,
};

export const MainNavbar = (args: INavbarProps) => 
    <div className="flex-1">
      <IbbNavbar {...args} />
    </div>

export const LeftSidebar = (args: ISidebarProps) => 
    <IbbLeftSidebar {...args} />

MainNavbar.args = {
  logo: <img src={logo} className="h-full" />,
  title: "ESF Hub",
  items: [
    <><UserCircleIcon className="h-6 w-6 inline-block" />   Max Mustermann</>,
    <IbbButton buttontype={ButtonType.Secondary} children="Neu laden" onClick={() => console.log("Neu laden")} />,
    <IbbButton buttontype={ButtonType.Primary} children="Speichern" onClick={() => console.log("Speichern")} />
  ],
  burgerMenu:  [
    { text: 'Dashboard', link: '#', icon: "" },
    { text: 'Team', link: '#', icon: "" },
    { text: 'Projekte', link: '#', icon: "" },
    { text: 'Abmelden', link: '#', icon: "" }
  ],
};

LeftSidebar.args = {
  logo: <img src={logo} />,
  treeMenu: <IbbTreeMenu data={sampleTreeMenuData} onClickItem={action(`on click node`)} hasSearch={false} />,
  primaryMenu:  {
    title: "Menü",
    items: [{
      text: "Home",
      url: "#",
      icon: <HomeIcon className="h-6 w-6" aria-hidden="true" />
  },
  {
      text: "Vorgangsliste",
      url: "#",
      icon: <TableIcon className="h-6 w-6" aria-hidden="true" />
  }]
  },
  secondaryMenu:  {
    title: "",
    items: [{
      text: "Projekte",
      url: "#",
      icon: <PresentationChartBarIcon className="h-6 w-6" aria-hidden="true" />
  },
  {
      text: "Abmelden",
      url: "#",
      icon: <LogoutIcon className="h-6 w-6" aria-hidden="true" />
  }]
  },
  bottomText: <strong>version 1.0.0</strong>
};
