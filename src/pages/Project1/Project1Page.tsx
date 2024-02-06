import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './Project1Page.module.scss'
import {TopSectionCustomBg} from "src/widgets/TopSectionCustomBg/TopSectionCustomBg.tsx";
import {HomeContent} from "src/widgets/HomeContent/HomeContent.tsx";

interface Project1PageProps {
    className?: string
}

export const Project1Page = ({className}: Project1PageProps) => {
    return (
        <div className={classNames(cls.Project1Page, {}, [className])}>
            <TopSectionCustomBg>
                <HomeContent title={'FrontEnd in Production'}
                    text={'This page contains the case study of FrontEnd in Production Web Application which includes the Project Overview, Tools Used and Live Links to the official product.'}
                    buttonText={'Live Link'}
                    linkTo={''}/>
            </TopSectionCustomBg>
        </div>
    );
};