import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './Project2Page.module.scss'
import {HomeContent} from "src/widgets/HomeContent/HomeContent.tsx";
import {TopSectionCustomBg} from "src/widgets/TopSectionCustomBg/TopSectionCustomBg.tsx";
import {RoutePath} from "src/app/providers/router/config/routeConfig.tsx";

interface Project2PageProps {
    className?: string
}

export const Project2Page = ({className}: Project2PageProps) => {
    return (
        <div className={classNames(cls.Project2Page, {}, [className])}>
            <TopSectionCustomBg>
                <HomeContent title={'Portfolio'}
                    text={'This page contains the case study of Portfolio Web site which includes the Project Overview, Tools Used and Live Links to the official product.'}
                    buttonText={'Live Link'}
                    linkTo={RoutePath.main}/>
            </TopSectionCustomBg>
        </div>
    );
};