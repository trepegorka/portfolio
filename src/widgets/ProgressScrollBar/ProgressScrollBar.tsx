import React, { useState, useEffect } from 'react';
import './ProgressScrollBar.module.scss'; // Подключаем стили

const ProgressScrollBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const scrollHandler = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;
            setProgress(scrolled);
        };

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <div className="progress-bar-container">
            <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ProgressBar;
