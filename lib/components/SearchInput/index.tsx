import { CircleX, SearchIcon } from 'lucide-react'
import { ISearchInputProps } from './type'

export default function SearchInput(props: ISearchInputProps) {
    const { value, onChange, onClear } = props
    return (
        <div className='flex p-2 gap-2 items-center border-b'>
            <SearchIcon className='text-gray-700' size={16} />
            <input
                onClick={(e) => e.stopPropagation()}
                value={value}
                className='w-full outline-none bg-transparent'
                onChange={onChange} />
            {!!value && <CircleX className='text-gray-700 cursor-pointer' size={16} onClick={onClear} />}
        </div>
    )
}