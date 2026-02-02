/**
 * Tab Switching Logic for Financial Tools
 */
function openCalc(calcName) {
    // Hide all calculator content
    const contents = document.querySelectorAll('.calc-content');
    contents.forEach(content => content.classList.remove('active'));

    // Deactivate all tab buttons
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the selected calculator and activate the clicked button
    document.getElementById(calcName).classList.add('active');
    event.currentTarget.classList.add('active');
}

/**
 * SIP Growth Calculator Logic
 * Formula: M = P × ({[1 + i]^n – 1} / i) × (1 + i)
 */
function calculateSIP() {
    const P = parseFloat(document.getElementById('sipAmount').value); // Monthly investment
    const annualRate = parseFloat(document.getElementById('sipRate').value); // Expected annual return
    const years = parseFloat(document.getElementById('sipYears').value); // Investment period
    
    if (!P || !annualRate || !years) {
        alert("Please enter valid numbers");
        return;
    }

    const i = (annualRate / 100) / 12; // Monthly interest rate
    const n = years * 12; // Total number of months
    
    const futureValue = P * (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
    const totalInvested = P * n;
    const wealthGained = futureValue - totalInvested;

    document.getElementById('sipResult').innerHTML = `
        <div style="font-size: 0.9rem; opacity: 0.8;">Expected Wealth</div>
        <div style="font-size: 1.5rem; margin: 5px 0;">₹${Math.round(futureValue).toLocaleString('en-IN')}</div>
        <div style="font-size: 0.8rem; color: #27ae60;">Wealth Gained: ₹${Math.round(wealthGained).toLocaleString('en-IN')}</div>
    `;
}

/**
 * Risk Appetite Assessment Logic
 * Scores the user based on Goal and Market Reaction
 */
function calculateRisk() {
    const goalScore = parseInt(document.getElementById('riskGoal').value);
    const reactionScore = parseInt(document.getElementById('riskReaction').value);
    const totalScore = goalScore + reactionScore;
    
    let profile = "";
    let description = "";

    if (totalScore <= 2) {
        profile = "Conservative";
        description = "Focus on Debt & Capital Protection.";
    } else if (totalScore <= 4) {
        profile = "Moderate";
        description = "Balanced mix of Equity and Debt.";
    } else {
        profile = "Aggressive";
        description = "High Equity exposure for maximum growth.";
    }

    document.getElementById('riskResult').innerHTML = `
        <div style="font-size: 0.9rem; opacity: 0.8;">Your Investment Profile</div>
        <div style="font-size: 1.4rem; color: #C5A059; margin: 5px 0;">${profile}</div>
        <div style="font-size: 0.85rem;">Strategy: ${description}</div>
    `;
}

/**
 * Lead Generation Form Handling
 */
document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    
    // Aesthetic confirmation
    alert(`Thank you, ${name}! Your interest in ${service} has been recorded. Our IIM Alumni experts will contact you shortly.`);
    
    this.reset();
});

/**
 * Smooth Scroll for Navigation Links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (
