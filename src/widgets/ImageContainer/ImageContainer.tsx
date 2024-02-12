import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './ImageContainer.module.scss'

interface ImageContainerProps {
    className?: string
    imageSrc: string
    imageAlt: string
    mobile?: boolean
}

export const ImageContainer = (props: ImageContainerProps) => {
    const {
        className,
        imageAlt,
        imageSrc,
        mobile
    } = props
    /* eslint-disable */
    return (
        <div className={classNames(cls.projectsRowImgCont, {}, [className])}>
            {mobile
                ? (
                    <div className={cls.mobilePhone}>
                        <div className={cls.brove}><span className={cls.speaker}></span></div>
                        <div style={{backgroundImage: `url(${imageSrc})`}} className={cls.screen}>

                        </div>
                    </div>
                )
                : (
                    <div className={cls.laptop}>
                        <div style={{backgroundImage: `url(${imageSrc})`}} className={cls.mainScreen}>
                            <div className={cls.camera}></div>
                            <div className={cls.Lscreen}>

                            </div>
                        </div>
                        <div className={cls.keyboard}></div>
                    </div>
                )
            }
        </div>
    );
};