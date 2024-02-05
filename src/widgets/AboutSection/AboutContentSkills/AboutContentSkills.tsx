import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './AboutContentSkills.module.scss'

interface AboutContentSkillsProps {
    className?: string
}

export const AboutContentSkills = ({className}: AboutContentSkillsProps) => {
    return (
        <div className={classNames(cls.AboutContentSkills, {}, [className])}>
            <h3 className={cls.aboutContentTitle}>My Skills</h3>
            <div className={cls.skills}>
                <div className={cls.skillsSkill}>JavaScript</div>
                <div className={cls.skillsSkill}>React.js</div>
                <div className={cls.skillsSkill}>Redux</div>
                <div className={cls.skillsSkill}>Typescript</div>
                <div className={cls.skillsSkill}>HTML5</div>
                <div className={cls.skillsSkill}>CSS3</div>
                <div className={cls.skillsSkill}>SASS</div>
                <div className={cls.skillsSkill}>Webpack</div>
                <div className={cls.skillsSkill}>Vite</div>
                <div className={cls.skillsSkill}>Jest</div>
                <div className={cls.skillsSkill}>Storybook</div>
                <div className={cls.skillsSkill}>Loki</div>
                <div className={cls.skillsSkill}>GIT</div>
                <div className={cls.skillsSkill}>NPM</div>
                <div className={cls.skillsSkill}>UI</div>
                <div className={cls.skillsSkill}>Code splitting</div>
            </div>
            <h3 className={classNames(cls.aboutContentTitle, {}, [cls.secondaryTitle])}>Secondary skills</h3>
            <div className={cls.skills}>
                <div className={cls.skillsSkill}>Java</div>
                <div className={cls.skillsSkill}>Python</div>
                <div className={cls.skillsSkill}>SQL</div>
                <div className={cls.skillsSkill}>Bootstrap</div>
                <div className={cls.skillsSkill}>ANT Design</div>
                <div className={cls.skillsSkill}>Webflow</div>
            </div>
            <h3 className={classNames(cls.aboutContentTitle, {}, [cls.secondaryTitle])}>In study</h3>
            <div className={cls.skills}>
                <div className={cls.skillsSkill}>Advanced Typescript</div>
                <div className={cls.skillsSkill}>Automation</div>
                <div className={cls.skillsSkill}>Cypress</div>
                <div className={cls.skillsSkill}>GraphQL</div>
            </div>
        </div>
    );
};