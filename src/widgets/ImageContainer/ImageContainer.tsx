import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './ImageContainer.module.scss'

interface ImageContainerProps {
    className?: string
    imageSrc: string
    imageAlt:string
}

export const ImageContainer = (props: ImageContainerProps) => {
    const {
        className,
        imageAlt,
        imageSrc
    } = props
    return (
        <div className={classNames(cls.projectsRowImgCont, {}, [className])}>
            <img
                src={imageSrc}
                alt={imageAlt}
                className={cls.projectsRowImg}
                loading="lazy"
            />
        </div>
    );
};