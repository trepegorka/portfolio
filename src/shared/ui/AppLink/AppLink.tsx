import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './AppLink.module.scss'
import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

interface AppLinkProps extends LinkProps {
    className?: string
}

const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, children, ...otherProps } = props
    return (
        <Link
            to={to}
            className={classNames(
                cls.AppLink,
                {},
                [className])
            }
            {...otherProps}
        >
            {children}
        </Link>
    )
}

export default AppLink
