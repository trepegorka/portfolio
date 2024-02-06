import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './TopSectionCustomBg.module.scss'
import React, {FC} from "react";

interface TopSectionCustomBgProps {
    className?: string
    children: React.ReactNode
}

export const TopSectionCustomBg: FC<TopSectionCustomBgProps> = (props) => {
    const {
        className,
        children
    } = props
    return (
        <div className={classNames(cls.TopSectionCustomBg, {}, [className])}>
            {children}
        </div>
    );
};