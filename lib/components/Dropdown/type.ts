import { IOption } from "../Select/type";

export interface IDropdownProps {
  isFocus: boolean;
  withSearch: boolean;
  search: string;
  filteredOptions: IOption[];
  onChangeSearch: React.ChangeEventHandler<HTMLInputElement>;
  onSelect: (option: IOption) => void;
  optionRender?: (props: IOption) => React.ReactNode;
  onClear?: () => void;
}
