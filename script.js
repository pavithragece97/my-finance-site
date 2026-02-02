/**
 * Smooth Navigation between Sections
 */
function scrollToPage(pageId) {
    document.getElementById(pageId).scrollIntoView({ behavior: 'smooth' });
}

/**
 * SIP Compound Growth Formula
 */
function calculateSIP() {
    const p = parseFloat(document.getElementById('sip-p').value);
    const r = parseFloat(document.getElementById('sip-r').value) / 100 / 12;
    const n = parseFloat(document.getElementById('sip-n').value) * 12;

    if (isNaN(p) || isNaN(r) || isNaN(n)) {
        document.getElementById('sip-result').innerText = "Please enter valid numbers";
        return;
    }

    const futureValue = p * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    document.getElementById('sip-result').innerHTML = 
        `Projected: ₹${Math.round(futureValue).toLocaleString('en-IN')}`;
}

/**
 * Basic Risk Profile Logic
 */
function calculateRisk() {
    const goal = parseInt(document.getElementById('risk-goal').value);
    const react = parseInt(document.getElementById('risk-react').value);
    const total = goal + react;

    let profile = total <= 2 ? "CONSERVATIVE" : total <= 4 ? "MODERATE" : "AGGRESSIVE";
    document.getElementById('risk-result').innerHTML = `PROFILE: ${profile}`;
}

/**
 * Basic Inquiry Form Handler
 */
document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Inquiry Registered. An IIM expert will contact you shortly.");
    this.reset();
});
