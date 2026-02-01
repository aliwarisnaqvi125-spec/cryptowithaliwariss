
"use client";

import Link from "next/link";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.glow} />
            <div className={styles.container}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Buy & Sell Crypto <br /> at <span className="gradient-text">True Cost</span>
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    Join 80m+ users buying and selling 250+ cryptocurrencies at true cost.
                </motion.p>

                <motion.div
                    className={styles.buttons}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <button className={styles.primaryBtn} onClick={() => window.location.href = '/market'}>
                        Start Trade <ArrowRight size={20} style={{ marginLeft: "0.5rem" }} />
                    </button>
                    <button className={styles.secondaryBtn} onClick={() => window.location.href = '/about'}>
                        Learn More
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
