import React, { useRef, useState } from "react";

import { storiesOf } from "@storybook/react";
import { action, withActions } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withInfo } from "@storybook/addon-info";

import { IbbTreeMenu } from "..";
import {
  defaultChildren,
  ItemComponent,
} from "../elements/ibb-tree-menu/ibb-tree-menu-items";

const closedIconImg = require("./../assets/closedIcon.png");
const openedIconImg = require("./../assets/openedIcon.png");

// Icon example
const iconStyle = {
  verticalAlign: "text-bottom",
};
const openedIcon = <img src={openedIconImg} alt="-" style={iconStyle}></img>;
const closedIcon = <img src={closedIconImg} alt="+" style={iconStyle}></img>;

storiesOf("Components/TreeMenu", module)
  .addDecorator(withInfo)
  .add("default usage", () => (
    <IbbTreeMenu
      data={sampleTreeMenuData}
      onClickItem={action(`on click node`)}
      showToggleIcon={true}
    />
  ))
  .add("without search", () => (
    <IbbTreeMenu
      data={sampleTreeMenuData}
      onClickItem={action(`on click node`)}
      hasSearch={false}
    />
  ))
  .add("has initial states", () => (
    <IbbTreeMenu
      data={sampleTreeMenuData}
      onClickItem={action(`on click node`)}
      initialOpenNodes={[
        "reptile",
        "reptile/squamata",
        "reptile/squamata/lizard",
      ]}
      initialActiveKey="reptile/squamata"
    />
  ))
  .add("control IbbTreeMenu only from its parent", () => {
    class TreeMenuWrapper extends React.Component {
      state = { openNodes: [], activeKey: "" };
      render() {
        return (
          <>
            <div
              style={{ padding: "12px", background: "white", color: "black" }}
            >
              <button
                style={{ margin: "4px" }}
                onClick={() =>
                  this.setState({
                    openNodes: ["reptile"],
                    activeKey: "reptile",
                  })
                }
              >
                Open Reptile
              </button>
              <button
                style={{ margin: "4px" }}
                onClick={() =>
                  this.setState({ openNodes: ["mammal"], activeKey: "mammal" })
                }
              >
                Open Mammal
              </button>
              <button
                style={{ margin: "4px" }}
                onClick={() =>
                  this.setState({
                    openNodes: ["mammal", "mammal/canidae"],
                    activeKey: "mammal/canidae/dog",
                  })
                }
              >
                Highlight Dog
              </button>
            </div>
            <IbbTreeMenu
              data={sampleTreeMenuData}
              activeKey={this.state.activeKey}
              onClickItem={action(`on click node`)}
              openNodes={this.state.openNodes}
            />
          </>
        );
      }
    }
    return <TreeMenuWrapper />;
  })
  .add("OnClick Action", () => (
    <IbbTreeMenu
      data={sampleTreeMenuData}
      onClickItem={action(`on click node`)}
      locale={({ label }) => {
        console.log("label: " + label);
        console.log(translations[label]);
        return translations[label];
      }}
    />
  ))
  .add("Reset OpenNodes", () => {
    return (
      <IbbTreeMenu
        data={sampleTreeMenuData}
        debounceTime={125}
        onClickItem={action(`on click node`)}
      >
        {({ search, items, resetOpenNodes }) => (
          <>
            <button
              onClick={() => {
                resetOpenNodes(["reptile"]);
              }}
            >
              Reset
            </button>
            {defaultChildren({ search, items })}
          </>
        )}
      </IbbTreeMenu>
    );
  })
  .add("Opened/Closed Icon", () => (
    <IbbTreeMenu
      data={sampleTreeMenuData}
      onClickItem={action(`on click node`)}
    >
      {({ items }) => (
        <ul className="tree-item-group">
          {items.map(({ key, ...props }) => (
            <ItemComponent
              key={key}
              {...props}
              openedIcon={openedIcon}
              closedIcon={closedIcon}
            />
          ))}
        </ul>
      )}
    </IbbTreeMenu>
  ));

const sampleFunction = (name: string) => {
  console.log(name);
};

export const sampleTreeMenuData = [
  {
    key: "mammal",
    label: "Mammal",
    onClickFunction: function () {
      sampleFunction("Mammal");
    },
    url: "https://www.google.com/search?q=mammal",
    nodes: [
      {
        key: "canidae",
        label: "Canidae",
        onClickFunction: function () {
          sampleFunction("Canidae");
        },
        url: "https://www.google.com/search?q=canidae",
        nodes: [
          {
            key: "dog",
            label: "Dog",
            url: "https://www.google.com/search?q=dog",
            nodes: [
              {
                key: "chihuahua",
                label: "Chihuahua",
                active: true,
                url: "",
                nodes: [],
              },
            ],
          },
          {
            key: "fox",
            label: "Fox",
            url: "https://www.google.com/search?q=fox",
            nodes: [],
          },
          {
            key: "wolf",
            label: "Wolf",
            url: "https://www.google.com/search?q=wolf",
            nodes: [],
          },
        ],
      },
    ],
  },
  {
    key: "reptile",
    label: "Reptile",
    active: true,
    url: "https://www.google.com/search?q=reptile",
    nodes: [
      {
        key: "squamata",
        active: true,
        label: "Squamata",
        url: "https://www.google.com/search?q=squamata",
        onClickFunction: function () {
          sampleFunction("clicked Squamata");
        },
        nodes: [
          {
            key: "lizard",
            label: "Lizard",
            url: "https://www.google.com/search?q=lizard",
            onClickFunction: function () {
              sampleFunction("clicked Lizard");
            },
          },
          {
            key: "snake",
            label: "Snake",
            url: "https://www.google.com/search?q=snake",
            onClickFunction: function () {
              sampleFunction("clicked Snake");
            },
          },
          {
            key: "gekko",
            label: "Gekko",
            url: "https://www.google.com/search?q=gekko",
            onClickFunction: function () {
              sampleFunction("clicked Gekko");
            },
          },
        ],
      },
    ],
  },
];

const translations = {
  Mammal: "Mamífero",
  Canidae: "Canidae",
  Dog: "Perro",
  Fox: "Zorro",
  Wolf: "Lobo",
  Reptile: "Reptil",
  Squamata: "Squamata",
  Lizard: "Lagartija",
  Snake: "Serpiente",
  Gekko: "Gekko",
};
