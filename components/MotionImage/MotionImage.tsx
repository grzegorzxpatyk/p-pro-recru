import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import { forwardRef } from 'react';

// ts throws type error due to conflict between next/image and motion element types - no error on basic motion.img element
// https://github.com/framer/motion/issues/2303

const ForwardImage = forwardRef<HTMLImageElement, Omit<ImageProps, 'style'>>(
    function ImageWrapper(props, ref) {
        // eslint-disable-next-line jsx-a11y/alt-text
        return <Image {...props} ref={ref} />;
    }
);

export const MotionImage = motion(ForwardImage);
