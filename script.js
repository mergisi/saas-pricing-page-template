document.addEventListener('DOMContentLoaded', function() {
    const billingToggle = document.getElementById('billing-toggle');
    const monthlyButtons = document.querySelectorAll('.monthly-button');
    const yearlyButtons = document.querySelectorAll('.yearly-button');
    const planPrices = document.querySelectorAll('.plan-price');
    const billingInfos = document.querySelectorAll('.billing-info span:last-child');

    const monthlyPrices = ['$19 /mo', '$49 /mo', '$99 /mo'];
    const yearlyPrices = ['$190 /yr', '$490 /yr', '$990 /yr'];

    function updatePricing(isYearly) {
        planPrices.forEach((el, index) => {
            el.textContent = isYearly ? yearlyPrices[index] : monthlyPrices[index];
        });

        billingInfos.forEach(el => {
            el.textContent = isYearly ? 'Billed Yearly' : 'Billed Monthly';
        });

        monthlyButtons.forEach(btn => {
            btn.style.display = isYearly ? 'none' : 'block';
        });

        yearlyButtons.forEach(btn => {
            btn.style.display = isYearly ? 'block' : 'none';
        });
    }

    billingToggle.addEventListener('change', function() {
        updatePricing(this.checked);
    });

    // Add click event listeners to all CTA buttons
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            
            // Visual feedback
            this.style.backgroundColor = '#2980b9';
            
            // Trigger confetti
            triggerConfetti();
            
            console.log(`Signed up for ${plan} plan`);
            
            // Here you would typically send this information to your backend
            // or trigger a sign-up process
        });
    });

    // Function to trigger confetti
    function triggerConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    // Trigger confetti when the page loads
    triggerConfetti();
});
