
"use client";

import MarketSection from "@/components/MarketSection";
import SwapWidget from "@/components/SwapWidget";
import styles from "./page.module.css";

export default function MarketPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Crypto Markets & Trading</h1>

            <div className={styles.grid}>
                <div className={styles.left}>
                    <MarketSection />
                </div>
                <div className={styles.right}>
                    <div className={styles.stickyWidget}>
                        <SwapWidget />
                    </div>
                </div>
            </div>
        </div>
    );
}
