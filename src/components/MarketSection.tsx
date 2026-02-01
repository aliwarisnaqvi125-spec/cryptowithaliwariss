
"use client";

import { useState, useEffect } from "react";
import styles from "./MarketSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowDown } from "lucide-react";

const FALLBACK_DATA = [
    { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', image: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png', current_price: 64123.50, price_change_percentage_24h: 2.1 },
    { id: 'ethereum', symbol: 'eth', name: 'Ethereum', image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png', current_price: 3123.40, price_change_percentage_24h: -1.2 },
    { id: 'tether', symbol: 'usdt', name: 'Tether', image: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png', current_price: 1.00, price_change_percentage_24h: 0.1 },
    { id: 'binancecoin', symbol: 'bnb', name: 'BNB', image: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png', current_price: 612.40, price_change_percentage_24h: 0.5 },
    { id: 'solana', symbol: 'sol', name: 'Solana', image: 'https://assets.coingecko.com/coins/images/4128/small/solana.png', current_price: 135.20, price_change_percentage_24h: 3.4 },
    { id: 'ripple', symbol: 'xrp', name: 'XRP', image: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png', current_price: 0.52, price_change_percentage_24h: -0.4 },
];

export default function MarketSection() {
    const [coins, setCoins] = useState(FALLBACK_DATA);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    setCoins(data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch market data:", err);
                setLoading(false); // keep fallback
            });
    }, []);

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Market Update</h2>
                </div>

                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>Name</th>
                                <th className={styles.th}>Price</th>
                                <th className={styles.th}>24h Change</th>
                                <th className={styles.th}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map((coin) => (
                                <tr key={coin.id} className={styles.tr}>
                                    <td className={styles.td}>
                                        <div className={styles.coinName}>
                                            <img
                                                src={coin.image}
                                                alt={coin.name}
                                                className={styles.coinIcon}
                                                width={32} height={32}
                                            />
                                            <span>{coin.name}</span>
                                            <span style={{ color: 'var(--text-muted)' }}>{coin.symbol.toUpperCase()}</span>
                                        </div>
                                    </td>
                                    <td className={styles.td}>${coin.current_price.toLocaleString()}</td>
                                    <td className={styles.td}>
                                        <span className={coin.price_change_percentage_24h >= 0 ? styles.positive : styles.negative}>
                                            {coin.price_change_percentage_24h >= 0 ? <ArrowUp size={16} style={{ display: 'inline' }} /> : <ArrowDown size={16} style={{ display: 'inline' }} />}
                                            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                                        </span>
                                    </td>
                                    <td className={styles.td}>
                                        <Link href={`/market`} className={styles.tradeBtn}>
                                            Trade
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
