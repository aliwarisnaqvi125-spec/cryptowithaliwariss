<?php include 'includes/header.php'; ?>

<main class="container" style="padding-top: 4rem; display: grid; grid-template-columns: 1fr 400px; gap: 2rem;">
    <!-- Market List -->
    <div style="flex: 1;">
        <h1 class="title" style="margin-bottom: 2rem;">Market <span class="gradient-text">Overview</span></h1>
        <div class="tableContainer">
            <table class="table">
                <thead>
                    <tr>
                        <th class="th">Name</th>
                        <th class="th">Price</th>
                        <th class="th">24h Change</th>
                        <th class="th">Market Cap</th>
                    </tr>
                </thead>
                <tbody id="market-full-list">
                    <!-- Data injected by JS -->
                </tbody>
            </table>
        </div>
    </div>

    <!-- Swap Widget -->
    <aside>
        <div class="widget" style="position: sticky; top: 120px;">
            <div class="header">
                <h3 class="title">Swap</h3>
                <i data-lucide="settings" style="color: var(--text-muted); cursor: pointer;"></i>
            </div>
            
            <div class="inputGroup">
                <label class="label">You Pay</label>
                <div class="inputRow">
                    <input type="number" class="input" value="1.00">
                    <select class="select">
                        <option>BTC</option>
                        <option>ETH</option>
                        <option>USDT</option>
                    </select>
                </div>
            </div>

            <div class="exchangeIcon">
                <button class="iconBtn"><i data-lucide="arrow-down-up"></i></button>
            </div>

            <div class="inputGroup">
                <label class="label">You Receive</label>
                <div class="inputRow">
                    <input type="number" class="input" value="64123.50" readonly>
                    <select class="select">
                        <option>USDT</option>
                        <option>BTC</option>
                        <option>ETH</option>
                    </select>
                </div>
            </div>

            <button class="swapBtn">Connect Wallet</button>
        </div>
    </aside>
</main>

<script>
async function fetchFullMarketData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false');
        const data = await response.json();
        
        const tbody = document.getElementById('market-full-list');
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
                <td class="td">$${(coin.market_cap / 1000000000).toFixed(2)}B</td>
            </tr>
        `).join('');
    } catch (e) {
        console.error('Market fetch failed', e);
    }
}
fetchFullMarketData();
</script>

<style>
@media (max-width: 1024px) {
    main {
        grid-template-columns: 1fr !important;
    }
    aside {
        margin-top: 2rem;
    }
    .widget {
        max-width: 100% !important;
        position: static !important;
    }
}
</style>

<?php include 'includes/footer.php'; ?>
