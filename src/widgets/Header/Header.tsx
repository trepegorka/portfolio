import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './Header.module.scss'
import {HeaderSmMenu} from "src/widgets/Header/smMenu/HeaderSmMenu.tsx";
import {Logo} from "src/widgets/Logo/Logo.tsx";
import {HamburgerMenu} from "src/widgets/HamburgerMenu/HamburgerMenu.tsx";
import {HeaderNavMenu} from "src/widgets/Header/navMenu/HeaderNavMenu.tsx";
import {Theme, useTheme} from "src/app/providers/ThemeProvider";
import {ThemeSwitcher} from "src/widgets/ThemeSwitcher/ThemeSwitcher.tsx";

interface HeaderProps {
    className?: string
}

export const Header = ({className}: HeaderProps) => {
    const {theme, changeTheme} = useTheme()
    let themeMode;
    theme === Theme.DARK? themeMode = 'dark' : themeMode = 'light'
    return (
        <header className={classNames(cls.header, {[cls[themeMode]]: true},[className])}>
            <div className={cls.header__content}>
                <Logo/>
                <div className={cls.header__main}>
                    <HeaderNavMenu/>
                    <ThemeSwitcher/>
                    <HamburgerMenu/>
                </div>
            </div>

            <HeaderSmMenu/>
        </header>
    );
};