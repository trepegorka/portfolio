import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './../page.module.scss'
import {CaseStudyPage} from "src/widgets/CaseStudyPage/CaseStudyPage.tsx";

interface PageProps {
    className?: string
}

export const Project5Page = ({className}: PageProps) => {
    const mainTitle = 'Paycrowd P2P Payment System'
    const shortDescription = 'This page showcases the Paycrowd P2P Payment System, detailing the project overview, tools used, and providing live links to the official product.'
    const projectImageSrc = 'https://i.ibb.co/nC6BNN1/Screenshot-2024-12-02-195112.png'
    const skills = ['React 18', 'Typescript', 'Redux', 'Node.js',
        'Express.js', 'PostgreSQL', 'Prisma ORM', 'Socket.io', 'Jest/RTL', 'Storybook', 'Feature-Sliced Design', '...']
    return (
        <div className={classNames(cls.ProjectPage, {}, [className])}>

            <CaseStudyPage
                mainTitle={mainTitle}
                shortDescription={shortDescription}
                projectImageSrc={projectImageSrc}
                skills={skills}
            >
                <p><strong>Professional Experience</strong></p>
                <article>
                    <p><strong>Full-stack Developer</strong> with a focus on front-end development, working in a team of
                        8 specialists to build a P2P payment system web application.</p>
                    <p>Specialized in front-end development using <b>React.js</b>, <b>TypeScript</b>, and <b>Redux</b>,
                        ensuring a smooth user experience and high performance.</p>
                    <p>Contributed to data parsing and analysis system development, utilizing <b>Python libraries</b> to
                        process large-scale datasets efficiently.</p>
                    <p>Developed back-end functionality with <b>Node.js</b>, <b>Prisma ORM</b>, and <b>Express</b> to
                        handle CRUD operations securely and effectively.</p>
                    <p>Created an automated image processing system, enabling accurate data extraction from images.</p>
                    <p>Collaborated with the team to implement object-oriented principles, focusing
                        on <b>abstractions</b> and <b>interfaces</b>, adhering to <b>SOLID</b>, <b>DRY</b>, <b>KISS</b>,
                        and <b>YAGNI</b> principles for clean, maintainable, and efficient code.</p>
                    <p>Integrated the <b>Telegram API</b> to enable seamless data exchange through messages, enhancing
                        user interaction and system communication.</p>
                    <p>Structured tasks for team members, ensuring clear responsibility distribution, and actively
                        participated in identifying and mitigating vulnerabilities to enhance product security.</p>
                    <p>Optimized real-time data handling by migrating REST requests to <b>WebSockets</b>, leveraging
                        room-based architecture to improve performance.</p>
                </article>
            </CaseStudyPage>
        </div>
    );
};