import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './SocialIcon.module.scss'
import {FC} from "react";

interface SocialIconProps {
    className?: string
    href: string,
    svgSrc: string,
    alt: string,
    disabled?: boolean,
}

export const SocialIcon: FC<SocialIconProps> = (props) => {
    const {
        className,
        href,
        svgSrc,
        alt,
        disabled
    } = props

    const windowLocation = window.location.href;
    return (
        <div className={classNames(cls.SocialIcon, { [cls.disabled]: disabled || false}, [className])}>
            <a href={disabled ? windowLocation : href } className={classNames(cls.homeHero__socialIconLink, { [cls.disabled]: disabled || false}, [])}
                rel="noreferrer"
                target="_blank">
                <img
                    src={svgSrc}
                    alt={alt}
                    className={cls.homeHero__socialIcon}/>
            </a>
        </div>
    );
};