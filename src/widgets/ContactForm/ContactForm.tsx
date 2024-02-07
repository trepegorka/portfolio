import {classNames} from 'src/shared/helpers/classNames/classNames'
import cls from './ContactForm.module.scss'
import {Button, ThemeButton} from "src/shared/ui/Button/Button.tsx";

interface ContactFormProps {
    className?: string
}

export const ContactForm = ({className}: ContactFormProps) => {
    return (
        <div className={classNames(cls.contactFormContainer, {}, [className])}>
            <form action="sendmail.php" className={cls.contactForm} method="post">
                <div className={cls.contactFormField}>
                    <label className={cls.contactFormLabel} htmlFor="name">
                        Name
                    </label>
                    <input
                        required
                        placeholder="Enter Your Name"
                        type="text"
                        className={cls.contactFormInput}
                        name="name"
                        id="name"
                    />
                </div>
                <div className={cls.contactFormField}>
                    <label className={cls.contactFormLabel} htmlFor="email">
                        Email
                    </label>
                    <input
                        required
                        placeholder="Enter Your Email"
                        type="email"
                        className={cls.contactFormInput}
                        name="email"
                        id="email"
                    />
                </div>
                <div className={cls.contactFormField}>
                    <label className={cls.contactFormLabel} htmlFor="message">
                        Message
                    </label>
                    <textarea
                        required
                        cols={30}
                        rows={10}
                        className={cls.contactFormInput}
                        placeholder="Enter Your Message"
                        name="message"
                        id="message"
                    ></textarea>
                </div>

                <Button type='submit' theme={ThemeButton.MEDIUM} className={cls.contact__btn}>Submit</Button>
            </form>
        </div>
            
    );
};