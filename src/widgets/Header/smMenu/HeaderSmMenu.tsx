import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './HeaderSmMenu.module.scss'
import {useNavbarClose} from "src/app/providers/NavBarProvider/lib/useNavbarClose.tsx";
import {Theme, useTheme} from "src/app/providers/ThemeProvider";

interface HeaderSmMenuProps {
    className?: string
}

export const HeaderSmMenu = ({className}: HeaderSmMenuProps) => {
    const {theme} = useTheme()
    const {isClose} = useNavbarClose()

    return (
        <div className={classNames(cls.header__smMenu, {[cls.header__smMenu__active]: !isClose, [cls.dark]: (theme===Theme.DARK)}, [className])}>
            <div className={cls.header__smMenuContent}>
                <ul className={cls.header__smMenuLinks}>
                    <li className={cls.header__smMenuLink}>
                        <a href="./">Home</a>
                    </li>
                    <li className={cls.header__smMenuLink}>
                        <a href="./#about">About</a>
                    </li>
                    <li className={cls.header__smMenuLink}>
                        <a href="./#projects">Projects</a>
                    </li>
                    <li className={cls.header__smMenuLink}>
                        <a href="./#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};