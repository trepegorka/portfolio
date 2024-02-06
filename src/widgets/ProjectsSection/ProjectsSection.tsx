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
                        imageSrc={'src/shared/assets/images/prodFront.png'}
                        imageAlt={'Software Screenshot 1'}
                        title={'FrontEnd in Production\nIn Progress...'}
                        text={'Enterprise application developed using powerful development solutions. This application includes development from scratch, test coverage, writing storybook for other developers, optimization, configurations and much more. '}
                        linkTo={'/project1'}
                    />

                    <ProjectRow
                        imageSrc={'src/shared/assets/images/portfolio.png'}
                        imageAlt={'Software Screenshot 2'}
                        title={'Portfolio DEMO'}
                        text={'A multi-page React-based website presenting projects and skills. This site is a simple yet unique portfolio to which I added theme switching, language switching and other features.'}
                        linkTo={'/project2'}
                    />

                    <ProjectRow
                        imageSrc={'src/shared/assets/images/schoolProc.png'}
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
