import React, { useState } from 'react';
import { Button, ThemeButton } from 'src/shared/ui/Button/Button.tsx';
import cls from './ContactForm.module.scss';

interface FormChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {
    target: HTMLInputElement | HTMLTextAreaElement;
}

interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> {
    preventDefault(): void;
}


export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: FormChangeEvent) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormSubmitEvent) => {
        e.preventDefault();
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                console.log('Form submitted successfully');
            })
            .catch(error => {
                console.error('Form submission error:', error);
            });
    };


    return (
        <div className={cls.contactFormContainer}>
            <form method="post" className={cls.contactForm} onSubmit={handleSubmit} name="contact" action="/success">
                <input type="hidden" name="form-name" value="contact" />
                <div className={cls.contactFormField}>
                    <label htmlFor="name" className={cls.contactFormLabel}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Your Name"
                        className={cls.contactFormInput}
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
                        id="message"
                    ></textarea>
                </div>
                <Button type="submit" theme={ThemeButton.MEDIUM} className={cls.contact__btn}>Submit</Button>
            </form>
        </div>
    );
};
