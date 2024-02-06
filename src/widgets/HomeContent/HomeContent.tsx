import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './HomeContent.module.scss'
import {Button, ThemeButton} from "src/shared/ui/Button/Button.tsx";

interface HomeContentProps {
    className?: string
    title: string
    text: string
    buttonText: string
    linkTo: string
}

export const HomeContent = (props: HomeContentProps) => {
    const {
        className,
        title,
        text,
        buttonText,
        linkTo
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
                <a href={linkTo}>
                    <Button theme={ThemeButton.BIG}>{buttonText}</Button>
                </a>
            </div>
        </div>
    );
};