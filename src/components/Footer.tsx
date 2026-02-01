
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div>
                        <h3 className={styles.title}>CryptoWithAliwaris</h3>
                        <p style={{ color: 'var(--text-muted)' }}>The world's fastest growing crypto app.</p>
                    </div>
                    <div>
                        <h4 className={styles.title}>Company</h4>
                        <Link href="/about" className={styles.link}>About Us</Link>
                        <Link href="/contact" className={styles.link}>Contact Us</Link>
                        <a href="#" className={styles.link}>Careers</a>
                        <a href="#" className={styles.link}>Support</a>
                    </div>
                    <div>
                        <h4 className={styles.title}>Resources</h4>
                        <Link href="/blog" className={styles.link}>Blog</Link>
                        <Link href="/market" className={styles.link}>Market</Link>
                        <Link href="/earn" className={styles.link}>Free Earn</Link>
                        <a href="#" className={styles.link}>Security</a>
                    </div>
                    <div>
                        <h4 className={styles.title}>Social</h4>
                        <a href="#" className={styles.link}>Twitter</a>
                        <a href="#" className={styles.link}>Discord</a>
                        <a href="#" className={styles.link}>Instagram</a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    &copy; {new Date().getFullYear()} CryptoWithAliwaris. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
