import { highlightText } from "../../format";
import { cn } from "../../utils";
import SearchInput from "../SearchInput";
import { IDropdownProps } from "./type";

export default function Dropdown(props: IDropdownProps) {
    const { isFocus, withSearch, search, filteredOptions, onChangeSearch, onSelect, optionRender, onClear } = props
    return (
        <div
            className={cn("shadow-md mt-1 border absolute w-full transition-all opacity-0 pointer-events-none", {
                "opacity-100 pointer-events-auto": isFocus
            })}>
            {/* input search */}
            {withSearch &&
                <SearchInput
                    value={search}
                    onChange={onChangeSearch}
                    onClear={onClear} />}
            <div>
                {filteredOptions?.map((option, key) =>
                    <div
                        key={key}
                        className='flex p-2 gap-2 items-center hover:bg-slate-200 cursor-pointer'
                        onClick={() => onSelect(option)}>
                        {optionRender ?
                            optionRender(option) :
                            <p className='text-sm'>
                                {highlightText(option.label?.toString(), search as string)}
                            </p>}
                    </div>)}
            </div>
        </div>
    )
}