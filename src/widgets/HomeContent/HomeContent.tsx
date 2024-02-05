import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './HomeContent.module.scss'
import {Button, ThemeButton} from "src/shared/ui/Button/Button.tsx";

interface HomeContentProps {
    className?: string
}

export const HomeContent = ({className}: HomeContentProps) => {
    return (
        <div className={classNames(cls.homeHero__content, {}, [className])}>
            <h1 className={cls.headingPrimary}>Hey, I'm Egor Potapko</h1>
            <div className={cls.homeHero__info}>
                <p className={cls.textPrimary}>
                    A Frontend focused Web Developer building the Frontend of Websites
                    and Web Applications that leads to the success of the overall
                    product
                </p>
            </div>

            <div className={cls.homeHero__cta}>
                <Button linkTo={'./#about'} theme={ThemeButton.BIG}>About Me</Button>
            </div>
        </div>
    );
};