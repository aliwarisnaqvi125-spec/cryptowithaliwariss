
"use client";

import styles from "./page.module.css";
import { Shield, Rocket, Users, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function AboutPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About <span className="gradient-text">CryptoWithAliwaris</span></h1>

            <div className={styles.content}>
                <p style={{ fontSize: '1.25rem', marginBottom: '4rem', textAlign: 'center' }}>
                    We are on a mission to accelerate the world's transition to cryptocurrency.
                </p>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Our Vision</h2>
                    <p>
                        CryptoWithAliwaris was founded on a simple belief: it's a basic human right for everyone to control their money, data and identity. We believe that decentralization is the key to empowering people around the world to safeguard their rights and build a better future.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <Shield size={48} className={styles.icon} />
                            <h3>Secure & Regulated</h3>
                            <p>Industry-leading security protocols and compliance with global regulations.</p>
                        </div>
                        <div className={styles.card}>
                            <Rocket size={48} className={styles.icon} />
                            <h3>Fast Execution</h3>
                            <p>Lightning-fast trading engine capable of handling millions of transactions.</p>
                        </div>
                        <div className={styles.card}>
                            <Users size={48} className={styles.icon} />
                            <h3>Community First</h3>
                            <p>24/7 support and a community of millions of traders worldwide.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.contactSection}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Contact Us</h2>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <h3>Get In Touch</h3>
                            <p>Have questions about our platform or crypto in general? Reach out to us anytime. For all kind of information, you can reach us at:</p>

                            <a href="mailto:syedaliwaris125@gmail.com" className={styles.emailBox}>
                                <Mail className={styles.icon} size={24} />
                                <div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Email Official</div>
                                    <div className={styles.emailText}>syedaliwaris125@gmail.com</div>
                                </div>
                            </a>
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
        </div>
    );
}
