import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "src/app/providers/ThemeProvider";
import IconMoon from "src/shared/assets/icons/IconMoon.tsx";
import IconSun from "src/shared/assets/icons/IconSun.tsx";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme()

    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        <div className={classNames(cls.container, {}, [cls.buttonSpace, className])}>
            <label className={cls.toggle} htmlFor={cls.switch}>
                <input id={cls.switch}
                    className={cls.input} type={'checkbox'}
                    onChange={changeTheme
                    }
                    checked={theme === Theme.LIGHT}/>

                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */}
                <div className={classNames(cls.icon, {}, [cls.iconMoon])}>
                    <IconMoon/>
                </div>

                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */}
                <div className={classNames(cls.icon, {}, [cls.iconSun])}>
                    <IconSun/>
                </div>
            </label>
        </div>
    )
}
