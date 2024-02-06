import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './SkillContainer.module.scss'
import React from "react";

interface SkillContainerProps {
    className?: string
    children: React.ReactNode
}

export const SkillContainer = ({className, children}: SkillContainerProps) => {
    return (
        <div className={classNames(cls.SkillContainer, {}, [className])}>
            {children}
        </div>
    );
};