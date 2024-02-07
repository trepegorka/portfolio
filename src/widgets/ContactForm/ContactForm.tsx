import { useState } from 'react';
import { classNames } from 'src/shared/helpers/classNames/classNames';
import cls from './ContactForm.module.scss';
import { Button, ThemeButton } from 'src/shared/ui/Button/Button.tsx';

interface ContactFormProps {
    className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('sendmail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message.');
        }
    };

    return (
        <div className={classNames(cls.contactFormContainer, {}, [className])}>
            <form onSubmit={handleSubmit} className={cls.contactForm}>
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
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <Button type='submit' theme={ThemeButton.MEDIUM} className={cls.contact__btn}>Submit</Button>
            </form>
        </div>
    );
};
