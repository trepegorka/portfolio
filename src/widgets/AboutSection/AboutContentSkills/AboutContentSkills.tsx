import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './AboutContentSkills.module.scss'
import {SkillContainer} from "src/widgets/SkillContainer/SkillContainer.tsx";

interface AboutContentSkillsProps {
    className?: string
}

export const AboutContentSkills = ({className}: AboutContentSkillsProps) => {
    return (
        <div className={classNames(cls.AboutContentSkills, {}, [className])}>
            <h3 className={cls.aboutContentTitle}>My Skills</h3>
            <div className={cls.skills}>
                <SkillContainer>JavaScript</SkillContainer>
                <SkillContainer>React.js</SkillContainer>
                <SkillContainer>Redux</SkillContainer>
                <SkillContainer>Typescript</SkillContainer>
                <SkillContainer>HTML5</SkillContainer>
                <SkillContainer>CSS3</SkillContainer>
                <SkillContainer>SASS</SkillContainer>
                <SkillContainer>Webpack</SkillContainer>
                <SkillContainer>Vite</SkillContainer>
                <SkillContainer>Jest</SkillContainer>
                <SkillContainer>Storybook</SkillContainer>
                <SkillContainer>Loki</SkillContainer>
                <SkillContainer>GIT</SkillContainer>
                <SkillContainer>CI/CD</SkillContainer>
                <SkillContainer>NPM</SkillContainer>
                <SkillContainer>UI</SkillContainer>
                <SkillContainer>Code splitting</SkillContainer>
            </div>
            <h3 className={classNames(cls.aboutContentTitle, {}, [cls.secondaryTitle])}>Secondary skills</h3>
            <div className={cls.skills}>
                <SkillContainer>Java</SkillContainer>
                <SkillContainer>Python</SkillContainer>
                <SkillContainer>SQL</SkillContainer>
                <SkillContainer>Bootstrap</SkillContainer>
                <SkillContainer>ANT Design</SkillContainer>
                <SkillContainer>Webflow</SkillContainer>
            </div>
            <h3 className={classNames(cls.aboutContentTitle, {}, [cls.secondaryTitle])}>In study</h3>
            <div className={cls.skills}>
                <SkillContainer>Advanced Typescript</SkillContainer>
                <SkillContainer>Automation</SkillContainer>
                <SkillContainer>Cypress</SkillContainer>
                <SkillContainer>GraphQL</SkillContainer>
            </div>
        </div>
    );
};