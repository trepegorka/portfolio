import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './Project1Page.module.scss'
import {CaseStudyPage} from "src/widgets/CaseStudyPage/CaseStudyPage.tsx";

interface Project1PageProps {
    className?: string
}

export const Project1Page = ({className}: Project1PageProps) => {
    const mainTitle = 'FrontEnd in Production'
    const shortDescription = 'This page contains the case study of FrontEnd in Production Web Application which includes the Project Overview, Tools Used and Live Links to the official product.'
    const liveLink = ''
    const gitLink = 'https://github.com/trepegorka/advanced-frontend'
    const projectImageSrc = 'src/shared/assets/images/prodFront.png'
    const skills = ['Javascript 2020+', 'React 18', 'Typescript', 'Webpack', 'Redux',
        'Eslint', 'Stylelint', 'Jest', 'Storybook', 'Babel', 'loki', 'i18n', 'CI/CD', 'Husky',
        'Git', 'Npm', 'Feature-Sliced Design', 'UI frameworks', '...']
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
                    The development of this application is currently in progress. Within this project,
                    I'm studying fundamental enterprise development patterns to lay a solid
                    foundation. I'm using the latest improvements in JavaScript to create dynamic
                    user interfaces with React 18. Additionally,
                    I'm integrating Typescript for type safety.
                </p>
                <p>
                    To make the project easier to handle and speed up the development,
                    I'm using modern tools like Webpack, Redux, and Eslint. These tools help me
                    write better code, keep it organized, and make sure it runs smoothly.
                </p>
                <p>
                    Ensuring the application works well is super important. That's why I've
                    covered about <strong>90%</strong> of the code with tests. Each piece
                    of the app has its own test, making it easier to find and fix any issues.
                    Adding a language and theme management system to make the app more
                    user-friendly and accessible.
                </p>
                <p>
                    As the project progresses, I plan to include additional features and
                    technologies. These include UI frameworks, e2e testing with Cypress, and
                    various plugins to enhance productivity and efficiency.
                </p>
                <p>
                    Through this journey, I rely on best practices and tools such as
                    Storybook, Babel, Husky, CI/CD, Git etc to streamline development workflows
                    and ensure code consistency. With a focus on Feature-Sliced Design, I
                    aim to create modular, maintainable code that scales effective.
                </p>
            </CaseStudyPage>
        </div>
    );
};