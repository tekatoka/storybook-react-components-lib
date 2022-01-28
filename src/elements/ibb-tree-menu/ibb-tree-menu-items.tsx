import React, { ReactNode } from 'react';
import tw from "tailwind-styled-components";
import { classNames } from '../../helpers/functions';

import { Item } from './walk';

const DEFAULT_PADDING = 0.75;
const ICON_SIZE = 2;
const LEVEL_SPACE = 0.75;
const ToggleIcon = ({
  on,
  openedIcon,
  closedIcon,
}: {
  on: boolean;
  openedIcon: ReactNode;
  closedIcon: ReactNode;
}) => (
  <div role="img" aria-label="Toggle" className="rstm-toggle-icon-symbol">
    {on ? openedIcon : closedIcon}
  </div>
);

export interface TreeMenuItem extends Item {
  //active?: boolean;
  onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
  toggleNode?: () => void;
  showToggleIcon?:boolean;
}

export type TreeMenuChildren = (props: {
  search?: (term: string) => void;
  searchTerm?: string;
  items: TreeMenuItem[];
  resetOpenNodes?: (openNodes?: string[]) => void;
}) => JSX.Element;

export const ItemComponent: React.FunctionComponent<TreeMenuItem> = ({
  hasNodes = false,
  isOpen = false,
  level = 0,
  onClickFunction,
  toggleNode,
  showToggleIcon,
  active = false,
  focused = false,
  openedIcon = '-',
  closedIcon = '+',
  label = 'unknown',
  style = {},
}) => (
  
  <TwListItem
    className={classNames(
      `level${level}`,
      `${active ? "tree-item--active" : ""}`,
      `${focused ? "item--focused": ""}`,
      `${ onClickFunction ? "cursor-pointer" : "cursor-default"}`
    )}
    style={{
      paddingLeft: level > 0 && `${DEFAULT_PADDING +
        //ICON_SIZE * (hasNodes ? 0 : 1) +
        1 * level * LEVEL_SPACE}rem`,
      ...style,
    }}
    role="button"
    aria-pressed={active}
    onClick={e => {
      hasNodes && toggleNode && toggleNode();
      onClickFunction && onClickFunction();
      e.stopPropagation();
    }}
  >
    {hasNodes && showToggleIcon && (
      <TwToggleIcon
        className="toggle-icon"
        onClick={e => {
          hasNodes && toggleNode && toggleNode();
          e.stopPropagation();
        }}
      >
        <ToggleIcon on={isOpen} openedIcon={openedIcon} closedIcon={closedIcon} />
      </TwToggleIcon>
    )}
    {label}
  </TwListItem>
);

const generateItemsStyle = (item: any): any => {
  let styles = "";
  if(item.className.indexOf("level0") > -1) {
    styles = "bg-ibb hover:bg-ibb-dark";
  } else if(item.className.indexOf("level1") > -1) {
    styles = "bg-ibb-light hover:bg-ibb text-white hover:text-white"
  } else if(item.className.indexOf("level2") > -1) {
    styles = "bg-gray-200 hover:bg-gray-300 text-gray-800 hover:text-gray-900 border-gray-300"
  } else {
    styles = "bg-gray-50 hover:bg-gray-200 text-gray-800 hover:text-gray-900 border-gray-200"
  }

  return styles;
}

export const defaultChildren: TreeMenuChildren = ({ search, items }) => {
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    search && search(value);
  };
  return (
    <>
      {search && (
        <input
          className="rstm-search"
          aria-label="Type and search"
          type="search"
          placeholder="Suchen"
          onChange={onSearch}
        />
      )}
      <TwList>
        {items.map((props, i) => (
          <ItemComponent key={i} {...props}></ItemComponent>
        ))}
      </TwList>
    </>
  );
};



const TwList = tw.ul`list-none p-0 w-full text-left`;
const TwListItem = tw.li`relative p-2 text-white border-b border-gray-200 ${(p) => generateItemsStyle(p)}`;
const TwToggleIcon = tw.div`inline-block pr-2`;
