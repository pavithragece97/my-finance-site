function calculateSIP() {
    const monthlyInv = parseFloat(document.getElementById('monthlyInv').value);
    const annualRate = parseFloat(document.getElementById('returns').value);
    const years = parseFloat(document.getElementById('years').value);

    if (!monthlyInv || !annualRate || !years) {
        alert("Please enter all details to see your wealth growth.");
        return;
    }

    const i = (annualRate / 100) / 12; // Monthly interest
    const n = years * 12; // Total months

    // SIP Formula
    const futureValue = monthlyInv * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    
    const resultBox = document.getElementById('resultBox');
    const resultDisplay = document.getElementById('sipResult');
    
    resultBox.style.display = 'block';
    resultDisplay.innerHTML = "₹" + Math.round(futureValue).toLocaleString('en-IN');
}

