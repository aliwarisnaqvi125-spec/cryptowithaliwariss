<div class="ticker-wrapper">
    <div class="ticker-content" id="ticker-content">
        <!-- Ticker items will be injected here by JS -->
    </div>
</div>

<script>
async function fetchTickerData() {
    const coins = ['bitcoin', 'ethereum', 'tether', 'binancecoin', 'ripple', 'usd-coin', 'dogecoin', 'solana', 'bitcoin-cash', 'monero', 'stellar', 'dai'];
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(',')}&vs_currencies=usd&include_24hr_change=true`);
        const data = await response.json();
        
        const tickerContent = document.getElementById('ticker-content');
        let html = '';
        
        const coinMap = {
            'bitcoin': 'BTC', 'ethereum': 'ETH', 'tether': 'USDT', 'binancecoin': 'BNB', 
            'ripple': 'XRP', 'usd-coin': 'USDC', 'dogecoin': 'DOGE', 'solana': 'SOL', 
            'bitcoin-cash': 'BCH', 'monero': 'XMR', 'stellar': 'XLM', 'dai': 'DAI'
        };

        // Repeat items to ensure seamless loop
        const items = Object.entries(coinMap).map(([id, symbol]) => {
            const price = data[id]?.usd.toLocaleString() || '0';
            const change = data[id]?.usd_24h_change || 0;
            const isPositive = change >= 0;
            return `
                <div class="ticker-item">
                    <span class="symbol">${symbol}</span>
                    <span class="price">$${price}</span>
                    <span class="change ${isPositive ? 'up' : 'down'}">
                        ${isPositive ? '↑' : '↓'}${Math.abs(change).toFixed(2)}%
                    </span>
                </div>
            `;
        }).join('');

        tickerContent.innerHTML = items + items; // Double for loop
    } catch (e) {
        console.error('Ticker fetch failed', e);
    }
}

fetchTickerData();
setInterval(fetchTickerData, 60000); // Update every minute
</script>
