import { ButtonType } from "..";
export type NavItem = {
    text:string;
    link?:string;
    icon?:any;
    buttonType?: ButtonType;
    onClick?: () => void;
}