import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import { forwardRef } from 'react';

const ForwardImage = forwardRef<HTMLImageElement, ImageProps>(
    function ImageWrapper(props, ref) {
        return <Image {...props} ref={ref} />;
    }
);

export const MotionImage = motion(ForwardImage);
