import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './../page.module.scss'
import {CaseStudyPage} from "src/widgets/CaseStudyPage/CaseStudyPage.tsx";

interface PageProps {
    className?: string
}

export const Project4Page = ({className}: PageProps) => {
    const mainTitle = 'Healthcare Nodanorm Portal'
    const shortDescription = 'This page showcases the Healthcare Nodanorm Portal, detailing the project overview, tools used, and providing live links to the official product.'
    const projectImageSrc = 'https://i.ibb.co/Njr58S4/patient-portal-1.png'
    const skills = ['React 18', 'Typescript', 'Vite', 'Redux',
        'Eslint', 'Stylelint', 'Jest/RTL', 'Storybook', 'Feature-Sliced Design', 'MUI', '...']
    return (
        <div className={classNames(cls.ProjectPage, {}, [className])}>

            <CaseStudyPage
                mainTitle={mainTitle}
                shortDescription={shortDescription}
                projectImageSrc={projectImageSrc}
                skills={skills}
            >
                <h2>Professional Experience</h2>
                <article className="job">
                    <h3>Front-end Developer</h3>
                    <p><strong>Company:</strong> Andersen</p>
                    <p><strong>Location:</strong> Minsk, Belarus</p>
                    <p><strong>Industry:</strong> IT, System Integration, Internet</p>
                    <ul>
                        <li>Collaborated in a team of 14–18 specialists to deliver high-quality, scalable projects
                            within established deadlines.
                        </li>
                        <li>Developed and maintained dynamic web applications
                            using <strong>React.js</strong>, <strong>Next.js</strong> (App and Page
                            Router), <strong>TypeScript</strong>, <strong>Redux
                                Toolkit</strong>, <strong>Storybook</strong>, and <strong>MUI</strong>.
                        </li>
                        <li>Deployed applications on cloud infrastructure <strong>AWS</strong>, utilizing <strong>Git
                            Flow</strong> strategies to optimize deployment processes and streamline team
                            collaboration.
                        </li>
                        <li>Managed reliable data handling with <strong>PostgreSQL</strong>, ensuring data
                            integrity, performance, and scalability through rigorous testing.
                        </li>
                        <li>Configured <strong>Vite</strong> for an optimized development environment, reducing SVG
                            files by approximately threefold, enhancing performance and maintainability.
                        </li>
                    </ul>
                </article>
            </CaseStudyPage>
        </div>
    );
};