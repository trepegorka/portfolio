import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './Logo.module.scss'
import {RoutePath} from "src/app/providers/router/config/routeConfig.tsx";
import { HashLink } from 'react-router-hash-link';


interface LogoProps {
    className?: string
}

export const Logo = ({className}: LogoProps) => {
    return (
        <HashLink to={RoutePath.main.concat('#home')}>
            <div className={classNames(cls.header__logoContainer, {}, [className])}>
                <div className={cls.header__logoImgCont}>
                    <img
                        src="https://i.ibb.co/nL4MRqs/yahorpatapka.png"
                        alt="Egor Potapko Logo Image"
                        className={cls.header__logoImg}
                    />
                </div>
                <span className={cls.header__logoSub}>Trepegorka</span>
            </div>
        </HashLink>
    );
};