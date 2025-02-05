export interface IOption {
  value: string | number;
  label: string;
}

export interface ISelectProps {
  id: string;
  options: IOption[];
  withSearch?: boolean;
  multiple?: boolean;
  label?: string;
  outlined?: boolean;
  onChange?: (values: IOption[]) => void;
  zIndex?: number;
  optionRender?: (props: IOption) => React.ReactNode;
  portal?: boolean;
  className?: string;
}
