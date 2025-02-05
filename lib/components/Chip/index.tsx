import { CircleX } from 'lucide-react';
import { IChip } from './type.ts';

export default function Chip({ label, onClick }: IChip) {

    return (
        <div className='rounded-full px-2 py-0.5 bg-gray-300 w-fit flex gap-1 items-center'>
            <span>{label}</span>
            <CircleX
                className='text-gray-700' size={16}
                onClick={onClick} />
        </div>
    )
}