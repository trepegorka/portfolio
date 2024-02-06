import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './MainPage.module.scss'
import {HomeSection} from "src/widgets/HomeSection/HomeSection.tsx";
import {AboutSection} from "src/widgets/AboutSection/AboutSection.tsx";
import {ProjectsSection} from "src/widgets/ProjectsSection/ProjectsSection.tsx";
import {ContactSection} from "src/widgets/ContactSection/ContactSection.tsx";


interface MainPageProps {
    className?: string
}

export const MainPage = ({className}: MainPageProps) => {

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <HomeSection/>
            <AboutSection/>
            <ProjectsSection/>
            <ContactSection/>
        </div>
    );
};