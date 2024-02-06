import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './Project3Page.module.scss'
import {CaseStudyPage} from "src/widgets/CaseStudyPage/CaseStudyPage.tsx";

interface Project3PageProps {
    className?: string
}

export const Project3Page = ({className}: Project3PageProps) => {
    const mainTitle = 'BitScouts'
    const shortDescription = 'This page contains the case study of FrontEnd in Production Web Application which includes the Project Overview, Tools Used and Live Links to the official product.'
    const liveLink = ''
    const gitLink = ''
    const projectImageSrc = 'src/shared/assets/images/schoolProc.png'
    const skills = ['Webflow', 'Javascript', 'HTML5', 'CSS3']
    return (
        <div className={classNames(cls.ProjectPage, {}, [className])}>

            <CaseStudyPage
                mainTitle={mainTitle}
                shortDescription={shortDescription}
                liveLink={liveLink}
                projectImageSrc={projectImageSrc}
                skills={skills}
                gitLink={gitLink}
            >
                <p>
                </p>
            </CaseStudyPage>
        </div>
    );
};