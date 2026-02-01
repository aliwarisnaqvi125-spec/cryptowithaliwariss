
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import { ArrowLeft } from "lucide-react";

interface PostContent {
    title: string;
    date: string;
    image: string;
    body: React.ReactNode;
}

const POSTS_CONTENT: Record<string, PostContent> = {
    "1": {
        title: "Bitcoin Price Analysis: 2023 Retrospective",
        date: "Jan 15, 2024",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=1200",
        body: (
            <>
                <p>2023 was a year of resilience and recovery for Bitcoin. Following the turbulent events of 2022, Bitcoin started the year at approximately $16,500, with many analysts skeptical about its short-term future.</p>

                <h2>The Banking Crisis Catalyst</h2>
                <p>A major turning point occurred in March 2023 during the regional banking crisis in the United States. As traditional financial institutions like Silicon Valley Bank faced collapse, Bitcoin's narrative as a "digital gold" and a hedge against systemic risk gained significant traction. Its price surged toward $28,000 during this period.</p>

                <h2>Institutional Awakening</h2>
                <p>The middle of the year was defined by the entry of institutional giants. BlackRock's application for a spot Bitcoin ETF in June served as a massive validation for the asset class. This was quickly followed by similar applications from Fidelity, Invesco, and others.</p>

                <ul>
                    <li><strong>Q1 Performance:</strong> Significant recovery from bear market lows.</li>
                    <li><strong>Mid-Year Consolidation:</strong> Price stability between $25k and $30k.</li>
                    <li><strong>Q4 Rally:</strong> Anticipation of ETF approvals pushed prices toward $44,000.</li>
                </ul>

                <p>By the end of 2023, Bitcoin had more than doubled in value, closing the year as one of the best-performing assets globally.</p>
            </>
        )
    },
    "2": {
        title: "Crypto Market Outlook 2024: What to Expect",
        date: "Feb 01, 2024",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1200",
        body: (
            <>
                <p>2024 is widely considered the most anticipated year in Bitcoin's history. Two massive events are converging to create a potential "perfect storm" for price action.</p>

                <h2>The Spot ETF Era</h2>
                <p>The approval of spot Bitcoin ETFs in January 2024 marked the beginning of a new era. For the first time, institutional capital can flow into Bitcoin through traditional brokerage accounts, removing the technical barriers that previously kept many investors on the sidelines.</p>

                <h2>The 2024 Halving</h2>
                <p>Scheduled for April 2024, the fourth Bitcoin halving will reduce the daily issuance of new BTC from 900 to 450. Historically, halvings have been precursors to significant bull runs as the supply-side pressure is halved while demand continues to grow or stay steady.</p>

                <h2>Key Themes for 2024:</h2>
                <ul>
                    <li><strong>Institutional Adoption:</strong> More corporations adding BTC to balance sheets.</li>
                    <li><strong>Layer 2 Evolution:</strong> Growth in Bitcoin DeFi through protocols like Stacks and Rootstock.</li>
                    <li><strong>Macro Shift:</strong> Potential interest rate cuts by the Federal Reserve providing a tailwind for risk assets.</li>
                </ul>

                <p>As we navigate through 2024, the combination of a supply shock and a demand surge makes for an incredibly optimistic outlook.</p>
            </>
        )
    },
    "3": {
        title: "Bitcoin 2026 Predictions: The Road to $150k?",
        date: "Feb 10, 2024",
        image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=1200",
        body: (
            <>
                <p>Looking beyond the immediate horizon, the cycle peaking in 2025-2026 could be the most significant one yet. Many quantitative models, including variations of the stock-to-flow and cycle-repeat theories, suggest six-figure prices are well within reach.</p>

                <h2>The Supply Multiplier</h2>
                <p>By 2026, the effects of the 2024 halving will have fully permeated the market. Historically, the peak of a Bitcoin cycle occurs 12 to 18 months after the halving event. This places the potential market top somewhere in late 2025 or mid-2026.</p>

                <h2>Global Monetary Shift</h2>
                <p>Inflationary pressures in fiat currencies worldwide continue to drive interest in hard assets. As Bitcoin's market cap grows, it becomes less volatile and more attractive to sovereign wealth funds and central banks as a reserve asset.</p>

                <h2>Long-term Projections:</h2>
                <ul>
                    <li><strong>Conservative Target:</strong> $100,000 - $120,000</li>
                    <li><strong>Moderate Target:</strong> $150,000</li>
                    <li><strong>Bull Case:</strong> $250,000+ dependent on hyperbitcoinization acceleration.</li>
                </ul>

                <p>While volatility remains a constant companion, the structural fundamentals of Bitcoin suggest that the road to $150,000 is not just a dream, but a mathematical trajectory based on current adoption rates.</p>
            </>
        )
    }
};

export default function BlogPostPage() {
    const { id } = useParams();
    const post = POSTS_CONTENT[id as string];

    if (!post) {
        return (
            <div className={styles.container}>
                <h1>Post Not Found</h1>
                <Link href="/blog" className={styles.backLink}>
                    <ArrowLeft size={20} /> Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Link href="/blog" className={styles.backLink}>
                <ArrowLeft size={20} /> Back to Blog
            </Link>

            <article className={styles.article}>
                <header className={styles.header}>
                    <span className={styles.date}>{post.date}</span>
                    <h1 className={styles.title}>{post.title}</h1>
                </header>

                <div className={styles.imageContainer}>
                    <img src={post.image} alt={post.title} className={styles.image} />
                </div>

                <div className={styles.content}>
                    {post.body}
                </div>
            </article>
        </div>
    );
}
