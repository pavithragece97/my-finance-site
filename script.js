/**
 * Krishna Vriddhi Capital - Official Site Logic
 * Includes: Risk Assessment, SIP Calculator, and Appointment Form
 */

// --- 1. RISK APPETITE QUIZ LOGIC ---
let riskPoints = 0;

function nextStep(step, val) {
    // Accumulate points
    riskPoints += val;
    
    // Hide current step
    const currentStep = document.getElementById('step' + step);
    if (currentStep) currentStep.style.display = 'none';
    
    // Show next step or results
    if (step < 3) {
        const next = document.getElementById('step' + (step + 1));
        if (next) next.style.display = 'block';
    } else {
        showRiskResult();
    }
}

function showRiskResult() {
    const resBox = document.getElementById('risk-result');
    const typeText = document.getElementById('p-type');
    const descText = document.getElementById('p-desc');
    
    if (resBox) {
        resBox.style.display = 'block';
        
        if (riskPoints <= 6) {
            typeText.innerText = "Conservative";
            descText.innerText = "You prioritize capital safety. We recommend focusing on Debt instruments, Liquid Funds, and Gold for your portfolio.";
        } else if (riskPoints <= 11) {
            typeText.innerText = "Moderate";
            descText.innerText = "A balanced approach is best for you. A mix of Equity and Debt Mutual Funds provides growth with managed risk.";
        } else {
            typeText.innerText = "Aggressive";
            descText.innerText = "You have a high-growth mindset. Diversified Equity, Mid-caps, and PMS/AIF structures are ideal for your long-term wealth creation.";
        }
    }
}

function resetQuiz() {
    riskPoints = 0;
    document.getElementById('risk-result').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'none';
}


// --- 2. SIP CALCULATOR LOGIC ---
function calculateSIP() {
    const P = parseFloat(document.getElementById('monthlyInv').value);
    const annualRate = parseFloat(document.getElementById('returns').value);
    const years = parseFloat(document.getElementById('years').value);

    if (isNaN(P) || isNaN(annualRate) || isNaN(years)) {
        alert("Please enter valid numerical values.");
        return;
    }

    const r = (annualRate / 100) / 12; // Monthly interest rate
    const n = years * 12;              // Total months

    // SIP Formula: FV = P × ({[1 + i]^n – 1} / i) × (1 + i)
    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    
    const resultDiv = document.getElementById('resultBox');
    const displayValue = document.getElementById('sipResult');
    
    if (resultDiv && displayValue) {
        resultDiv.style.display = 'block';
        displayValue.innerText = "₹" + Math.round(futureValue).toLocaleString('en-IN');
    }
}


// ---
