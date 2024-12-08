import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './HomeContent.module.scss'
import {Button, ThemeButton} from "src/shared/ui/Button/Button.tsx";
import {HashLink} from 'react-router-hash-link';
import ReactPixel from 'react-facebook-pixel';


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

    const handleButtonClick = (buttonName: string, event: string, link: string) => {
        ReactPixel.track(event, {
            buttonName,
            link: link,
        });
    };

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
                    <Button theme={ThemeButton.BIG} disabled={linkTo === ''}>{buttonText}</Button>
                </HashLink>
            </div>
            <div className={cls.contacts_buttons}>
                <HashLink to={'https://t.me/trepesk'} target={"_blank"}
                          onClick={() => handleButtonClick('MyChannel', 'Contact', 'https://t.me/trepesk')}>
                    <Button theme={ThemeButton.BIG}>My Channel</Button>
                </HashLink>
                <HashLink to={'https://t.me/egor_ptpch'} target={"_blank"}
                          onClick={() => handleButtonClick('MyContact', 'Contact', 'https://t.me/egor_ptpch')}>
                    <Button theme={ThemeButton.BIG}>Contact me</Button>
                </HashLink>
            </div>
        </div>
    );
};