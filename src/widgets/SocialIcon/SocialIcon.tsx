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
    return (
        <div className={classNames(cls.SocialIcon, {[cls.disabled]:disabled}, [className])}>
            <a href={href} className={cls.homeHero__socialIconLink}
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