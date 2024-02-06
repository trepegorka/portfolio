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
    theme: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...otherProps
    } = props

    return (
        <button className={classNames(cls.Button, {[cls[theme]]: true}, [className])}>
            {children}
        </button>
    );
};