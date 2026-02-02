function scrollToPage(pageId) {
    document.getElementById(pageId).scrollIntoView({ behavior: 'smooth' });
}

function calculateSIP() {
    const p = parseFloat(document.getElementById('sip-p').value);
    const r = parseFloat(document.getElementById('sip-r').value) / 100 / 12;
    const n = parseFloat(document.getElementById('sip-n').value) * 12;
    if (isNaN(p) || isNaN(r) || isNaN(n)) {
        document.getElementById('sip-result').innerText = "Enter valid numbers";
        return;
    }
    const fv = p * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    document.getElementById('sip-result').innerHTML = `Projected: ₹${Math.round(fv).toLocaleString('en-IN')}`;
}

function calculateRisk() {
    const total = parseInt(document.getElementById('risk-goal').value) + parseInt(document.getElementById('risk-react').value);
    let p = total <= 2 ? "CONSERVATIVE" : total <= 4 ? "MODERATE" : "AGGRESSIVE";
    document.getElementById('risk-result').innerHTML = `PROFILE: ${p}`;
}

document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Inquiry Registered. We will contact you shortly.");
    this.reset();
});
