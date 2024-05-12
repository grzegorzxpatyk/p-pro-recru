'use client';

import { HTMLAttributes, MouseEvent, useState } from 'react';
import { motion } from 'framer-motion';

export default function Button({
    children,
    ...props
}: HTMLAttributes<HTMLButtonElement>) {
    const [point, setPoint] = useState({ top: -108, left: -13 });

    function handleMouseMove(event: MouseEvent<HTMLButtonElement>) {
        const buttonRect = event.currentTarget.getBoundingClientRect();

        const top = event.clientY - buttonRect.top - 144; // pointer position in viewport - top edge y coordinate of the button - half of the height of the inner span
        const left = event.clientX - buttonRect.left - 144; // radius of the animated span element should be greater than button width to assure that the edge of span is not visible
        console.log(top, left);

        setPoint({ top, left });
    }

    return (
        <button
            className='relative z-20 h-10 w-fit select-none overflow-hidden whitespace-nowrap rounded-xl bg-gradient-to-l from-[#F4B17E] to-[#B06642] px-6 py-3 text-sm font-semibold leading-none text-white shadow-[0_4px_8px_0] shadow-[#00000008] outline-2 outline-offset-4 outline-orange-400 transition-all hover:shadow-none focus-visible:outline-2'
            onMouseMove={handleMouseMove}
            {...props}
        >
            <span className='relative z-30'>{children}</span>
            <motion.span
                className='absolute z-20 block h-72 w-72 rounded-full bg-gradient-radial from-[#F4B17E] to-[#B06642] content-["_"]'
                style={{ ...point }}
            ></motion.span>
        </button>
    );
}
