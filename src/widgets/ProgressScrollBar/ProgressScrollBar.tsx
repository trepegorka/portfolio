import React, { useState, useEffect } from 'react';
import cls from './ProgressScrollBar.module.scss'

function ProgressScrollBar() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        function updateScrollProgress() {
            const winScroll = document.documentElement.scrollTop;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);
        }

        window.addEventListener('scroll', updateScrollProgress);

        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    return (
        <div className={cls.progress} style={{ width: `${scrollProgress}%` }}></div>
    );
}

export default ProgressScrollBar;

