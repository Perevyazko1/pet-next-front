import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

const isClient = typeof window === 'object';

export const useScreenWidth = (size?: number) => {
    const [screenSize, setScreenSize] = useState(isClient ? window.innerWidth : 0);

    useEffect(() => {
        if (!isClient) return;

        const handleResize = throttle(() => {
            if (size) {
                setScreenSize((prev) => {
                    const newSize = window.innerWidth;
                    if ((prev < size && newSize >= size) || (prev >= size && newSize < size)) {
                        return newSize; // Обновляем только при пересечении 1024px
                    }
                    return prev; // Иначе не меняем состояние
                });
            } else {
                setScreenSize(window.innerWidth);
            }
        }, 1000);

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            handleResize.cancel();
        };
    }, []);

    return screenSize;
};
