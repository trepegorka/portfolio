import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import cls from './AboutSection.module.scss'
import {SectionTitle} from "src/shared/ui/SectionTitile/SectionTitle.tsx";
import {AboutContentMain} from "src/widgets/AboutSection/AboutContentMain/AboutContentMain.tsx";
import {AboutContentSkills} from "src/widgets/AboutSection/AboutContentSkills/AboutContentSkills.tsx";

interface AboutSectionProps {
    className?: string
}

export const AboutSection = ({ className }: AboutSectionProps) => {
    return (
        <section id="about" className={classNames(cls.about, {}, [className, cls.secPad])}>
            <div className={cls.mainContainer}>
                <SectionTitle
                    title={'About Me'}
                    subtitle={'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'}
                />

                <div className={cls.aboutContent}>
                    <AboutContentMain/>
                    <AboutContentSkills/>
                </div>
            </div>
        </section>
    );
};
