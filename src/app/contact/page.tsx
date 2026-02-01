
"use client";

import styles from "../about/page.module.css";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className={styles.container} style={{ paddingTop: '8rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className={styles.title}>Contact <span className="gradient-text">Us</span></h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
                    Have a question or need assistance? Our team is here to help you 24/7.
                </p>
            </div>

            <section className={styles.contactSection} style={{ marginTop: '0' }}>
                <div className={styles.contactGrid}>
                    <div className={styles.contactInfo}>
                        <h3>Get In Touch</h3>
                        <p>For all kinds of information, inquiries, or support, please reach out via our official channels.</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <a href="mailto:syedaliwaris125@gmail.com" className={styles.emailBox}>
                                <Mail className={styles.icon} size={24} />
                                <div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Email Official</div>
                                    <div className={styles.emailText}>syedaliwaris125@gmail.com</div>
                                </div>
                            </a>

                            <div className={styles.emailBox} style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}>
                                <MessageSquare className={styles.icon} size={24} color="#00D5FA" />
                                <div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Live Chat</div>
                                    <div className={styles.emailText}>Available 24/7</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactFormContainer}>
                        <form className={styles.contactForm} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Full Name</label>
                                <input type="text" className={styles.formInput} placeholder="Your name" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Email Address</label>
                                <input type="email" className={styles.formInput} placeholder="your@email.com" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Subject</label>
                                <select className={styles.formInput} style={{ appearance: 'none' }}>
                                    <option>General Inquiry</option>
                                    <option>Support</option>
                                    <option>Feedback</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Message</label>
                                <textarea className={styles.formTextarea} placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>
                                {submitted ? "Message Sent!" : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
