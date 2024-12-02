import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './ContactSection.module.scss'
import {SectionTitle} from "src/shared/ui/SectionTitile/SectionTitle.tsx";
import {ContactForm} from "src/widgets/ContactForm/ContactForm.tsx";

interface ContactSectionProps {
    className?: string
}

export const ContactSection = ({className}: ContactSectionProps) => {
    return (
        <section id="contact" className={classNames(cls.ContactSection, {}, [className, cls.sec_pad])}>
            <div className={cls.mainContainer}>

                <SectionTitle 
                    title={'Contact'} 
                    subtitle={
                        <span>Feel free to Contact me via Telegram: ${<a target={"_blank"} href={'https://t.me/egor_ptpch'}>@egor_ptpch</a>} or by submitting the form below, ` +
                            'and I will get back to you as soon as possible</span>}/>
                <ContactForm/>
            </div>
        </section>

    );
};