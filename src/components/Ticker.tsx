
"use client";

import { useEffect, useState } from "react";
import styles from "./Ticker.module.css";
import { ArrowUp, ArrowDown } from "lucide-react";

interface Coin {
    id: string;
    symbol: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
}

const FALLBACK_COINS: Coin[] = [
    { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', current_price: 64123, price_change_percentage_24h: 2.1 },
    { id: 'ethereum', symbol: 'eth', name: 'Ethereum', current_price: 3123, price_change_percentage_24h: -1.2 },
    { id: 'tether', symbol: 'usdt', name: 'Tether', current_price: 1, price_change_percentage_24h: 0.1 },
    { id: 'binancecoin', symbol: 'bnb', name: 'BNB', current_price: 612, price_change_percentage_24h: 0.5 },
    { id: 'ripple', symbol: 'xrp', name: 'XRP', current_price: 0.52, price_change_percentage_24h: -0.4 },
    { id: 'usd-coin', symbol: 'usdc', name: 'USD Coin', current_price: 1, price_change_percentage_24h: 0.01 },
    { id: 'dogecoin', symbol: 'doge', name: 'Dogecoin', current_price: 0.15, price_change_percentage_24h: 5.2 },
    { id: 'solana', symbol: 'sol', name: 'Solana', current_price: 135, price_change_percentage_24h: 3.4 },
    { id: 'bitcoin-cash', symbol: 'bch', name: 'Bitcoin Cash', current_price: 450, price_change_percentage_24h: 1.5 },
    { id: 'monero', symbol: 'xmr', name: 'Monero', current_price: 120, price_change_percentage_24h: -0.8 },
    { id: 'stellar', symbol: 'xlm', name: 'Stellar', current_price: 0.11, price_change_percentage_24h: 0.2 },
    { id: 'dai', symbol: 'dai', name: 'DAI', current_price: 1, price_change_percentage_24h: 0.02 },
];

export default function Ticker() {
    const [coins, setCoins] = useState<Coin[]>(FALLBACK_COINS);

    useEffect(() => {
        const ids = "bitcoin,tether,ethereum,binancecoin,ripple,usd-coin,dogecoin,solana,bitcoin-cash,monero,stellar,dai";
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=12&page=1&sparkline=false`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) setCoins(data);
            })
            .catch(err => console.error("Ticker fetch error:", err));
    }, []);

    // Double the list for seamless loop
    const displayCoins = [...coins, ...coins];

    return (
        <div className={styles.tickerWrapper}>
            <div className={styles.tickerContent}>
                {displayCoins.map((coin, index) => (
                    <div key={`${coin.id}-${index}`} className={styles.item}>
                        <span className={styles.symbol}>{coin.symbol.toUpperCase()}</span>
                        <span className={styles.price}>${coin.current_price.toLocaleString()}</span>
                        <span className={coin.price_change_percentage_24h >= 0 ? styles.positive : styles.negative}>
                            {coin.price_change_percentage_24h >= 0 ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
