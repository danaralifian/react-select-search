import { ChevronDown, CircleX, SearchIcon } from 'lucide-react'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { IOption, ISelectProps } from './type'
import { cn } from '../../utils'
import useOutsideClick from '../../hooks/useOutsideClick'
import Chip from '../Chip'
import { highlightText } from '../../format'

const MAX_LIST = 6

export const Select = (props: ISelectProps) => {
    const { options, withSearch, multiple, outlined, label, id, optionRender, zIndex, portal, className, onChange } = props
    const ref = useRef<HTMLDivElement | null>(null)
    const [search, setSearch] = useState('')
    const [isFocus, setIsFocus] = React.useState<boolean>(false)
    const [selected, setSelected] = useState<IOption[]>([])

    useOutsideClick(ref, () => {
        if (isFocus) setIsFocus(false)
    })

    const onRemove = (value: string | number) => {
        setSelected(selected.filter((item) => item.value !== value))
        setIsFocus(false)
    }

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const onSelect = (option: IOption) => {
        if (multiple) {
            if (!selected.some((item) => item.value === option.value)) setSelected([...selected, option]);
        } else setSelected([option])
        setIsFocus(false)
    }

    const handleChange = useCallback(() => {
        onChange?.(selected);
    }, [selected, onChange]);

    useEffect(() => {
        handleChange();
    }, [handleChange]);


    const filteredOptions = useMemo(() => {
        if (!search) return options.slice(0, MAX_LIST);
        const filtered = options.filter((option) =>
            option.label.toString()?.toLowerCase().includes(search.toLowerCase())
        );

        return filtered.slice(0, MAX_LIST);
    }, [search, options])

    const dropdown = (
        <div
            className={cn("shadow-md mt-1 border absolute w-full transition-all opacity-0 pointer-events-none", {
                "opacity-100 pointer-events-auto": isFocus
            })}>
            {/* input search */}
            {withSearch &&
                <div className='flex p-2 gap-2 items-center border-b'>
                    <SearchIcon className='text-gray-700' size={16} />
                    <input
                        onClick={(e) => e.stopPropagation()}
                        value={search}
                        className='w-full outline-none bg-transparent'
                        onChange={onChangeSearch} />
                    {!!search && <CircleX className='text-gray-700 cursor-pointer' size={16} onClick={() => setSearch('')} />}
                </div>}
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

    return (
        <div className={cn('flex gap-4 w-full items-center relative', `z-${zIndex || 0}`, className)}>
            <p>{label}</p>
            <div className='relative w-full' ref={ref} id={id}>
                <div
                    className={cn('min-h-6 w-full rounded-[4px] flex justify-between items-center p-1 cursor-pointer bg-gray-200', {
                        'border bg-transparent': outlined
                    })}
                    onClick={() => {
                        setIsFocus(true)
                        setSearch('')
                    }}>
                    <div className='w-full flex gap-1 min-h-7'>
                        {selected.map((option, key) => {
                            return (
                                <Chip
                                    key={key}
                                    label={option.label}
                                    onClick={(e) => {
                                        // prevent event from bubbling up
                                        e.stopPropagation();
                                        onRemove(option.value)
                                    }} />
                            )
                        })}
                    </div>
                    <ChevronDown className='text-gray-700' size={16} />
                </div>
                {portal ? createPortal(dropdown, document.body) : dropdown}
            </div>
        </div>
    )
}