import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './ProjectOverview.module.scss'

interface ProjectOverviewProps {
    className?: string
}

export const ProjectOverview = ({className}: ProjectOverviewProps) => {
    return (
        <div className={classNames(cls.ProjectOverview, {}, [className])}>
            <h3 className={cls.title}>Project Overview</h3>
        </div>
    );
};