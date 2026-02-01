
"use client";

import { useState } from "react";
import styles from "./EarnSection.module.css";
import { Trophy, CheckCircle2, Wallet, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const QUIZ_QUESTIONS = [
    {
        question: "What is the maximum supply of Bitcoin that will ever exist?",
        options: ["18 Million", "21 Million", "100 Million", "Unlimited"],
        correct: 1
    },
    {
        question: "What year was the first Bitcoin block (Genesis block) mined?",
        options: ["2007", "2008", "2009", "2010"],
        correct: 2
    },
    {
        question: "Who is the legendary creator of Bitcoin?",
        options: ["Vitalik Buterin", "Elon Musk", "Satoshi Nakamoto", "Aliwaris"],
        correct: 2
    }
];

export default function EarnSection() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [address, setAddress] = useState("");
    const [isWithdrawing, setIsWithdrawing] = useState(false);
    const [isWithdrawn, setIsWithdrawn] = useState(false);

    const handleAnswer = (index: number) => {
        if (currentStep < QUIZ_QUESTIONS.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsFinished(true);
        }
    };

    const handleWithdraw = () => {
        if (!address) return;
        setIsWithdrawing(true);
        // Simulate API call
        setTimeout(() => {
            setIsWithdrawing(false);
            setIsWithdrawn(true);
        }, 2000);
    };

    const resetQuiz = () => {
        setCurrentStep(0);
        setIsFinished(false);
        setAddress("");
        setIsWithdrawn(false);
        setIsWithdrawing(false);
    };

    return (
        <section className={styles.section} id="earn">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Earn & Learn</span>
                    <h2 className={styles.title}>Free Earn</h2>
                    <p className={styles.subtitle}>
                        Test your crypto knowledge and unlock exclusive rewards. Complete the quiz to earn your starting bonus.
                    </p>
                </div>

                <div className={styles.quizCard}>
                    <AnimatePresence mode="wait">
                        {!isFinished ? (
                            <motion.div
                                key="quiz"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <span className={styles.questionCount}>Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
                                <h3 className={styles.questionText}>{QUIZ_QUESTIONS[currentStep].question}</h3>

                                <div className={styles.optionsGrid}>
                                    {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            className={styles.optionBtn}
                                            onClick={() => handleAnswer(idx)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="reward"
                                className={styles.successState}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                    <Trophy size={80} color="var(--secondary)" />
                                </div>
                                <h3 className={styles.rewardTitle}>Congratulations!</h3>
                                <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>You've successfully completed the crypto quiz.</p>
                                <span className={styles.rewardAmount}>earn fee 100$</span>

                                {!isWithdrawn ? (
                                    <div className={styles.withdrawForm}>
                                        <div className={styles.inputWrapper}>
                                            <label className={styles.inputLabel}>Enter USDT/BTC Deposit Address</label>
                                            <input
                                                className={styles.addressInput}
                                                placeholder="0x... or 1Bv..."
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                disabled={isWithdrawing}
                                            />
                                        </div>
                                        <button
                                            className={styles.withdrawBtn}
                                            onClick={handleWithdraw}
                                            disabled={!address || isWithdrawing}
                                        >
                                            {isWithdrawing ? "Processing..." : "Withdraw 100$ Now"}
                                        </button>
                                    </div>
                                ) : (
                                    <div className={styles.feedback}>
                                        <CheckCircle2 size={24} />
                                        <span>Withdrawal Request Sent Successfully!</span>
                                    </div>
                                )}

                                <button className={styles.resetBtn} onClick={resetQuiz}>Restart Quiz</button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
