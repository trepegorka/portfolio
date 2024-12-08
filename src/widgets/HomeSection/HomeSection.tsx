import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './HomeSection.module.scss'
import {HomeContent} from "src/widgets/HomeContent/HomeContent.tsx";
import {Socials} from "src/widgets/Socials/Socials.tsx";
import {Theme, useTheme} from "src/app/providers/ThemeProvider";
import {TopSectionCustomBg} from "src/widgets/TopSectionCustomBg/TopSectionCustomBg.tsx";
import {RoutePath} from "src/app/providers/router/config/routeConfig.tsx";

interface HomeSectionProps {
    className?: string
}

export const HomeSection = ({className}: HomeSectionProps) => {
    const {theme} = useTheme()
    let themeMode;
    theme === Theme.DARK? themeMode = 'dark' : themeMode = 'light'
    return (
        <div id={'home'}>
            <TopSectionCustomBg className={className}>
                <HomeContent title={'Hi! I\'m Egor Potapko'}
                    text={'A Full-Stack focused Web Developer, building the Websites and ' +
                                 'Web Applications that leads to the success of the overall product!'}
                    buttonText={'About Me'}
                    linkTo={RoutePath.main.concat('#about')}/>


                <div className={classNames(cls.homeHero__socials, {[cls[themeMode]]: true})}>
                    <Socials invertedColor={true}/>
                </div>

                <div className={cls.home_hero__mouse_scroll_cont}>
                    <div className={cls.mouse}></div>
                </div>
            </TopSectionCustomBg>
        </div>
    );
};