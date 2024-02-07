import { Button, ThemeButton } from 'src/shared/ui/Button/Button.tsx';
import cls from './ContactForm.module.scss';

export const ContactForm = () => {

    return (
        <div className={cls.contactFormContainer}>
            <form method="post" className={cls.contactForm} name="contact">
                <input type="hidden" name="form-name" value="contact" />
                <div className={cls.contactFormField}>
                    <label htmlFor="name" className={cls.contactFormLabel}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Your Name"
                        className={cls.contactFormInput}
                        required
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
                <Button type="submit" theme={ThemeButton.MEDIUM} className={cls.contact__btn}>Submit</Button>
            </form>
        </div>
    );
};
