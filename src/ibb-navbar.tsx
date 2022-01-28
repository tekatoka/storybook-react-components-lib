import React, { Fragment } from "react";
import tw from "tailwind-styled-components";
import { NavItem } from "./types/nav-item";
import { IbbButton, ButtonType } from ".";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "./helpers/functions";

export interface INavbarProps {
  logo?: any;
  title?: string;
  items?: any[];
  burgerMenu?: NavItem[];
}

export const IbbNavbar = (props: INavbarProps) => {
  return (
    <Disclosure as="nav" className="bg-gray-50 border-b border-gray-200">
      <TwContainer>
        {props.logo && <TwLogoContainer>{props.logo}</TwLogoContainer>}
        {props.title && (
          <>
            <TwDivider />
            <TwTitle>{props.title}</TwTitle>
          </>
        )}

        <TwMenuItemsContainer>
          {props.items && (
            <TwItemContainer>
              {props.items.map((item, i) => {
                return <TwItem key={i}>{item}</TwItem>;
              })}
            </TwItemContainer>
          )}

          {props.burgerMenu && (
            <Menu>
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items>
                      {props.burgerMenu.map((item, i) => {
                        return (
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                key={i}
                                href={item.link}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-gray-700",
                                )}
                              >
                                {item.text}
                              </a>
                            )}
                          </Menu.Item>
                        );
                      })}
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          )}
        </TwMenuItemsContainer>
      </TwContainer>
    </Disclosure>
  );
};

const TwLogoContainer = tw.div`h-full py-1 px-6 w-64`;
const TwTitle = tw.h3`px-4 text-gray-800 uppercase text-bold tracking-widest font-semibold h-5/6 flex items-center`;
const TwDivider = tw.div`border-solid border-l border-gray-200 h-10`;
const TwContainer = tw.div`relative flex items-center h-16`;
const TwMenuItemsContainer = tw.div`absolute inset-y-0 right-0 flex items-center pr-2 sm:ml-6 sm:pr-0"`;
const TwItemContainer = tw.span`flex space-x-2`;
const TwItem = tw.span`inline-flex items-center font-medium leading-5 text-primary-100`;
const TwMenu = tw.div`ml-3 relative"`;
const TwSecondaryMenu = tw.div`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`;
const TwSecondaryMenuButton = tw.button`bg-gray-100 flex rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`;
