import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './Project2Page.module.scss'
import {CaseStudyPage} from "src/widgets/CaseStudyPage/CaseStudyPage.tsx";
import {RoutePath} from "src/app/providers/router/config/routeConfig.tsx";

interface Project2PageProps {
    className?: string
}

export const Project2Page = ({className}: Project2PageProps) => {
    const mainTitle = 'Portfolio'
    const shortDescription = 'This page contains the case study of Portfolio WebSite which includes the Project Overview, Tools Used and Live Links to the official product.'
    const liveLink = RoutePath.main.concat('#home')
    const gitLink = 'https://github.com/trepegorka/portfolio'
    const projectImageSrc = 'https://i.ibb.co/vVQy0bj/image.png'
    const skills = ['Javascript 2020+', 'React 18', 'Typescript', 'HTML5', 'SCSS', 'Vite',
        'Eslint', 'i18n', 'Npm', 'Feature-Sliced Design','CD' , 'UI/UX']
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
                    The Portfolio project is a comprehensive showcase of my frontend development skills,
                    designed to be both simplified and fully functional. This website is built using
                    technologies such as <strong>JavaScript</strong> including the latest features, <strong>React 18,
                        Typescript, Vite, and SCSS modules</strong>. Used tools like Eslint and
                    Npm to ensure code quality and manage dependencies.
                </p>
                <p>
                    The architecture of this website is carefully crafted to be easily changeable, allowing
                    for quick bug fixes, feature additions, and decomposition. It includes features such
                    as HashLinks and Router Dom for smooth navigation and user-friendly experience. However,
                    it's important to note that this website is still in DEMO version and may require
                    optimization, further decomposition, and CSS style cleanup for optimal performance and
                    visual appeal.
                </p>

            </CaseStudyPage>
        </div>
    );
};