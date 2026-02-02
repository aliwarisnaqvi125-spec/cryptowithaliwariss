<?php include 'includes/header.php'; ?>

<main>
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1 class="title">Buy & Sell Crypto at <br><span class="gradient-text">True Cost</span></h1>
            <p class="subtitle">Join 80m+ users buying and selling 250+ cryptocurrencies at true cost. Start your journey today with the most trusted platform.</p>
            <div class="buttons">
                <a href="market.php" class="primaryBtn">Start Trade</a>
                <a href="about.php" class="secondaryBtn">Learn More</a>
            </div>
        </div>
        <div class="glow"></div>
    </section>

    <!-- Market Section -->
    <section class="section" style="background: var(--background);">
        <div class="container">
            <div class="header">
                <h2 class="title">Market <span class="gradient-text">Trends</span></h2>
            </div>
            <div class="tableContainer">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="th">Name</th>
                            <th class="th">Price</th>
                            <th class="th">24h Change</th>
                            <th class="th">Action</th>
                        </tr>
                    </thead>
                    <tbody id="market-table-body">
                        <!-- Market data will be injected here by JS -->
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- Earn Section (Preview) -->
    <section class="section">
        <div class="container">
            <div class="header">
                <span class="badge">Earn & Learn</span>
                <h2 class="title">Free Earn</h2>
                <p class="subtitle">Complete our quick crypto quiz and earn $100 bonus instantly.</p>
            </div>
            <div style="text-align: center;">
                <a href="earn.php" class="primaryBtn">Take Quiz Now</a>
            </div>
        </div>
    </section>

    <!-- Blog Section -->
    <section class="section" style="background: var(--background);">
        <div class="container">
            <div class="header">
                <h2 class="title">Aliwaris <span class="gradient-text">Journal</span></h2>
            </div>
            <div class="grid">
                <div class="card">
                    <div class="imageContainer">
                        <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800" class="image" alt="Bitcoin Analysis">
                    </div>
                    <div class="content">
                        <p class="date">Feb 1, 2024</p>
                        <h3 class="cardTitle">Bitcoin Price Analysis: 2023 Retrospective</h3>
                        <p class="excerpt">A comprehensive look at Bitcoin's market performance throughout 2023 and what it means for the future.</p>
                        <a href="blog-post.php?id=1" class="link">Read More</a>
                    </div>
                </div>
                <!-- More blog cards... -->
            </div>
        </div>
    </section>
</main>

<script>
async function fetchMarketData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const data = await response.json();
        
        const tbody = document.getElementById('market-table-body');
        tbody.innerHTML = data.map(coin => `
            <tr class="tr">
                <td class="td">
                    <div class="coinName">
                        <img src="${coin.image}" class="coinIcon" alt="${coin.name}">
                        <span>${coin.name} <small style="color: var(--text-muted)">${coin.symbol.toUpperCase()}</small></span>
                    </div>
                </td>
                <td class="td">$${coin.current_price.toLocaleString()}</td>
                <td class="td ${coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}">
                    ${coin.price_change_percentage_24h >= 0 ? '+' : ''}${coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td class="td">
                    <a href="market.php" class="tradeBtn">Trade</a>
                </td>
            </tr>
        `).join('');
    } catch (e) {
        console.error('Market fetch failed', e);
    }
}
fetchMarketData();
</script>

<?php include 'includes/footer.php'; ?>
