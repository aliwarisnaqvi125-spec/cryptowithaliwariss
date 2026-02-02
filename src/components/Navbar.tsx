
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Market", href: "/market" },
    { name: "Blog", href: "/blog" },
    { name: "Free Earn", href: "/earn" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Start Trade", href: "/market", cta: true },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/favicon.png"
            alt="CryptoWithAliwaris Logo"
            width={32}
            height={32}
            style={{ borderRadius: '50%' }}
          />
          <span>CryptoWithAliwaris</span>
        </Link>

        <div className={styles.links}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={item.cta ? styles.ctaButton : styles.navLink}
              style={pathname === item.href && !item.cta ? { color: "var(--primary)" } : {}}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button className={styles.mobileMenuBtn} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Primitive mobile menu for now */}
        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--background)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={item.cta ? styles.ctaButton : styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
