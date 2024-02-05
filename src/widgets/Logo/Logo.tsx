import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './Logo.module.scss'

interface LogoProps {
    className?: string
}

export const Logo = ({className}: LogoProps) => {
    return (
        <div className={classNames(cls.header__logoContainer, {}, [className])}>
            <div className={cls.header__logoImgCont}>
                <img
                    src="src/shared/assets/images/yahorpatapka.png"
                    alt="Egor Potapko Logo Image"
                    className={cls.header__logoImg}
                />
            </div>
            <span className={cls.header__logoSub}>Trepegorka</span>
        </div>
    );
};