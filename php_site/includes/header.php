<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CryptoWithAliwaris - Buy & Sell Crypto</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="images/icon.png">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>
    <?php include 'includes/ticker.php'; ?>
    
    <nav class="navbar">
        <div class="container">
            <a href="index.php" class="logo">
                <i data-lucide="diamond"></i>
                CryptoWithAliwaris
            </a>
            
            <div class="links">
                <a href="market.php" class="navLink">Market</a>
                <a href="blog.php" class="navLink">Blog</a>
                <a href="earn.php" class="navLink">Free Earn</a>
                <a href="about.php" class="navLink">About</a>
                <a href="contact.php" class="navLink">Contact</a>
                <a href="market.php" class="ctaButton">Start Trade</a>
            </div>

            <button class="mobileMenuBtn" onclick="toggleMenu()">
                <i data-lucide="menu"></i>
            </button>
        </div>
    </nav>

    <div id="mobileMenu" class="mobileMenu" style="display: none;">
        <a href="market.php">Market</a>
        <a href="blog.php">Blog</a>
        <a href="earn.php">Free Earn</a>
        <a href="about.php">About</a>
        <a href="contact.php">Contact</a>
    </div>

    <script>
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
        }
    </script>
