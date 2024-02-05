import { classNames } from "src/shared/helpers/classNames/classNames.ts";
import cls from './Footer.module.scss';
import {Socials} from "src/widgets/Socials/Socials.tsx";

interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }: FooterProps) => {
    return (
        <footer className={classNames(cls.mainFooter, {}, [className])}>

            <div className={cls.mainContainer}>
                <div className={cls.mainFooterUpper}>
                    <div className={cls.mainFooterRow1}>
                        <h2 className={cls.heading}>
                            <span>Social</span>
                        </h2>
                        <div className={cls.mainFooterSocialCont}>
                            <Socials invertedColor={false} className={cls.hoverOff}/>
                        </div>
                    </div>
                    <div className={cls.mainFooterRow2}>
                        <h2 className={cls.heading}>Egor Potapko</h2>
                        <p className={cls.mainFooterShortDesc}>
                            A Frontend focused Web Developer building the Frontend of Websites
                            and Web Applications that leads to the success of the overall
                            product
                        </p>
                    </div>
                </div>

                <div className={cls.mainFooterLower}>
                    &copy; Copyright
                    <script>document.write(new Date().getFullYear())</script>. Made by
                    <a rel="noreferrer" target="_blank" href="https://trepegorka.com">Egor Potapko</a>
                </div>
            </div>
        </footer>
    );
};
