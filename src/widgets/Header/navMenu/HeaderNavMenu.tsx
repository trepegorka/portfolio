import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './HeaderNavMenu.module.scss'
import { HashLink } from 'react-router-hash-link';
import {RoutePath} from "src/app/providers/router/config/routeConfig.tsx";

interface HeaderNavMenuProps {
    className?: string
}

export const HeaderNavMenu = ({className}: HeaderNavMenuProps) => {
    return (
        <ul className={classNames(cls.header__links, {}, [className])}>
            <li className={cls.header__linkWrapper}>
                <HashLink to={RoutePath.main.concat('#home')} className={cls.header__link}>
                    Home
                </HashLink>
            </li>
            <li className={cls.header__linkWrapper}>
                <HashLink to={RoutePath.main.concat('#about')} className={cls.header__link}>
                    About
                </HashLink>
            </li>
            <li className={cls.header__linkWrapper}>
                <HashLink to={RoutePath.main.concat('#projects')} className={cls.header__link}>
                    Projects
                </HashLink>
            </li>
            <li className={cls.header__linkWrapper}>
                <HashLink to={RoutePath.main.concat('#contact')}className={cls.header__link}>
                    Contact
                </HashLink>
            </li>
        </ul>
    );
};