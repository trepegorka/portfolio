import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    BIG='big',
    MEDIUM='medium',
    SMALL='small',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    linkTo?: string
    theme: ThemeButton
    target?: '_blank' | '_self'
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        linkTo,
        target= '_self',
        ...otherProps
    } = props

    return (
        <button>
            <a className={classNames(cls.Button, {[cls[theme]]: true}, [className])}
                href={linkTo}
                target={target}>
                {children}
            </a>
        </button>
    );
};