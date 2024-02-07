import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    BIG='big',
    MEDIUM='medium',
    SMALL='small',
    OUTLINE_MEDIUM = 'outline_medium'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme: ThemeButton
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        disabled= false,
        ...otherProps
    } = props

    return (
        <button
            disabled={disabled}
            className={classNames(cls.Button,
                {[cls[theme]]: true, [cls.disabled]: disabled},
                [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};