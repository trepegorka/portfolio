import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './AboutContentSkills.module.scss'
import {SkillContainer} from "src/widgets/SkillContainer/SkillContainer.tsx";

interface AboutContentSkillsProps {
    className?: string
}

export const AboutContentSkills = ({className}: AboutContentSkillsProps) => {
    return (
        <div className={classNames(cls.AboutContentSkills, {}, [className])}>
            <h3 className={cls.aboutContentTitle}>Main Skills</h3>
            <div className={cls.skills}>
                <SkillContainer>React.js</SkillContainer>
                <SkillContainer>Next.js</SkillContainer>
                <SkillContainer>Typescript</SkillContainer>
                <SkillContainer>PostgreSQL</SkillContainer>
                <SkillContainer>Redux(RTK)</SkillContainer>
                <SkillContainer>GIT</SkillContainer>
            </div>
            <h3 className={classNames(cls.aboutContentTitle, {}, [cls.secondaryTitle])}>Back-end technologies</h3>
            <div className={cls.skills}>
                <SkillContainer>Node.js</SkillContainer>
                <SkillContainer>Java SE</SkillContainer>
                <SkillContainer>Python</SkillContainer>
            </div>
            <h3 className={classNames(cls.aboutContentTitle, {}, [cls.secondaryTitle])}>Styling</h3>
            <div className={cls.skills}>
                <SkillContainer>CSS</SkillContainer>
                <SkillContainer>SASS</SkillContainer>
                <SkillContainer>Tailwind CSS</SkillContainer>
                <SkillContainer>Bootstrap</SkillContainer>
                <SkillContainer>CSS in JS</SkillContainer>
            </div>
            <h3 className={classNames(cls.aboutContentTitle, {}, [cls.secondaryTitle])}>Secondary skills</h3>
            <div className={cls.skills}>
                <SkillContainer>Express.js</SkillContainer>
                <SkillContainer>Prisma ORM</SkillContainer>
                <SkillContainer>Postman</SkillContainer>
                <SkillContainer>Socket.io</SkillContainer>
                <SkillContainer>Webpack</SkillContainer>
                <SkillContainer>Vite</SkillContainer>
                <SkillContainer>Jest/RTL</SkillContainer>
                <SkillContainer>Loki</SkillContainer>
                <SkillContainer>Storybook</SkillContainer>
                <SkillContainer>CI/CD</SkillContainer>
                <SkillContainer>MUI</SkillContainer>
                <SkillContainer>ANT Design</SkillContainer>
                <SkillContainer>Chakra UI</SkillContainer>
                <SkillContainer>Shadcn UI</SkillContainer>
                <SkillContainer>Webflow</SkillContainer>
                <SkillContainer>Shopify</SkillContainer>
            </div>
            <h3 className={classNames(cls.aboutContentTitle, {}, [cls.secondaryTitle])}>In study</h3>
            <div className={cls.skills}>
                <SkillContainer>Web3, Blockchain</SkillContainer>
                <SkillContainer>Advanced Testing</SkillContainer>
                <SkillContainer>React Native</SkillContainer>
            </div>
        </div>
    );
};