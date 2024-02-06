import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './AboutContentMain.module.scss'
import {Button, ThemeButton} from "src/shared/ui/Button/Button.tsx";
import {RoutePath} from "src/app/providers/router/config/routeConfig.tsx";
import { HashLink } from 'react-router-hash-link';

interface AboutContentMainProps {
    className?: string
}

export const AboutContentMain = ({className}: AboutContentMainProps) => {
    return (
        <div className={classNames(cls.AboutContentMain, {}, [className])}>
            <h3 className={cls.aboutContentTitle}>Get to know me!</h3>
            <div className={cls.aboutContentDetails}>
                <p className={cls.aboutContentDetailsPara}>
                    I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and
                    Web Applications that leads to the success of the overall product. Check out some of
                    my work in the <strong>Projects</strong> section.
                </p>
                <p className={cls.aboutContentDetailsPara}>
                    I develop solutions for <strong>Business Applications</strong>, improve performance,
                    and strive for simplicity in tasks of varying difficulty. Feel free to Connect or
                    Follow me on my <a className={cls.link} rel="noreferrer" href="https://linkedin.com/in/ptpch" target="_blank">Linkedin</a>
                </p>
                <p className={cls.aboutContentDetailsPara}>
                    I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow.
                    If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.
                </p>
            </div>

            <HashLink to={RoutePath.main.concat("#contact")}>
                <Button theme={ThemeButton.MEDIUM}>Contact</Button>
            </HashLink>
        </div>
            
    );
};