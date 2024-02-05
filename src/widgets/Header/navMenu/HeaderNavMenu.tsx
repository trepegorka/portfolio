import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './HeaderNavMenu.module.scss'
import {useTheme} from "src/app/providers/ThemeProvider";
import {ThemeSwitcher} from "src/widgets/ThemeSwitcher/ThemeSwitcher.tsx";

interface HeaderNavMenuProps {
    className?: string
}

export const HeaderNavMenu = ({className}: HeaderNavMenuProps) => {
    return (
        <ul className={classNames(cls.header__links, {}, [className])}>
            <li className={cls.header__linkWrapper}>
                <a href="./" className={cls.header__link}>
                    Home
                </a>
            </li>
            <li className={cls.header__linkWrapper}>
                <a href="./#about" className={cls.header__link}>
                    About
                </a>
            </li>
            <li className={cls.header__linkWrapper}>
                <a href="./#projects" className={cls.header__link}>
                    Projects
                </a>
            </li>
            <li className={cls.header__linkWrapper}>
                <a href="./#contact" className={cls.header__link}>
                    Contact
                </a>
            </li>
        </ul>
    );
};