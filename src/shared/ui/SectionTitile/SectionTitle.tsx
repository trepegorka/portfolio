import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './SectionTitle.module.scss'

interface SectionTitleProps {
    className?: string
    title: string
    subtitle: React.ReactNode
}

export const SectionTitle = ({className, title, subtitle}: SectionTitleProps) => {
    return (
        <h2 className={classNames(cls.SectionTitle, {}, [className])}>
            <span className={cls.TitleMain}>{title}</span>
            <span className={cls.Subtitle}>{subtitle}</span>
        </h2>
    );
};