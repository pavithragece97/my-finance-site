/**
 * Page Navigation - Exclusive Multi-Page Feel
 */
function navigateTo(pageId) {
    // 1. Hide all views
    const views = document.querySelectorAll('.view');
    views.forEach(view => view.classList.remove('active'));

    // 2. Show the requested view
    const target = document.getElementById('page-' + pageId);
    if (target) {
        target.classList.add('active');
    }

    // 3. Always scroll to top on change
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Tool Tab Switching (SIP vs Risk)
 */
function switchTool(toolType) {
    // Content toggle
    document.querySelectorAll('.tool-content').forEach(c => c.classList.remove('active'));
    document.getElementById('tool-' + toolType).classList.add('active');

    // Button toggle
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + toolType).classList.add('active');
}

/**
 * SIP Calculation Logic
 */
function doSipCalc() {
    const p = parseFloat(document.getElementById('sip-amount').value);
    const r = parseFloat(document.getElementById('sip-rate').value) / 100 / 12;
    const n = parseFloat(document.getElementById('sip-years').value) * 12;

    if (isNaN(p) || isNaN(r) || isNaN(n)) {
        alert("Please enter valid numbers");
        return;
    }

    const m = p * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    document.getElementById('sip-res').innerHTML = `
        <p style="font-size:0.8rem; font-weight:normal; margin-bottom:5px;">Projected Wealth</p>
        <div style="font-size:1.5rem;">₹ ${Math.round(m).toLocaleString('en-IN')}</div>
    `;
}

/**
 * Risk Assessment Logic
 */
function doRiskCalc() {
    const goal = parseInt(document.getElementById('risk-goal').value);
    const react = parseInt(document.getElementById('risk-react').value);
    const total = goal + react;

    let profile = "";
    if (total <= 2) profile = "Conservative (Capital Protection)";
    else if (total <= 4) profile = "Moderate (Balanced Growth)";
    else profile = "Aggressive (Wealth Creation)";

    document.getElementById('risk-res').innerHTML = `
        <p style="font-size:0.8rem; font-weight:normal; margin-bottom:5px;">Your Profile</p>
        <div style="font-size:1.2rem; color:#002147;">${profile}</div>
    `;
}

/**
 * Lead Form Handler
 */
document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('lead-name').value;
    alert(`Thank you ${name}. Your registration is successful. An IIM expert will contact you within 24 hours.`);
    this.reset();
});
