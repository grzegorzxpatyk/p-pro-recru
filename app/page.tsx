'use client';

import DunePicture from '@/public/dune.jpg';
import Button from '@/components/Button/Button';
import { MotionImage } from '@/components/MotionImage/MotionImage';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
        layoutEffect: false,
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ['0', '10%']);
    const headingY = useTransform(scrollYProgress, [0, 1], ['0', '-25%']);

    return (
        <main
            ref={ref}
            className='text-primary flex h-full max-h-fit w-full flex-col'
        >
            <section className='h-[90dvh] w-full p-20'>
                <div className='flex h-full w-full flex-row items-center justify-between'>
                    <div className='mx-8 mb-12 flex w-full flex-col items-center justify-center'>
                        <div className='flex flex-col gap-6'>
                            <h2 className='w-fit min-w-72 whitespace-pre-line text-[19px] font-medium leading-7'>
                                We are Panowie Pro. <br />A software studio for
                                creatives.
                            </h2>
                            <Button>Work with us</Button>
                        </div>
                        <motion.h1
                            className='absolute bottom-[calc(10dvh+50px)] left-20 z-10 select-none text-[224px] font-semibold leading-none'
                            style={{ y: headingY }}
                        >
                            Panowie
                        </motion.h1>
                    </div>
                    <MotionImage
                        src={DunePicture}
                        alt='Picture of a sand dune with blue cloudless sky beyond.'
                        className='relative h-full max-h-screen w-full object-cover object-[50%_25%]'
                        style={{ y: imageY }}
                    />
                </div>
            </section>
            <section className='h-screen w-full p-20 py-10'>
                <div className='bg-placeholder h-full w-full rounded-lg'></div>
            </section>
        </main>
    );
}
