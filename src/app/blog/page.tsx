
"use client";

import BlogSection from "@/components/BlogSection";

export default function BlogPage() {
    return (
        <div style={{ paddingTop: '5rem' }}>
            <div className="max-w-7xl" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>The <span className="gradient-text">Aliwaris</span> Journal</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>Expert analysis, market updates, and long-term crypto forecasting.</p>
            </div>
            <BlogSection />
        </div>
    );
}
