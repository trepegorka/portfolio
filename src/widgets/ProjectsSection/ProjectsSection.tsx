import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './ProjectsSection.module.scss';
import {SectionTitle} from "src/shared/ui/SectionTitile/SectionTitle.tsx";
import {ProjectRow} from "src/widgets/ProjectsSection/ProjectRow/ProjectRow.tsx";

interface ProjectsSectionProps {
    className?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({className}: ProjectsSectionProps) => {
    return (
        <section id="projects" className={classNames(cls.ProjectsSection, {}, [className, cls.secPad])}>
            <div className={cls.mainContainer}>

                <SectionTitle title={'Projects'}
                              subtitle={'Here you will find some of the personal and clients ' +
                                  'projects that I created with each project containing its own case study'}
                />

                <div className={cls.projectsContent}>
                    <ProjectRow
                        imageSrc={'https://i.ibb.co/nC6BNN1/Screenshot-2024-12-02-195112.png'}
                        imageAlt={'Paycrown p2p'}
                        title={'Paycrown P2P - payment provider'}
                        text={'P2P payment provider developed in team using React.js, Typescript and Node.js. The application includes working with payment systems, user accounts, administration, supporting, merchant systems and other useful features.'}
                        linkTo={'/project5'}
                    />

                    <ProjectRow
                        imageSrc={'https://i.ibb.co/V25s3SL/IMG-5179.png'}
                        imageAlt={'Software 69gems'}
                        title={'Web3 App'}
                        text={'Web3 Application developed using React.js, Typescript and Node.js with Express and Socket.io. The application includes working with Web3 Solana network and have game-like features.'}
                        linkTo={'/'}
                        disabled={true}
                        mobile={true}
                    />

                    <ProjectRow
                        imageSrc={'https://i.ibb.co/Njr58S4/patient-portal-1.png'}
                        imageAlt={'Nodanorm Portal'}
                        title={'Healthcare Nodanorm Portal'}
                        text={'This was a portal for clinic clients, doctors, and management with a wide range of functionalities, including doctor appointments, staff hiring, and other useful features.'}
                        linkTo={'/project4'}
                    />

                    <ProjectRow
                        imageSrc={'https://i.ibb.co/XS3Bw3Q/image.png'}
                        imageAlt={'Software Screenshot phone'}
                        title={'Workout App'}
                        text={'Workout Application developed using UI Frameworks such as Chakra UI. The application includes working with logical operations, login form and backend requests.'}
                        linkTo={'/'}
                        disabled={true}
                        mobile={true}
                    />

                    <ProjectRow
                        imageSrc={'https://i.ibb.co/42QLMs5/image.png'}
                        imageAlt={'Software Screenshot 1'}
                        title={'FrontEnd in Production'}
                        text={'Enterprise application developed using powerful development solutions. This application includes development from scratch, test coverage, writing storybook for other developers, optimization, configurations and much more. '}
                        linkTo={'/project1'}
                    />

                    <ProjectRow
                        imageSrc={'https://i.ibb.co/vVQy0bj/image.png'}
                        imageAlt={'Software Screenshot 2'}
                        title={'Portfolio DEMO'}
                        text={'A multi-page React-based website presenting projects and skills. This site is a simple yet unique portfolio to which I added theme switching, language switching and other features.'}
                        linkTo={'/project2'}
                    />

                    <ProjectRow
                        imageSrc={'https://i.ibb.co/7rTWwNZ/Screenshot-2024-02-12-220856.png'}
                        imageAlt={'Software Screenshot 3'}
                        title={'BitScouts'}
                        text={'Landing page for processing school. Webflow was used to speed up the design and creating processes. UI/UX-focused development'}
                        linkTo={'/project3'}
                    />
                </div>
            </div>
        </section>
    );
};
