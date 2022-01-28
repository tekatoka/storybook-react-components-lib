export type FormElement = {
  field_id: string;
  field_value?: any;
  field_name?: any;
  field_label?: string;
  field_type?: string;
  field_placeholder?: string;
  field_readonly?: boolean;
  field_dropdown_options?: [];
  field_maxlength?: number;
  field_options: FormElementOptions;
  field_custom_action?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  table_columns_sums?: string[];
  table_show_columns_sums?: boolean;
  table_show_hidden_rows?: boolean;
  table_headers?: string[];
};

export type FormElementOptions = {
  decimalsymbol?: string;
  thousandssymbol?: string;
  suffix?: string;
  precision?: string;
  rows?: number;
};

export type FormElements = {
  fields: FormElement[];
};

export type FormBlock = {
  title: string;
  propertyName: string;
  fields: FormElement[];
  display: boolean;
};
