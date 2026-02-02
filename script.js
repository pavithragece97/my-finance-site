// --- Risk Assessment Logic ---
let score = 0;
function handleRisk(step, val) {
    score += val;
    document.getElementById('q-step-' + step).style.display = 'none';
    if (step < 3) {
        document.getElementById('q-step-' + (step + 1)).style.display = 'block';
    } else {
        const res = document.getElementById('risk-res');
        res.style.display = 'block';
        const type = document.getElementById('res-type');
        const desc = document.getElementById('res-desc');
        if (score <= 6) { type.innerText = "Conservative"; desc.innerText = "Prioritize safety. Debt and FDs are ideal."; }
        else if (score <= 11) { type.innerText = "Moderate"; desc.innerText = "Balanced growth with mixed Equity and Debt."; }
        else { type.innerText = "Aggressive"; desc.innerText = "High-growth focus. Equity and PMS are suitable."; }
    }
}
function resetRisk() {
    score = 0;
    document.getElementById('risk-res').style.display = 'none';
    document.getElementById('q-step-1').style.display = 'block';
    document.getElementById('q-step-2').style.display = 'none';
    document.getElementById('q-step-3').style.display = 'none';
}

// --- SIP Calculator Logic ---
function runSip() {
    const P = parseFloat(document.getElementById('sip-amt').value);
    const r = (parseFloat(document.getElementById('sip-rate').value) / 100) / 12;
    const n = parseFloat(document.getElementById('sip-years').value) * 12;
    if (isNaN(P) || isNaN(r) || isNaN(n)) { alert("Check your inputs!"); return; }
    const fv = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    document.getElementById('sip-res-box').style.display = 'block';
    document.getElementById('sip-val').innerText = "₹" + Math.round(fv).toLocaleString('en-IN');
}

// --- Form Handling ---
document.getElementById('leadForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Inquiry Received! We will contact you shortly.");
    this.reset();
});
