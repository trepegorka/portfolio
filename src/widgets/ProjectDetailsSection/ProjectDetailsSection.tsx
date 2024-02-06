import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './ProjectDetailsSection.module.scss'
import React from "react";

interface ProjectDetailsSectionProps {
    className?: string
    children: React.ReactNode
}

export const ProjectDetailsSection = ({className, children}: ProjectDetailsSectionProps) => {
    return (
        <div className={classNames(cls.ProjectDetailsSection, {}, [className])}>
            <div className={cls.content}>
                {children}
            </div>
        </div>
    );
};