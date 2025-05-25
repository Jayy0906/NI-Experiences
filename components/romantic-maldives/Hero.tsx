import React from 'react';

interface ImageProps {
    alt?: string;
    className?: string;
}

const Image: React.FC<ImageProps> = ({ alt = "Image", className }) => {
    const combinedClassName = `object-contain aspect-[2.4] h-[auto] w-full max-w-[1440px] lg:w-full max-w-[1550px] mx-auto overflow-x-hidden ${className || ''}`;
    return (
        <img
            src="/images/hero-2.webp"
            alt={alt}
            className={combinedClassName}
        />
    );
};

export default Image;