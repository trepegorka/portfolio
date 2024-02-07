import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './HeaderSmMenu.module.scss'
import {useNavbarClose} from "src/app/providers/NavBarProvider/lib/useNavbarClose.tsx";
import {Theme, useTheme} from "src/app/providers/ThemeProvider";
import {HashLink} from "react-router-hash-link";
import {RoutePath} from "src/app/providers/router/config/routeConfig.tsx";

interface HeaderSmMenuProps {
    className?: string
}

export const HeaderSmMenu = ({className}: HeaderSmMenuProps) => {
    const {theme} = useTheme()
    const {isClose,changeClose} = useNavbarClose()

    return (
        <div className={classNames(cls.header__smMenu, {[cls.header__smMenu__active]: !isClose, [cls.dark]: (theme===Theme.DARK)}, [className])}>
            <div className={cls.header__smMenuContent}>
                <ul className={cls.header__smMenuLinks}>
                    <li className={cls.header__smMenuLink}>
                        <HashLink to={RoutePath.main.concat('#home')} onClick={changeClose}>Home</HashLink>
                    </li>
                    <li className={cls.header__smMenuLink}>
                        <HashLink to={RoutePath.main.concat('#about')} onClick={changeClose}>About</HashLink>
                    </li>
                    <li className={cls.header__smMenuLink}>
                        <HashLink to={RoutePath.main.concat('#projects')} onClick={changeClose}>Projects</HashLink>
                    </li>
                    <li className={cls.header__smMenuLink}>
                        <HashLink to={RoutePath.main.concat('#contact')} onClick={changeClose}>Contact</HashLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};