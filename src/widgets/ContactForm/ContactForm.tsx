import React, { useState } from 'react';
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
        // Отправка формы на сервер
        fetch('/sendmail.php', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to submit form');
                }
                alert('Form submitted successfully!');
                // Очистка данных формы
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('Failed to submit form. Please try again later.');
            });
    };

    return (
        <div className={cls.contactFormContainer}>
            <form method="POST" className={cls.contactForm} onSubmit={handleSubmit} data-netlify="true" name="contact-form">
                <input type="hidden" name="contact-form" value="contact" />
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
                        id="email"
                        value={formData.email}
                        onChange={handleChange} // Обработка изменения поля email
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
                        onChange={handleChange} // Обработка изменения поля message
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
