// Simple Form Handling
document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    // In a real scenario, this would send data to a server
    alert(`Thank you ${name}! Our IIM Alumni experts will contact you on ${phone} shortly.`);
    
    this.reset();
});

// Navigation Highlight on Scroll
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll("section, header");
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });
});
