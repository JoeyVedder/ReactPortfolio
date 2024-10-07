import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        if (!form[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: 'This field is required' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if form is valid before sending
        if (!form.name || !form.email || !form.message) {
            setErrors({
                name: !form.name ? 'This field is required' : '',
                email: !form.email ? 'This field is required' : '',
                message: !form.message ? 'This field is required' : ''
            });
            return;
        }

        // Use EmailJS to send the form
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSent(true); // Update state to show success message
            }, (error) => {
                console.log('FAILED...', error);
            });
    };

    return (
        <section className="contact">
            {sent ? (
                <p>Thank you for your message! We will get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && <p>{errors.name}</p>}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && <p>{errors.email}</p>}

                    <textarea
                        name="message"
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.message && <p>{errors.message}</p>}

                    <button type="submit">Submit</button>
                </form>
            )}
        </section>
    );
}

export default Contact;
