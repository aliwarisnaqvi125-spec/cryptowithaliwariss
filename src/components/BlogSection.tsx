
"use client";

import styles from "./BlogSection.module.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const POSTS = [
    {
        id: 1,
        title: "Bitcoin Price Analysis: 2023 Retrospective",
        date: "Jan 15, 2024",
        excerpt: "A deep dive into the market dynamics that shaped Bitcoin's performance throughout 2023. We analyze key support levels and institutional adoption.",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800", // Placeholder
    },
    {
        id: 2,
        title: "Crypto Market Outlook 2024: What to Expect",
        date: "Feb 01, 2024",
        excerpt: "With the halving event approaching, 2024 is set to be a pivotal year for Bitcoin. Here's our comprehensive analysis of potential price movements.",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Bitcoin 2026 Predictions: The Road to $150k?",
        date: "Feb 10, 2024",
        excerpt: "Long-term forecasting based on stock-to-flow models and macroeconomic trends suggesting a massive bull run leading into 2026.",
        image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=800",
    },
];

export default function BlogSection() {
    return (
        <div className={styles.section} id="blog">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Market Insights & News</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Stay informed with the latest trends and analysis.</p>
                </div>
                <div className={styles.grid}>
                    {POSTS.map((post) => (
                        <div key={post.id} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src={post.image} alt={post.title} className={styles.image} />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.date}>{post.date}</p>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                                <Link href={`/blog/${post.id}`} className={styles.link}>
                                    Read Analysis <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
