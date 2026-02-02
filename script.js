// RISK QUIZ LOGIC
let score = 0;
function nextStep(step, val) {
    score += val;
    document.getElementById('step' + step).style.display = 'none';
    if (step < 3) {
        document.getElementById('step' + (step + 1)).style.display = 'block';
    } else {
        showResult();
    }
}
function showResult() {
    const res = document.getElementById('risk-result');
    const type = document.getElementById('profile-type');
    const desc = document.getElementById('profile-desc');
    res.style.display = 'block';
    if (score <= 6) {
        type.innerText = "Conservative";
        desc.innerText = "You value capital safety. Focus on Debt Mutual Funds and FDs.";
    } else if (score <= 11) {
        type.innerText = "Moderate";
        desc.innerText = "A balanced approach of Equity and Debt is best for you.";
    } else {
        type.innerText = "Aggressive";
        desc.innerText = "You seek high growth. Focused Equity portfolios are suitable.";
    }
}
function resetQuiz() {
    score = 0;
    document.getElementById('risk-result').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'none';
}

// SIP CALCULATOR LOGIC
function calculateSIP() {
    let P = parseFloat(document.getElementById('monthlyInv').value);
    let r = (parseFloat(document.getElementById('returns').value) / 100) / 12;
    let n = parseFloat(document.getElementById('years').value) * 12;
    let fv = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    document.getElementById('resultBox').style.display = 'block';
    document.getElementById('sipResult').innerText = "₹" + Math.round(fv).toLocaleString('en-IN');
}
