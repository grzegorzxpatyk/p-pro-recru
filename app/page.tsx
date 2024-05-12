'use client';

import DunePicture from '@/public/dune.jpg';
import Button from '@/components/Button/Button';
import { MotionImage } from '@/components/MotionImage/MotionImage';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
        layoutEffect: false,
    });

    const objectPosition = useTransform(
        scrollYProgress,
        [0, 1],
        ['50% 10%', '50% 0%']
    );
    const y = useTransform(scrollYProgress, [0, 1], ['0', '-25%']);

    return (
        <main
            ref={ref}
            className='flex h-full max-h-fit w-full min-w-[768px] flex-col text-primary'
        >
            <section className='relative h-[90dvh] w-full p-20'>
                <motion.h1
                    className='absolute bottom-[59px] left-20 z-10 select-none text-[150px] font-semibold leading-none lg:bottom-[50px] lg:text-[224px]'
                    style={{ y }}
                >
                    Panowie
                </motion.h1>
                <div className='grid h-full w-full grid-cols-12'>
                    <div className='hidden lg:col-span-1 lg:block'></div>
                    <div className='col-span-5 flex w-full flex-col items-start justify-center lg:col-span-4'>
                        <div className='mb-12 mr-2 flex flex-col gap-6'>
                            <h2 className='whitespace-break-spaces text-[19px] font-medium leading-7'>
                                We are Panowie Pro. <br />A software studio for
                                creatives.
                            </h2>
                            <Button>Work with us</Button>
                        </div>
                    </div>
                    <MotionImage
                        src={DunePicture}
                        placeholder='blur'
                        alt='Picture of a sand dune with blue cloudless sky beyond.'
                        className='relative col-span-7 h-[calc(90dvh-160px)] w-full object-cover'
                        style={{
                            objectPosition,
                        }}
                    />
                </div>
            </section>
            <section className='h-screen w-full p-20 py-10'>
                <div className='h-full w-full rounded-lg bg-placeholder'></div>
            </section>
        </main>
    );
}
