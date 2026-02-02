let quizScore = 0;

function nextStep(currentStep, value) {
    // Add the score
    quizScore += value;
    
    // Hide current question
    document.getElementById('step' + currentStep).style.display = 'none';
    
    // Show next question or results
    if (currentStep < 3) {
        document.getElementById('step' + (currentStep + 1)).style.display = 'block';
    } else {
        showRiskResult();
    }
}

function showRiskResult() {
    const resultArea = document.getElementById('risk-result');
    const typeText = document.getElementById('profile-type');
    const descText = document.getElementById('profile-desc');
    
    resultArea.style.display = 'block';
    
    if (quizScore <= 6) {
        typeText.innerText = "Conservative";
        descText.innerText = "You prioritize safety. We recommend Debt funds and Gold.";
    } else if (quizScore <= 11) {
        typeText.innerText = "Moderate";
        descText.innerText = "A balanced approach of Equity and Debt is best for you.";
    } else {
        typeText.innerText = "Aggressive";
        descText.innerText = "You seek high growth. Focused Equity portfolios are ideal.";
    }
}

function resetQuiz() {
    quizScore = 0;
    document.getElementById('risk-result').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'none';
}

function calculateSIP() {
    let P = parseFloat(document.getElementById('monthlyInv').value);
    let r = (parseFloat(document.getElementById('returns').value) / 100) / 12;
    let n = parseFloat(document.getElementById('years').value) * 12;
    let fv = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    
    document.getElementById('resultBox').style.display = 'block';
    document.getElementById('sipResult').innerText = "₹" + Math.round(fv).toLocaleString('en-IN');
}
