import tw from "tailwind-styled-components";

export const TwElementContainer = tw.div`flex mb-2`;
export const TwLabel = tw.label`font-medium px-4 py-2 inline-block`;
export const TwLabelNormal = tw.label`font-normal px-0 py-2 inline-block`;
export const TwElementButtonContainer = tw.div`mb-2 mt-4 text-right`;
export const TwElementContainerGrid_1_3 = tw.div`md:w-1/4`;
export const TwElementContainerGrid_2_3 = tw.div`md:w-3/4`;
export const TwInputFieldLabel = tw.label`text-gray-700 inline-flex items-center mt-0 font-bold md:text-right mb-2 pr-4 text-sm`;
export const TwInputField = tw.input`form-control 
w-full bg-white
appearance-none
border border-grey-light hover:border-gray-400
py-2 px-4 text-gray-700
leading-tight
focus:outline-none focus:bg-white
focus:text-gray-900 focus:bg-white
focus:border-gray-400 focus:outline-none`;
export const TwInputFieldWithAddonContainer = tw.div`flex flex-wrap items-stretch w-full relative`;
export const TwInputFieldWithAddon = tw.input`form-control flex-shrink flex-grow flex-auto leading-normal py-2 px-4 w-px flex-1 text-gray-700
leading-tight
border border-grey-light hover:border-gray-400
focus:outline-none focus:bg-white
focus:text-gray-900 focus:bg-white
focus:border-gray-400 focus:outline-none relative`;
export const TwInputFieldAddonContainer = tw.span`flex -mr-px`;
export const TwInputFieldAddon = tw.span`flex items-center leading-normal bg-gray-200 border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm`;
export const TwInputCheckbox = tw.input`form-checkbox h-5 w-5 mr-2 m-0.5 leading-tight`;
export const TwInputCheckboxInlineLabel = tw.label`text-sm`;
export const TwRadioButton = tw.input`form-control mr-2 leading-tight form-radio text-ibb-dark`;
export const TwRadioButtonInlineLabel = tw.span`text-sm inline-flex items-center`;
export const TwSelectField = tw.select`form-control w-full text-left border border-grey-light relative shadow-sm px-4 py-2 bg-white font-medium text-gray-900 hover:bg-gray-100 focus:text-gray-900 focus:bg-white focus:border-gray-400 focus:outline-none`;
export const TwDropdown = tw.button`form-control w-full text-left border border-grey-light relative shadow-sm px-4 py-2 bg-white font-medium text-gray-900 hover:bg-gray-100 focus:text-gray-900 focus:bg-white focus:border-gray-400 focus:outline-none`;
export const TwDropdownMenu = tw.div`mt-2 w-56 shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none absolute z-10`;
export const TwDropdownSection = tw.div`py-1`;
export const TwTextArea = tw.textarea`form-control
        block
        w-full 
        resize
        py-2 px-4
        font-normal
        text-gray-700
        hover:border-gray-400
        bg-white bg-clip-padding
        border border-solid border-grey-light
        transition
        ease-in-out
        m-0
        focus:text-gray-900 focus:bg-white focus:border-gray-400 focus:outline-none`;
