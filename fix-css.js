const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'php_site/css/style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Remove hashed class names if any (not really needed since I used plain classes in PHP)
// But I need to ensure the standard layouts are preserved.

// I'll just append some fixes to ensure the custom classes I used in PHP are styled.
const extraStyles = `
/* Global Layout Fixes for PHP */
.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: rgba(6, 17, 33, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem 0;
}
.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1rem;
}
.logo {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(90deg, #1199FA, #00D5FA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
.links {
    display: flex;
    gap: 2rem;
    align-items: center;
}
.navLink {
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.2s;
    color: var(--foreground);
    opacity: 0.8;
}
.navLink:hover {
    color: var(--primary);
    opacity: 1;
}
.ctaButton {
    padding: 0.6rem 1.2rem;
    background: var(--primary);
    color: white !important;
    border-radius: 8px;
    font-weight: 600;
    transition: background 0.2s;
}
.mobileMenuBtn { display: none; }

.footer {
    background: var(--card-background);
    padding: 4rem 1rem 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 4rem;
}
.footer .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 80rem;
    margin: 0 auto;
}
.footer-title { margin-bottom: 1.5rem; font-size: 1.25rem; }
.footer .link { display: block; margin-bottom: 0.5rem; color: var(--text-muted); }
.footer .link:hover { color: var(--primary); }
.footer .bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 3rem;
    padding-top: 1.5rem;
    text-align: center;
    color: var(--text-muted);
}

.ticker-wrapper { background: #040d1a; height: 40px; overflow: hidden; display: flex; align-items: center; }
.ticker-content { display: flex; white-space: nowrap; animation: ticker-anim 30s linear infinite; }
.ticker-item { display: flex; align-items: center; gap: 0.5rem; padding: 0 2rem; font-size: 0.875rem; }
.ticker-item .up { color: var(--success); }
.ticker-item .down { color: var(--danger); }
@keyframes ticker-anim { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

.hero { padding: 8rem 1rem 6rem; background: linear-gradient(rgba(6,17,33,0.8), rgba(6,17,33,0.8)), url('../images/hero-bg.png'); background-size: cover; text-align: center; }
.primaryBtn { padding: 1rem 2rem; background: var(--primary); color: white !important; border-radius: 50px; font-weight: 600; display: inline-block; }
.secondaryBtn { padding: 1rem 2rem; border: 1px solid var(--primary); color: white !important; border-radius: 50px; font-weight: 600; display: inline-block; }

.mobileMenu {
    display: none;
    flex-direction: column;
    background: var(--card-background);
    padding: 1rem;
    gap: 1rem;
    position: absolute;
    width: 100%;
    left: 0;
    top: 70px;
    z-index: 999;
}
@media (max-width: 768px) {
    .links { display: none !important; }
    .mobileMenuBtn { display: block !important; }
}
`;

fs.appendFileSync(cssPath, extraStyles);
