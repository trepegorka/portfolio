import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './ProjectRow.module.scss'
import {Button, ThemeButton} from "src/shared/ui/Button/Button.tsx";
import AppLink from "src/shared/ui/AppLink/AppLink.tsx";
import {ImageContainer} from "src/widgets/ImageContainer/ImageContainer.tsx";

interface ProjectRowProps {
    className?: string
    imageSrc: string
    imageAlt: string
    title: string
    text: string
    linkTo: string
    target?: '_self' | '_blank'
    disabled? : boolean
}

export const ProjectRow = (props: ProjectRowProps) => {
    const {
        className,
        imageSrc,
        imageAlt,
        title,
        text,
        linkTo,
        disabled
    } = props

    return (
        <div className={classNames(cls.ProjectRow, {}, [className])}>
            <ImageContainer imageSrc={imageSrc} imageAlt={imageAlt}/>
            <div className={cls.projectsRowContent}>
                <h3 className={cls.projectsRowContentTitle}>{title}</h3>
                <p className={cls.projectsRowContentDesc}>
                    {text}
                </p>

                <AppLink to={linkTo}>
                    <Button disabled={disabled} theme={ThemeButton.MEDIUM}>Case Study</Button>
                </AppLink>
            </div>
        </div>
    );
};