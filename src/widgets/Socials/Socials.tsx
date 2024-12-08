import cls from './Socials.module.scss'
import {SocialIcon} from "src/widgets/SocialIcon/SocialIcon.tsx";
import {classNames} from "src/shared/helpers/classNames/classNames.ts";

interface SocialsProps {
    className?: string
    invertedColor?: boolean
}

export const Socials = ({className, invertedColor = false}: SocialsProps) => {

    return (
        <>
            <SocialIcon
                href="https://www.linkedin.com/in/ptpch/"
                svgSrc={invertedColor
                    ? 'https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg'
                    : 'https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png'}
                alt="Egor Potapko Linkedin Profile"
                className={classNames(cls.homeHero__socialIcon, {}, [className])}
            />

            <SocialIcon
                href="https://twitter.com/"
                svgSrc={invertedColor
                    ? "https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg"
                    : 'https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png'}
                alt="Egor Potapko Twitter Profile"
                className={classNames(cls.homeHero__socialIcon, {}, [className])}
                disabled={true}
            />

            <SocialIcon
                href="https://www.youtube.com/"
                svgSrc={invertedColor
                    ? "https://d33wubrfki0l68.cloudfront.net/7c95be3350552a5e9f2fc47f1bdbac118ea4dcee/f7a5e/assets/svg/yt-dark.svg"
                    : 'https://d33wubrfki0l68.cloudfront.net/493f1aa6da674c05bc606ba5b9e8092b881e8626/67c76/assets/png/yt-ico.png'}
                alt="Egor Potapko Youtube Profile"
                className={classNames(cls.homeHero__socialIcon, {}, [className])}
            />

            <SocialIcon
                href="https://github.com/trepegorka"
                svgSrc={invertedColor
                    ? 'https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg'
                    : 'https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png'}
                alt="Egor Potapko Github Profile"
                className={classNames(cls.homeHero__socialIcon, {}, [className])}
            />

            <SocialIcon
                href="https://dev.to/"
                svgSrc={invertedColor
                    ?"https://d33wubrfki0l68.cloudfront.net/e978c8491d93813aa00b3dc80b9abfb0d64a9086/3c187/assets/svg/book-dark.svg"
                    : 'https://d33wubrfki0l68.cloudfront.net/c7b1e51b8c75a239d68af3d42866666580f390ec/dcc7c/assets/png/blog-ico.png'}
                alt="Egor Potapko Github Profile"
                className={classNames(cls.homeHero__socialIcon, {}, [className])}
            />
        </>
    );
};