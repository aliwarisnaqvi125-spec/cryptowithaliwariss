<?php include 'includes/header.php'; ?>

<main class="section" style="min-height: 80vh; display: flex; align-items: center;">
    <div class="container">
        <div class="header">
            <span class="badge">Earn & Learn</span>
            <h2 class="title">Free Earn</h2>
            <p class="subtitle">Test your crypto knowledge and unlock exclusive rewards. Complete the quiz to earn your starting bonus.</p>
        </div>

        <div class="quizCard" id="quiz-container">
            <div id="quiz-step-1">
                <span class="questionCount">Question 1 of 3</span>
                <h3 class="questionText">What is the maximum supply of Bitcoin that will ever exist?</h3>
                <div class="optionsGrid">
                    <button class="optionBtn" onclick="nextStep(2)">18 Million</button>
                    <button class="optionBtn" onclick="nextStep(2)">21 Million</button>
                    <button class="optionBtn" onclick="nextStep(2)">100 Million</button>
                    <button class="optionBtn" onclick="nextStep(2)">Unlimited</button>
                </div>
            </div>

            <div id="quiz-step-2" style="display: none;">
                <span class="questionCount">Question 2 of 3</span>
                <h3 class="questionText">What year was the first Bitcoin block (Genesis block) mined?</h3>
                <div class="optionsGrid">
                    <button class="optionBtn" onclick="nextStep(3)">2007</button>
                    <button class="optionBtn" onclick="nextStep(3)">2008</button>
                    <button class="optionBtn" onclick="nextStep(3)">2009</button>
                    <button class="optionBtn" onclick="nextStep(3)">2010</button>
                </div>
            </div>

            <div id="quiz-step-3" style="display: none;">
                <span class="questionCount">Question 3 of 3</span>
                <h3 class="questionText">Who is the legendary creator of Bitcoin?</h3>
                <div class="optionsGrid">
                    <button class="optionBtn" onclick="finishQuiz()">Vitalik Buterin</button>
                    <button class="optionBtn" onclick="finishQuiz()">Elon Musk</button>
                    <button class="optionBtn" onclick="finishQuiz()">Satoshi Nakamoto</button>
                    <button class="optionBtn" onclick="finishQuiz()">Aliwaris</button>
                </div>
            </div>

            <div id="quiz-success" style="display: none; text-align: center;">
                <i data-lucide="trophy" size="80" style="color: var(--secondary); margin-bottom: 1.5rem;"></i>
                <h3 class="rewardTitle">Congratulations!</h3>
                <p style="font-size: 1.25rem; margin-bottom: 1rem;">You've successfully completed the crypto quiz.</p>
                <span class="rewardAmount">earn fee 100$</span>
                
                <div class="withdrawForm" id="withdraw-form">
                    <label class="inputLabel">Enter USDT/BTC Deposit Address</label>
                    <input type="text" id="address" class="addressInput" placeholder="0x... or 1Bv...">
                    <button class="withdrawBtn" onclick="handleWithdraw()">Withdraw 100$ Now</button>
                </div>

                <div id="withdraw-success" style="display: none;" class="feedback">
                    <i data-lucide="check-circle-2"></i>
                    <span>Withdrawal Request Sent Successfully!</span>
                </div>
                
                <button class="resetBtn" onclick="location.reload()">Restart Quiz</button>
            </div>
        </div>
    </div>
</main>

<script>
function nextStep(step) {
    document.getElementById('quiz-step-1').style.display = 'none';
    document.getElementById('quiz-step-2').style.display = 'none';
    document.getElementById('quiz-step-3').style.display = 'none';
    document.getElementById('quiz-step-' + step).style.display = 'block';
}

function finishQuiz() {
    document.getElementById('quiz-step-3').style.display = 'none';
    document.getElementById('quiz-success').style.display = 'block';
    lucide.createIcons();
}

function handleWithdraw() {
    const address = document.getElementById('address').value;
    if (!address) return alert('Please enter an address');
    
    const btn = document.querySelector('.withdrawBtn');
    btn.innerText = 'Processing...';
    btn.disabled = true;

    setTimeout(() => {
        document.getElementById('withdraw-form').style.display = 'none';
        document.getElementById('withdraw-success').style.display = 'flex';
        lucide.createIcons();
    }, 2000);
}
</script>

<?php include 'includes/footer.php'; ?>
