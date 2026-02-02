/**
 * Krishna Vriddhi Capital - Interactive Tools Logic
 */

// --- 1. RISK APPETITE QUIZ LOGIC ---
let riskPoints = 0;

function nextStep(step, val) {
    // Add points from the clicked answer
    riskPoints += val;
    
    // Hide the current question step
    document.getElementById('step' + step).style.display = 'none';
    
    // Determine if we show the next question or the final result
    if (step < 3) {
        document.getElementById('step' + (step + 1)).style.display = 'block';
    } else {
        const resBox = document.getElementById('risk-result');
        const typeText = document.getElementById('p-type');
        const descText = document.getElementById('p-desc');
        
        resBox.style.display = 'block';
        
        // Logical outcomes based on total points
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
    // Grab user inputs
    const P = parseFloat(document.getElementById('monthlyInv').value);
    const annualRate = parseFloat(document.getElementById('returns').value);
    const years = parseFloat(document.getElementById('years').value);

    // Validation
    if (!P || !annualRate || !years) {
        alert("Please enter all financial details.");
        return;
    }

    // Calculation Constants
    const r = (annualRate / 100) / 12; // Monthly interest rate
    const n = years * 12;              // Total number of months

    // SIP Formula: M = P × ({[1 + i]^n – 1} / i) × (1 + i)
    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    
    // Display result with Indian Number Formatting
    const resultDiv = document.getElementById('resultBox');
    const displayValue = document.getElementById('sipResult');
    
    resultDiv.style.display = 'block';
    displayValue.innerText = "₹" + Math.round(futureValue).toLocaleString('en-IN');
}
