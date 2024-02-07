import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './Project3Page.module.scss'
import {CaseStudyPage} from "src/widgets/CaseStudyPage/CaseStudyPage.tsx";

interface Project3PageProps {
    className?: string
}

export const Project3Page = ({className}: Project3PageProps) => {
    const mainTitle = 'BitScouts'
    const shortDescription = 'This page contains the case study of FrontEnd in Production Web Application which includes the Project Overview, Tools Used and Live Links to the official product.'
    const liveLink = 'https://bitscouts.ru'
    const gitLink = ''
    const projectImageSrc = 'https://i.ibb.co/vhLLpbr/school-Proc.png'
    const skills = ['Webflow', 'Javascript', 'HTML5', 'CSS3', 'Canvas']
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
                    This landing page was created completely according to the customer's requests.
                    UI/UX components were assembled in real time, and the design idea was built
                    into a full-fledged page.
                </p>
                <p>
                    In this project I wanted to explore the subject of simple page
                    builders like Webflow and Tilda, as well as more complex ones
                    like Wordpress, and how working with them is sometimes more time
                    and money efficient.
                </p>
            </CaseStudyPage>
        </div>
    );
};