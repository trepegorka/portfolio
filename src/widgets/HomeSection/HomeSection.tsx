import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './HomeSection.module.scss'
import {HomeContent} from "src/widgets/HomeContent/HomeContent.tsx";
import {Socials} from "src/widgets/Socials/Socials.tsx";
import {Theme, useTheme} from "src/app/providers/ThemeProvider";

interface HomeSectionProps {
    className?: string
}

export const HomeSection = ({className}: HomeSectionProps) => {
    const {theme} = useTheme()
    let themeMode;
    theme === Theme.DARK? themeMode = 'dark' : themeMode = 'light'
    return (
        <section className={classNames(cls.home_hero, {}, [className])}>
            <HomeContent/>
            <div className={classNames(cls.homeHero__socials, {[cls[themeMode]]: true}, [className])}>
                <Socials invertedColor={true}/>
            </div>
            <div className={cls.home_hero__mouse_scroll_cont}>
                <div className={cls.mouse}></div>
            </div>
        </section>
    );
};