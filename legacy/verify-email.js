// Focus auto-advance on verification inputs
const inputs = document.querySelectorAll('.verify-input');

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        // Only accept single digit
        if (e.target.value.length > 1) {
            e.target.value = e.target.value.slice(0, 1);
        }
        
        // Move to next input
        if (e.target.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        // Allow backspace to go to previous input
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputs[index - 1].focus();
        }
        
        // Allow arrow navigation
        if (e.key === 'ArrowLeft' && index > 0) {
            inputs[index - 1].focus();
        }
        if (e.key === 'ArrowRight' && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
});

// Focus first input on load
if (inputs.length > 0) {
    inputs[0].focus();
}

// Verify email function
function verifyEmail() {
    const code = Array.from(inputs).map(input => input.value).join('');
    
    if (code.length !== 6) {
        alert('Please enter all 6 digits');
        return;
    }
    
    // Simulate verification
    const btn = document.getElementById('verify-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="ph ph-spinner"></i> Verifying...';
    
    setTimeout(() => {
        // Save verification status
        const user = JSON.parse(localStorage.getItem('swj_user') || '{}');
        user.emailVerified = true;
        localStorage.setItem('swj_user', JSON.stringify(user));
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    }, 1500);
}

// Resend code function
function resendCode(e) {
    e.preventDefault();
    
    const link = e.target;
    const originalText = link.textContent;
    link.textContent = 'Code sent!';
    link.style.color = '#10b981';
    
    setTimeout(() => {
        link.textContent = originalText;
        link.style.color = '';
    }, 3000);
}

// Check if user is logged in
document.addEventListener('DOMContentLoaded', () => {
    try {
        const user = localStorage.getItem('swj_user');
        if (!user) {
            window.location.href = 'login.html';
        }
    } catch(e) {
        window.location.href = 'login.html';
    }
});
