import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './Project3Page.module.scss'
import {HomeContent} from "src/widgets/HomeContent/HomeContent.tsx";
import {TopSectionCustomBg} from "src/widgets/TopSectionCustomBg/TopSectionCustomBg.tsx";

interface Project3PageProps {
    className?: string
}

export const Project3Page = ({className}: Project3PageProps) => {
    return (
        <div className={classNames(cls.Project3Page, {}, [className])}>
            <TopSectionCustomBg>
                <HomeContent title={'Portfolio'}
                    text={'This page contains the case study of BitScouts Landing Page which includes the Project Overview, Tools Used and Live Links to the official product.'}
                    buttonText={'Live Link'}
                    linkTo={'https://bitscouts.ru'}/>
            </TopSectionCustomBg>
        </div>
    );
};