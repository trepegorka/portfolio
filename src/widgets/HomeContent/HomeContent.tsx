import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './HomeContent.module.scss'
import {Button, ThemeButton} from "src/shared/ui/Button/Button.tsx";
import { HashLink } from 'react-router-hash-link';

interface HomeContentProps {
    className?: string
    title: string
    text: string
    buttonText: string
    linkTo: string
    target?: '_self' | '_blank'
}

export const HomeContent = (props: HomeContentProps) => {
    const {
        className,
        title,
        text,
        buttonText,
        linkTo,
        target = '_self'
    } = props
    return (
        <div className={classNames(cls.homeHero__content, {}, [className])}>
            <h1 className={cls.headingPrimary}>{title}</h1>
            <div className={cls.homeHero__info}>
                <p className={cls.textPrimary}>
                    {text}
                </p>
            </div>

            <div className={cls.homeHero__cta}>
                <HashLink to={linkTo} target={target}>
                    <Button theme={ThemeButton.BIG} disabled={linkTo===''}>{buttonText}</Button>
                </HashLink>
            </div>
        </div>
    );
};