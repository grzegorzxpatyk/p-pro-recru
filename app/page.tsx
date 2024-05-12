import Image from 'next/image';
import DunePicture from '@/public/dune.jpg';
import Button from '@/components/Button/Button';

export default function Home() {
    return (
        <main className='text-primary flex h-full max-h-fit w-full flex-col'>
            <section className='h-screen w-full p-20'>
                <div className='flex h-full w-full flex-row items-center justify-between'>
                    <div className='mx-8 mb-12 flex w-full flex-col items-center justify-center'>
                        <div className='flex flex-col gap-6'>
                            <h2 className='w-fit min-w-72 whitespace-pre-line text-[19px] font-medium leading-7'>
                                We are Panowie Pro. <br />A software studio for
                                creatives.
                            </h2>
                            <Button>Work with us</Button>
                        </div>
                        <h1 className='absolute bottom-[50px] left-20 z-10 select-none text-[224px] font-semibold leading-none'>
                            Panowie
                        </h1>
                    </div>
                    <Image
                        src={DunePicture}
                        alt='Picture of a sand dune with blue cloudless sky beyond.'
                        className='relative h-full max-h-screen w-full object-cover object-[50%_25%]'
                    />
                </div>
            </section>
            <section className='h-screen w-full p-20'>
                <div className='bg-placeholder h-full w-full rounded-lg'></div>
            </section>
        </main>
    );
}
