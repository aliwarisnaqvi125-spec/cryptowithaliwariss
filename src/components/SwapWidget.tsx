
"use client";

import { useState } from "react";
import styles from "./SwapWidget.module.css";
import { ArrowDownUp } from "lucide-react";

export default function SwapWidget() {
    const [fromAmount, setFromAmount] = useState<string>("1.5");
    const [toAmount, setToAmount] = useState<string>("96543.20");
    const [fromCoin, setFromCoin] = useState("BTC");
    const [toCoin, setToCoin] = useState("USD");

    return (
        <div className={styles.widget}>
            <h3 className={styles.title} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Swap & Trade</h3>

            <div className={styles.inputGroup}>
                <label className={styles.label}>You Sell</label>
                <div className={styles.inputRow}>
                    <input
                        className={styles.input}
                        type="number"
                        value={fromAmount}
                        onChange={(e) => setFromAmount(e.target.value)}
                    />
                    <select className={styles.select} value={fromCoin} onChange={(e) => setFromCoin(e.target.value)}>
                        <option>BTC</option>
                        <option>ETH</option>
                        <option>USDT</option>
                    </select>
                </div>
            </div>

            <div className={styles.exchangeIcon}>
                <button className={styles.iconBtn}>
                    <ArrowDownUp size={24} />
                </button>
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label}>You Get</label>
                <div className={styles.inputRow}>
                    <input
                        className={styles.input}
                        type="number"
                        value={toAmount}
                        readOnly
                    />
                    <select className={styles.select} value={toCoin} onChange={(e) => setToCoin(e.target.value)}>
                        <option>USD</option>
                        <option>BTC</option>
                        <option>CRO</option>
                    </select>
                </div>
            </div>

            <button className={styles.swapBtn}>Start Trade</button>

            <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Fast, secure and free from hidden fees.
            </p>
        </div>
    );
}
