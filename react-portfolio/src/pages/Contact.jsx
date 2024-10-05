import React, { useState } from 'react';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: ''});
    const [errors, setErrors] = useState ({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleBlur = (e) => {
        if (!form[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: 'This field is required' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="contact">
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
                onBlue={handleBlue}
                />
                {errors.email && <p>{errors.email}</p>}

                <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                />
                {errors.message && <p>{errors.message}</p>}
                
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;