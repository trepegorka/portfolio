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
                <SkillContainer>Next.js</SkillContainer>
                <SkillContainer>Typescript</SkillContainer>
                <SkillContainer>PostgreSQL</SkillContainer>
                <SkillContainer>Tailwind CSS</SkillContainer>
                <SkillContainer>Redux(RTK)</SkillContainer>
                <SkillContainer>SASS</SkillContainer>
                <SkillContainer>Webpack</SkillContainer>
                <SkillContainer>Vite</SkillContainer>
                <SkillContainer>Jest</SkillContainer>
                <SkillContainer>Storybook</SkillContainer>
                <SkillContainer>Loki</SkillContainer>
                <SkillContainer>GIT</SkillContainer>
                <SkillContainer>CI/CD</SkillContainer>
            </div>
            <h3 className={classNames(cls.aboutContentTitle, {}, [cls.secondaryTitle])}>Secondary skills</h3>
            <div className={cls.skills}>
                <SkillContainer>Java SE</SkillContainer>
                <SkillContainer>Python</SkillContainer>
                <SkillContainer>Bootstrap</SkillContainer>
                <SkillContainer>ANT Design</SkillContainer>
                <SkillContainer>Webflow</SkillContainer>
            </div>
            <h3 className={classNames(cls.aboutContentTitle, {}, [cls.secondaryTitle])}>In study</h3>
            <div className={cls.skills}>
                <SkillContainer>Advanced Typescript</SkillContainer>
                <SkillContainer>Cypress</SkillContainer>
                <SkillContainer>Docker</SkillContainer>
                <SkillContainer>GraphQL</SkillContainer>
                <SkillContainer>React Native</SkillContainer>
                <SkillContainer>Mongo DB</SkillContainer>
            </div>
        </div>
    );
};