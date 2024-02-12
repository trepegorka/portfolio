import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './ProjectsSection.module.scss';
import {SectionTitle} from "src/shared/ui/SectionTitile/SectionTitle.tsx";
import {ProjectRow} from "src/widgets/ProjectsSection/ProjectRow/ProjectRow.tsx";

interface ProjectsSectionProps {
    className?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className }: ProjectsSectionProps) => {
    return (
        <section id="projects" className={classNames(cls.ProjectsSection, {}, [className, cls.secPad])}>
            <div className={cls.mainContainer}>
                    
                <SectionTitle title={'Projects'} 
                    subtitle={'Here you will find some of the personal and clients ' +
                        'projects that I created with each project containing its own case study' }
                />

                <div className={cls.projectsContent}>
                    <ProjectRow
                        imageSrc={'https://i.ibb.co/18vVMRr/Screenshot-2024-02-12-202155.png'}
                        imageAlt={'Software Screenshot phone'}
                        title={'Workout App\nIn Progress...'}
                        text={'Workout Application developed using UI Frameworks such as Chakra UI. The application includes working with logical operations, login form and backend requests.'}
                        linkTo={'/'}
                        disabled={true}
                        mobile={true}
                    />

                    <ProjectRow
                        imageSrc={'https://i.ibb.co/YRKppQJ/prod-Front.png'}
                        imageAlt={'Software Screenshot 1'}
                        title={'FrontEnd in Production\nIn Progress...'}
                        text={'Enterprise application developed using powerful development solutions. This application includes development from scratch, test coverage, writing storybook for other developers, optimization, configurations and much more. '}
                        linkTo={'/project1'}
                    />

                    <ProjectRow
                        imageSrc={'https://i.ibb.co/8x39Lnt/portfolio.png'}
                        imageAlt={'Software Screenshot 2'}
                        title={'Portfolio DEMO'}
                        text={'A multi-page React-based website presenting projects and skills. This site is a simple yet unique portfolio to which I added theme switching, language switching and other features.'}
                        linkTo={'/project2'}
                    />

                    <ProjectRow
                        imageSrc={'https://i.ibb.co/vhLLpbr/school-Proc.png'}
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
