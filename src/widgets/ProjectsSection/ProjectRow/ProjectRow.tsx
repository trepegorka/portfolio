import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './ProjectRow.module.scss'
import {Button, ThemeButton} from "src/shared/ui/Button/Button.tsx";

interface ProjectRowProps {
    className?: string
    imageSrc?: string
    imageAlt?: string
    title: string
    text: string
    linkTo: string
    target?: '_self' | '_blank'
}

export const ProjectRow = (props: ProjectRowProps) => {
    const {
        className,
        imageSrc,
        imageAlt,
        title,
        text,
        linkTo,
        target,
    } = props

    return (
        <div className={classNames(cls.ProjectRow, {}, [className])}>
            <div className={cls.projectsRowImgCont}>
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className={cls.projectsRowImg}
                    loading="lazy"
                />
            </div>
            <div className={cls.projectsRowContent}>
                <h3 className={cls.projectsRowContentTitle}>{title}</h3>
                <p className={cls.projectsRowContentDesc}>
                    {text}
                </p>
                <Button theme={ThemeButton.MEDIUM} linkTo={linkTo} target={target}>Case Study</Button>
            </div>
        </div>
    );
};