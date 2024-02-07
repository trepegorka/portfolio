import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './CaseStudyPage.module.scss'
import {TopSectionCustomBg} from "src/widgets/TopSectionCustomBg/TopSectionCustomBg.tsx";
import {HomeContent} from "src/widgets/HomeContent/HomeContent.tsx";
import {ProjectDetailsSection} from "src/widgets/ProjectDetailsSection/ProjectDetailsSection.tsx";
import {ImageContainer} from "src/widgets/ImageContainer/ImageContainer.tsx";
import React from "react";
import {SkillContainer} from "src/widgets/SkillContainer/SkillContainer.tsx";
import {Button, ThemeButton} from "src/shared/ui/Button/Button.tsx";
import { HashLink } from 'react-router-hash-link';
import {RoutePath} from "src/app/providers/router/config/routeConfig.tsx";


interface CaseStudyPageProps {
    className?: string
    mainTitle: string
    shortDescription: string
    liveLink?: string
    gitLink?: string
    projectImageSrc: string
    children: React.ReactNode
    skills: Array<string>
}

export const CaseStudyPage = (props: CaseStudyPageProps) => {
    const {
        className,
        mainTitle,
        liveLink = '',
        shortDescription,
        projectImageSrc,
        children,
        skills,
        gitLink = ''
    } = props
    return (
        <div className={classNames(cls.CaseStudyPage, {}, [className])}>
            <TopSectionCustomBg>
                <HomeContent title={mainTitle}
                    text={shortDescription}
                    buttonText={'Live Link'}
                    linkTo={liveLink}
                    target={'_blank'}
                />
            </TopSectionCustomBg>

            <ProjectDetailsSection>
                <ImageContainer className={cls.ImageContainer} imageSrc={projectImageSrc} imageAlt={'Software image'}/>
                <div className={cls.description}>
                    <h3 className={cls.h3Title}>Project Overview</h3>
                    <div className={cls.FullTextDescription}>
                        {children}
                    </div>
                    <h3 className={cls.h3Title}>Tools Used</h3>
                    <div className={cls.skillsContainer}>
                        {skills.map((skill: string, index: number) => (
                            <SkillContainer key={index}>{skill}</SkillContainer>
                        ))}
                    </div>

                    <h3 className={cls.h3Title}>See Live</h3>
                    <HashLink target={'_blank'} to={gitLink}><Button disabled={gitLink===''} className={cls.button} theme={ThemeButton.MEDIUM}>GitHub</Button></HashLink>
                    <HashLink target={'_blank'} to={liveLink}><Button disabled={liveLink===''} className={cls.button} theme={ThemeButton.MEDIUM}>Live Link</Button></HashLink>
                    <HashLink to={RoutePath.main.concat('#projects')}><Button className={cls.button} theme={ThemeButton.OUTLINE_MEDIUM}>Go back</Button></HashLink>
                </div>
            </ProjectDetailsSection>
        </div>
    );
};