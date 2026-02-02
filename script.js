let pts = 0;
function nextStep(s, v) {
    pts += v;
    document.getElementById('step' + s).style.display = 'none';
    if (s < 3) { document.getElementById('step' + (s + 1)).style.display = 'block'; }
    else {
        const r = document.getElementById('risk-result');
        r.style.display = 'block';
        const type = document.getElementById('p-type');
        const desc = document.getElementById('p-desc');
        if (pts <= 6) { type.innerText = "Conservative"; desc.innerText = "Safety first. Debt and FDs are ideal."; }
        else if (pts <= 11) { type.innerText = "Moderate"; desc.innerText = "A balanced mix of Equity and Debt."; }
        else { type.innerText = "Aggressive"; desc.innerText = "High-growth Equity portfolios are for you."; }
    }
}
function resetQuiz() {
    pts = 0; document.getElementById('risk-result').style.display = 'none';
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
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Inquiry Sent! Krishna Vriddhi Capital will contact you shortly.");
    this.reset();
});
