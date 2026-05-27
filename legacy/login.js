let loginMethod = 'email';
let regMethod   = 'email';
let forgotMethod = 'email';

function getToastBox() {
    let box = document.getElementById('toast-box');
    if (!box) {
        box = document.createElement('div');
        box.id = 'toast-box';
        box.className = 'toast-box';
        document.body.appendChild(box);
    }
    return box;
}

function showToast(msg, type = 'success') {
    const colors = { success:'#10b981', error:'#ef4444', info:'#06b6d4' };
    const icons  = { success:'ph-check-circle', error:'ph-warning-circle', info:'ph-info-bold' };
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML =
        `<i class="ph-fill ${icons[type]}" style="color:${colors[type]};font-size:20px;flex-shrink:0;"></i>` +
        `<span>${msg}</span>`;
    getToastBox().appendChild(t);
    setTimeout(() => t.remove(), 3800);
}

function switchTab(tab) {
    const isReg = tab === 'register';
    document.getElementById('tab-login').classList.toggle('active', !isReg);
    document.getElementById('tab-register').classList.toggle('active', isReg);
    document.getElementById('form-login').classList.toggle('hidden', isReg);
    document.getElementById('form-register').classList.toggle('hidden', !isReg);
    clearAll();
}

function setMethod(form, method) {
    if (form === 'login') {
        loginMethod = method;
        document.getElementById('lm-email').classList.toggle('active', method === 'email');
        document.getElementById('lm-mobile').classList.toggle('active', method === 'mobile');
        document.getElementById('lm-username').classList.toggle('active', method === 'username');
        document.getElementById('l-email-fg').classList.toggle('hidden', method !== 'email');
        document.getElementById('l-mob-fg').classList.toggle('hidden', method !== 'mobile');
        document.getElementById('l-user-fg').classList.toggle('hidden', method !== 'username');
        clearErr('l-email'); clearErr('l-mob'); clearErr('l-user');
    } else {
        regMethod = method;
        document.getElementById('rm-email').classList.toggle('active', method === 'email');
        document.getElementById('rm-mobile').classList.toggle('active', method === 'mobile');
        document.getElementById('r-email-fg').classList.toggle('hidden', method !== 'email');
        document.getElementById('r-mob-fg').classList.toggle('hidden', method !== 'mobile');
        clearErr('r-email'); clearErr('r-mob');
    }
}

function setForgotMethod(method) {
    forgotMethod = method;
    document.getElementById('fm-email').classList.toggle('active', method === 'email');
    document.getElementById('fm-mobile').classList.toggle('active', method === 'mobile');
    document.getElementById('fm-email-fg').classList.toggle('hidden', method !== 'email');
    document.getElementById('fm-mobile-fg').classList.toggle('hidden', method !== 'mobile');
    clearErr('fm-email'); clearErr('fm-mobile');
}

function togglePwd(id, btn) {
    const inp = document.getElementById(id);
    const vis = inp.type === 'text';
    inp.type = vis ? 'password' : 'text';
    btn.querySelector('i').className = vis ? 'ph ph-eye' : 'ph ph-eye-slash';
}

function calcStrength(v) {
    const wrap = document.getElementById('str-wrap');
    const bar  = document.getElementById('str-bar');
    const lbl  = document.getElementById('str-lbl');
    if (!v) { wrap.classList.remove('show'); lbl.textContent = ''; return; }
    wrap.classList.add('show');
    let sc = 0;
    if (v.length >= 8)           sc++;
    if (/[A-Z]/.test(v))         sc++;
    if (/[0-9]/.test(v))         sc++;
    if (/[^A-Za-z0-9]/.test(v))  sc++;
    const lvls = [
        { w:'20%', c:'#ef4444', t:'Too weak',   tc:'#f87171' },
        { w:'40%', c:'#f97316', t:'Weak',        tc:'#fb923c' },
        { w:'60%', c:'#eab308', t:'Fair',        tc:'#fde047' },
        { w:'80%', c:'#22c55e', t:'Strong',      tc:'#4ade80' },
        { w:'100%',c:'#10b981', t:'Very strong', tc:'#34d399' },
    ];
    const l = lvls[Math.min(sc, 4)];
    bar.style.width = l.w; bar.style.background = l.c;
    lbl.textContent = l.t; lbl.style.color = l.tc;
    updatePwdRequirements(v);
}

function updatePwdRequirements(pwd) {
    const reqs = [
        { id: 'req-len', test: pwd.length >= 8 },
        { id: 'req-upper', test: /[A-Z]/.test(pwd) },
        { id: 'req-lower', test: /[a-z]/.test(pwd) },
        { id: 'req-num', test: /[0-9]/.test(pwd) },
        { id: 'req-spec', test: /[!@#$%^&*\-_+=[\]{}|;:'",.<>?/\\~`]/.test(pwd) }
    ];
    reqs.forEach(req => {
        const el = document.getElementById(req.id);
        if (el) el.classList.toggle('met', req.test);
    });
}

function validatePwdMatch(pwd, cpwd) {
    const cpwdEl = document.getElementById('r-cpwd');
    if (pwd && cpwd && pwd === cpwd) {
        cpwdEl.classList.remove('err');
        clearErr('r-cpwd');
        return true;
    } else if (cpwd && pwd !== cpwd) {
        setErr('r-cpwd', 'Passwords do not match');
        return false;
    }
    return true;
}

function setErr(id, msg) {
    const e = document.getElementById(id + '-err');
    const i = document.getElementById(id);
    if (e) e.textContent = msg;
    if (i) i.classList.toggle('err', !!msg);
}
function clearErr(id) { setErr(id, ''); }
function clearAll() {
    ['l-email','l-mob','l-pwd','r-name','r-email','r-mob','r-pwd','r-cpwd'].forEach(clearErr);
}

const gmailRe  = /^[a-zA-Z0-9._%+\-]+@gmail\.com$/;
const mobileRe = /^\d{10}$/;

function handleAuth(e, type) {
    e.preventDefault();
    clearAll();
    let ok = true;

    if (type === 'login') {
        if (loginMethod === 'email') {
            const v = document.getElementById('l-email').value.trim();
            if (!v)                  { setErr('l-email', 'Gmail address is required.'); ok = false; }
            else if (!gmailRe.test(v)) { setErr('l-email', 'Must be a valid @gmail.com address.'); ok = false; }
        } else if (loginMethod === 'mobile') {
            const v = document.getElementById('l-mob').value.trim();
            if (!v)                   { setErr('l-mob', 'Mobile number is required.'); ok = false; }
            else if (!mobileRe.test(v)) { setErr('l-mob', 'Enter a valid 10-digit mobile number.'); ok = false; }
        } else if (loginMethod === 'username') {
            const v = document.getElementById('l-user').value.trim();
            if (!v)                   { setErr('l-user', 'Username is required.'); ok = false; }
            else if (v.length < 3)     { setErr('l-user', 'Username must be at least 3 characters.'); ok = false; }
        }
        const p = document.getElementById('l-pwd').value;
        if (!p)          { setErr('l-pwd', 'Password is required.'); ok = false; }
        else if (loginMethod !== 'username' && p.length < 8) { setErr('l-pwd', 'Password must be at least 8 characters.'); ok = false; }
        else if (loginMethod === 'username' && p.length < 1) { setErr('l-pwd', 'Password is required.'); ok = false; }
        if (!ok) return;
        doSubmit('login', {
            id: loginMethod === 'email'
                ? document.getElementById('l-email').value.trim()
                : loginMethod === 'mobile'
                ? document.getElementById('l-mob').value.trim()
                : document.getElementById('l-user').value.trim(),
            method: loginMethod,
            password: document.getElementById('l-pwd').value,
            remember: document.getElementById('l-remember').checked
        });
    } else {
        const name = document.getElementById('r-name').value.trim();
        if (!name) { setErr('r-name', 'Full name is required.'); ok = false; }

        if (regMethod === 'email') {
            const v = document.getElementById('r-email').value.trim();
            if (!v)                  { setErr('r-email', 'Gmail address is required.'); ok = false; }
            else if (!gmailRe.test(v)) { setErr('r-email', 'Must be a valid @gmail.com address.'); ok = false; }
        } else {
            const v = document.getElementById('r-mob').value.trim();
            if (!v)                   { setErr('r-mob', 'Mobile number is required.'); ok = false; }
            else if (!mobileRe.test(v)) { setErr('r-mob', 'Enter a valid 10-digit mobile number.'); ok = false; }
        }
        const p = document.getElementById('r-pwd').value;
        if (!p)          { setErr('r-pwd', 'Password is required.'); ok = false; }
        else if (p.length < 8) { setErr('r-pwd', 'Password must be at least 8 characters.'); ok = false; }
        else if (!/[A-Z]/.test(p)) { setErr('r-pwd', 'Password must contain at least one uppercase letter.'); ok = false; }
        else if (!/[0-9]/.test(p)) { setErr('r-pwd', 'Password must contain at least one number.'); ok = false; }
        
        const cp = document.getElementById('r-cpwd').value;
        if (!cp) { setErr('r-cpwd', 'Please confirm your password.'); ok = false; }
        else if (p !== cp) { setErr('r-cpwd', 'Passwords do not match.'); ok = false; }

        if (!document.getElementById('r-terms').checked) {
            showToast('You must agree to the Terms of Service', 'error');
            ok = false;
        }

        if (!ok) return;
        doSubmit('register', {
            name,
            id: regMethod === 'email'
                ? document.getElementById('r-email').value.trim()
                : document.getElementById('r-mob').value.trim(),
            method: regMethod
        });
    }
}

function doSubmit(type, data) {
    const btn  = document.getElementById(type === 'login' ? 'l-sub' : 'r-sub');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<span style="display:inline-block;animation:spin .7s linear infinite">⟳</span> &nbsp;Processing…';
    btn.disabled  = true;
    if (!document.getElementById('_sp')) {
        const s = document.createElement('style');
        s.id = '_sp';
        s.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
        document.head.appendChild(s);
    }
    setTimeout(() => {
        // Check for admin credentials
        let target = 'index.html';
        if (type === 'login' && data.method === 'username' && data.id === 'admin' && data.password === 'admin') {
            // Admin login
            const adminUser = {
                id: 'admin_001',
                name: 'Admin',
                username: 'admin',
                email: 'admin@skillwithjigs.com',
                role: 'super_admin',
                createdAt: new Date().toISOString()
            };
            try { localStorage.setItem('swj_admin', JSON.stringify(adminUser)); } catch(_) {}
            target = 'admin.html';
            showToast('👮 Admin Access Granted! Redirecting…', 'success');
        } else {
            const user = {
                name: data.name || 'SkillWithJigs User',
                identifier: data.id,
                method: data.method,
                tokens: type === 'register' ? 200 : 150,
                joinedAt: new Date().toISOString(),
                remember: data.remember || false
            };
            try { localStorage.setItem('swj_user', JSON.stringify(user)); } catch(_) {}
            showToast(
                type === 'login' ? '👋 Welcome back! Redirecting…' : '🚀 Account created! 50 bonus tokens awarded.',
                'success'
            );
            if (type === 'register') {
                target = 'success.html'; // Redirect to success page after registration
            } else {
                try { target = JSON.parse(localStorage.getItem('swj_pending') || '{}').url || 'index.html'; } catch(_) {}
            }
        }
        setTimeout(() => { window.location.href = target; }, 1300);
    }, 1100);
}

function openForgotModal(e) {
    e.preventDefault();
    document.getElementById('forgot-modal').classList.add('show');
}

function closeForgotModal() {
    document.getElementById('forgot-modal').classList.remove('show');
    clearErr('fm-email');
    clearErr('fm-mobile');
}

function handleForgotPassword() {
    clearErr('fm-email');
    clearErr('fm-mobile');
    let ok = true;
    let identifier = '';

    if (forgotMethod === 'email') {
        const v = document.getElementById('fm-email-inp').value.trim();
        if (!v) { setErr('fm-email', 'Email is required.'); ok = false; }
        else if (!gmailRe.test(v)) { setErr('fm-email', 'Invalid email address.'); ok = false; }
        identifier = v;
    } else {
        const v = document.getElementById('fm-mobile-inp').value.trim();
        if (!v) { setErr('fm-mobile', 'Mobile number is required.'); ok = false; }
        else if (!mobileRe.test(v)) { setErr('fm-mobile', 'Invalid mobile number.'); ok = false; }
        identifier = v;
    }

    if (!ok) return;

    const btn = event.target;
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<span style="display:inline-block;animation:spin .7s linear infinite">⟳</span> Sending…';
    btn.disabled = true;

    setTimeout(() => {
        showToast('✓ Reset link sent to ' + identifier, 'success');
        closeForgotModal();
        btn.innerHTML = originalHTML;
        btn.disabled = false;
    }, 1200);
}

function handleSocial(provider) {
    const messages = {
        google: 'Connecting with Google…',
        github: 'Connecting with GitHub…',
        microsoft: 'Connecting with Microsoft…',
        facebook: 'Connecting with Facebook…'
    };
    showToast(messages[provider] || 'Connecting…', 'info');
    // Add actual OAuth integration here
}

document.addEventListener('DOMContentLoaded', () => {
    // Setup logo link to profile if user is logged in
    const logoLink = document.querySelector('.nav-logo');
    const user = localStorage.getItem('swj_user');
    
    if (logoLink) {
        if (user) {
            logoLink.href = 'profile.html';
            logoLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'profile.html';
            });
        } else {
            logoLink.href = 'index.html';
            logoLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'index.html';
            });
        }
    }
    
    const rp = document.getElementById('r-pwd');
    const rcp = document.getElementById('r-cpwd');
    const glassCard = document.querySelector('.glass-card');
    const pageCenter = document.querySelector('.page-center');
    
    // Create purple glow element behind the card
    if (pageCenter) {
        const purpleGlow = document.createElement('div');
        purpleGlow.className = 'purple-glow-back';
        purpleGlow.style.cssText = `
            position: fixed;
            width: 800px;
            height: 600px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: radial-gradient(ellipse 800px 600px at center, rgba(124,111,255,0.2) 0%, rgba(167,139,250,0.1) 20%, transparent 70%);
            border-radius: 50%;
            filter: blur(60px);
            pointer-events: none;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.6s ease;
        `;
        document.body.insertBefore(purpleGlow, pageCenter);
        
        // Track cursor position for glow effect
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            pageCenter.style.setProperty('--mouse-x', x + '%');
            pageCenter.style.setProperty('--mouse-y', y + '%');
        });
        
        // Control purple glow on card hover
        if (glassCard) {
            glassCard.addEventListener('mouseenter', () => {
                purpleGlow.style.opacity = '1';
                purpleGlow.style.animation = 'backGlowPulse 2.5s ease-in-out infinite';
            });
            
            glassCard.addEventListener('mouseleave', () => {
                purpleGlow.style.opacity = '0';
                purpleGlow.style.animation = 'none';
            });
        }
    }

    // Card hover effect with interactive elements
    if (glassCard) {
        glassCard.addEventListener('mouseenter', () => {
            glassCard.style.willChange = 'transform, box-shadow, border-color, background';
        });

        glassCard.addEventListener('mouseleave', () => {
            glassCard.style.willChange = 'auto';
        });

        // Add subtle cursor tracking effect
        glassCard.addEventListener('mousemove', (e) => {
            const rect = glassCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Create subtle tilt effect
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            const xRotate = (yPercent - 50) * 0.05;
            const yRotate = (50 - xPercent) * 0.05;
            
            glassCard.style.transform = `translateY(-8px) scale(1.01) rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
        });

        glassCard.addEventListener('mouseleave', () => {
            glassCard.style.transform = 'translateY(-8px) scale(1.01) rotateX(0deg) rotateY(0deg)';
        });
    }
    
    if (rp) {
        rp.addEventListener('input', () => {
            calcStrength(rp.value);
            if (rcp && rcp.value) validatePwdMatch(rp.value, rcp.value);
        });
    }

    if (rcp) {
        rcp.addEventListener('input', () => {
            if (rp) validatePwdMatch(rp.value, rcp.value);
        });
    }

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeForgotModal();
    });

    // Check if user is logged in and show profile
    try {
        const user = localStorage.getItem('swj_user');
        if (user) {
            const userData = JSON.parse(user);
            const navProfile = document.getElementById('nav-profile');
            const profileName = document.getElementById('profile-name');
            const profileUserBtn = document.getElementById('profile-user-btn');
            const profileUserName = document.getElementById('profile-user-name');
            
            if (navProfile) navProfile.style.display = 'flex';
            if (profileName) profileName.textContent = userData.name || 'User';
            
            // Show profile user button
            if (profileUserBtn) {
                profileUserBtn.style.display = 'flex';
                if (profileUserName) profileUserName.textContent = userData.name || 'SkillWithJigs User';
                
                profileUserBtn.addEventListener('click', () => {
                    window.location.href = 'profile.html';
                });
            }
            
            // Profile dropdown toggle
            const profileBtn = document.getElementById('profile-btn');
            const profileDropdown = document.getElementById('profile-dropdown');
            
            if (profileBtn && profileDropdown) {
                profileBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    profileDropdown.classList.toggle('active');
                });

                document.addEventListener('click', (e) => {
                    if (!e.target.closest('.nav-profile')) {
                        profileDropdown.classList.remove('active');
                    }
                });

                const logoutBtn = document.getElementById('logout-btn');
                if (logoutBtn) {
                    logoutBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        localStorage.removeItem('swj_user');
                        location.reload();
                    });
                }
            }
        }
    } catch(_) {}

    try {
        if (localStorage.getItem('swj_user')) {
            const p = JSON.parse(localStorage.getItem('swj_pending') || '{}');
            window.location.href = p.url || 'index.html';
        }
    } catch(_) {}
});
