// Tab Switching Logic
function openCalc(calcName) {
    document.querySelectorAll('.calc-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(calcName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// SIP Calculator Logic
function calculateSIP() {
    const P = parseFloat(document.getElementById('sipAmount').value);
    const annualRate = parseFloat(document.getElementById('sipRate').value);
    const years = parseFloat(document.getElementById('sipYears').value);
    
    const i = (annualRate / 100) / 12;
    const n = years * 12;
    
    // SIP Formula: M = P × ({[1 + i]^n – 1} / i) × (1 + i)
    const futureValue = P * (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
    const invested = P * n;
    const wealthGained = futureValue - invested;

    document.getElementById('sipResult').innerHTML = `
        <p>Total Value: ₹${Math.round(futureValue).toLocaleString()}</p>
        <small>Wealth Gained: ₹${Math.round(wealthGained).toLocaleString()}</small>
    `;
}

// Risk Calculator Logic
function calculateRisk() {
    const goal = document.getElementById('riskGoal').value;
    const reaction = document.getElementById('riskReaction').value;
    const score = parseInt(goal) + parseInt(reaction);
    
    let profile = "";
    if(score <= 2) profile = "Conservative (Debt/Gold)";
    else if(score <= 4) profile = "Moderate (Hybrid/Index)";
    else profile = "Aggressive (Equity/Small Cap)";

    document.getElementById('riskResult').innerHTML = `Your Profile: <strong>${profile}</strong>`;
}

// Form Alert
document.getElementById('inquiryForm').onsubmit = (e) => {
    e.preventDefault();
    alert("Thank you! An IIM Alumni expert will reach out to you shortly.");
};
