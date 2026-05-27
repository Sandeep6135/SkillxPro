// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(8,8,15,0.95)';
        navbar.style.borderBottomColor = 'rgba(124,111,255,0.2)';
    } else {
        navbar.style.background = 'rgba(8,8,15,0.8)';
        navbar.style.borderBottomColor = 'rgba(255,255,255,0.08)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Counter Animation for Hero Stats
const observerCounter = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-value'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current).toLocaleString() + (counter.getAttribute('data-value').length > 2 ? '+' : '+');
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString() + '+';
                    }
                };

                updateCounter();
            });
            observerCounter.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe hero stats
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    observerCounter.observe(heroStats);
};

// Card hover effects
const cards = document.querySelectorAll('.feature-card, .benefit-card, .testimonial-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.willChange = 'transform, box-shadow, border-color, background';
    });

    card.addEventListener('mouseleave', function() {
        this.style.willChange = 'auto';
    });

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        const xRotate = (yPercent - 50) * 0.02;
        const yRotate = (50 - xPercent) * 0.02;

        card.style.transform = `perspective(1000px) rotateX(${xRotate}deg) rotateY(${yRotate}deg) translateZ(10px)`;
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
});

// Skill tags animation
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animation = `fadeInUp 0.6s ease ${index * 0.05}s forwards`;
    tag.style.opacity = '0';

    tag.addEventListener('click', function() {
        this.style.animation = 'none';
        this.offsetHeight; // Trigger reflow
        this.style.animation = 'pulse 0.6s ease';
    });
});

// Check if user is logged in
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Setup logo link
        const logoLink = document.getElementById('nav-logo-link');
        const user = localStorage.getItem('swj_user');
        
        if (logoLink) {
            if (user) {
                logoLink.href = 'profile.html';
            } else {
                logoLink.href = 'index.html';
            }
            
            logoLink.addEventListener('click', (e) => {
                if (user) {
                    e.preventDefault();
                    window.location.href = 'profile.html';
                } else {
                    e.preventDefault();
                    window.location.href = 'index.html';
                }
            });
        }
        
        if (user) {
            const userData = JSON.parse(user);
            // Show profile, hide sign in button
            const navSigninBtn = document.getElementById('nav-signin-btn');
            const navSearch = document.getElementById('nav-search');
            const profileWrapper = document.getElementById('profile-wrapper');
            const profileUserBtn = document.getElementById('profile-user-btn');
            const profileUserName = document.getElementById('profile-user-name');
            const profileDropdown = document.getElementById('profile-dropdown');
            const logoutBtn = document.getElementById('logout-btn');
            
            if (navSigninBtn) navSigninBtn.style.display = 'none';
            if (navSearch) navSearch.style.display = 'flex';
            
            // Show profile wrapper
            if (profileWrapper) {
                profileWrapper.style.display = 'block';
            }
            
            // Show profile user button
            if (profileUserBtn) {
                // Toggle dropdown on button click
                profileUserBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (profileDropdown) {
                        profileDropdown.classList.toggle('active');
                    }
                });
            }
            
            // Logout functionality
            if (logoutBtn) {
                logoutBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    localStorage.removeItem('swj_user');
                    localStorage.removeItem('swj_admin');
                    window.location.href = 'index.html';
                });
            }
            
            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (profileDropdown && !e.target.closest('.profile-wrapper')) {
                    profileDropdown.classList.remove('active');
                }
            });
            
            // Handle all profile links directly
            if (profileDropdown) {
                // Dashboard links
                const dashboardLinks = profileDropdown.querySelectorAll('a[href="dashboard.html"]');
                dashboardLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        profileDropdown.classList.remove('active');
                        window.location.href = 'dashboard.html';
                    });
                });
                
                // Profile links
                const profileLinks = profileDropdown.querySelectorAll('a[href="profile.html"]');
                profileLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        profileDropdown.classList.remove('active');
                        window.location.href = 'profile.html';
                    });
                });
                
                // Settings links
                const settingsLinks = profileDropdown.querySelectorAll('a[href="settings.html"]');
                settingsLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        profileDropdown.classList.remove('active');
                        window.location.href = 'settings.html';
                    });
                });
            }
            
            // Setup search functionality
            const skillSearch = document.getElementById('skill-search');
            const searchDropdown = document.getElementById('search-dropdown');
            
            if (skillSearch && searchDropdown) {
                const availableSkills = [
                    'Python', 'Web Development', 'UI/UX Design', 'Digital Marketing',
                    'English', 'Data Science', 'Photography', 'JavaScript', 'React',
                    'Node.js', 'HTML/CSS', 'Mobile Development', 'Machine Learning',
                    'Graphic Design', 'Video Editing', 'Content Writing', 'SEO',
                    'Database Design', 'DevOps', 'Cloud Computing'
                ];
                
                skillSearch.addEventListener('input', (e) => {
                    const searchValue = e.target.value.toLowerCase();
                    searchDropdown.innerHTML = '';
                    
                    if (searchValue.length > 0) {
                        const results = availableSkills.filter(skill =>
                            skill.toLowerCase().includes(searchValue)
                        ).slice(0, 8);
                        
                        if (results.length > 0) {
                            results.forEach(skill => {
                                const item = document.createElement('div');
                                item.className = 'search-item';
                                item.innerHTML = `<i class="ph ph-book-open"></i> ${skill}`;
                                item.addEventListener('click', () => {
                                    skillSearch.value = skill;
                                    searchDropdown.classList.remove('show');
                                    // You can add navigation to skill details page here
                                    window.location.href = 'dashboard.html#marketplace';
                                });
                                searchDropdown.appendChild(item);
                            });
                            searchDropdown.classList.add('show');
                        } else {
                            const noResults = document.createElement('div');
                            noResults.className = 'search-item';
                            noResults.innerHTML = '<i class="ph ph-magnifying-glass"></i> No skills found';
                            noResults.style.pointerEvents = 'none';
                            noResults.style.color = 'var(--t3)';
                            searchDropdown.appendChild(noResults);
                            searchDropdown.classList.add('show');
                        }
                    } else {
                        searchDropdown.classList.remove('show');
                    }
                });
                
                // Close search dropdown when clicking outside
                document.addEventListener('click', (e) => {
                    if (!e.target.closest('.nav-search')) {
                        searchDropdown.classList.remove('show');
                    }
                });
            }
            
            console.log('User logged in:', userData.name);
        }

        // Check if user is admin and show admin footer link
        const adminUser = localStorage.getItem('swj_admin');
        const adminFooterLink = document.getElementById('admin-footer-link');
        if (adminUser && adminFooterLink) {
            adminFooterLink.style.display = 'flex';
        }
    } catch(e) {
        console.log('No user data');
    }

    // Add pulse animation
    if (!document.getElementById('_anim')) {
        const style = document.createElement('style');
        style.id = '_anim';
        style.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
        `;
        document.head.appendChild(style);
    }
});

// Navbar toggle for mobile (prepare for mobile nav)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
        }
    });
}

// Button hover effects
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.willChange = 'transform, box-shadow';
    });

    btn.addEventListener('mouseleave', function() {
        this.style.willChange = 'auto';
    });
});

// Log page loads for analytics (in production)
console.log('SkillWithJigs Homepage Loaded');

// FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all other items
        document.querySelectorAll('.faq-item.active').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
        
        // Toggle current item
        faqItem.classList.toggle('active');
    });
});

// Newsletter Subscription
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletter-email');
        
        if (email.value) {
            // Save to localStorage (in production, send to server)
            const subscribers = JSON.parse(localStorage.getItem('swj_subscribers') || '[]');
            if (!subscribers.includes(email.value)) {
                subscribers.push(email.value);
                localStorage.setItem('swj_subscribers', JSON.stringify(subscribers));
            }
            
            // Show success
            const btn = newsletterForm.querySelector('.btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="ph ph-check-circle"></i> Subscribed!';
            btn.style.background = 'rgba(16,185,129,0.8)';
            
            email.value = '';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
            }, 3000);
        }
    });
}

// ========== TOKEN PURCHASE FUNCTIONALITY ==========
let selectedTokenPackage = null;

function openTokenPurchaseModal() {
    const modal = document.getElementById('tokenPurchaseModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeTokenPurchaseModal() {
    const modal = document.getElementById('tokenPurchaseModal');
    if (modal) {
        modal.classList.remove('active');
    }
    // Reset selections
    selectedTokenPackage = null;
    document.querySelectorAll('.token-package').forEach(pkg => {
        pkg.classList.remove('selected');
    });
    document.getElementById('token-summary').style.display = 'none';
    document.getElementById('custom-token-count').value = '';
}

function selectTokenPackage(tokens, price) {
    selectedTokenPackage = { tokens, price };
    
    // Update UI
    document.querySelectorAll('.token-package').forEach(pkg => {
        pkg.classList.remove('selected');
    });
    event.target.closest('.token-package').classList.add('selected');
    
    // Show summary
    const summary = document.getElementById('token-summary');
    document.getElementById('summary-tokens').textContent = tokens;
    document.getElementById('summary-price').textContent = price === 0 ? 'Free' : '₹' + price;
    summary.style.display = 'block';
}

function createCustomPackage() {
    const customCount = parseInt(document.getElementById('custom-token-count').value);
    
    if (!customCount || customCount < 50 || customCount > 5000) {
        alert('Please enter a token amount between 50 and 5000');
        return;
    }
    
    // Simple pricing: 1 token = ₹0.2
    const price = Math.round(customCount * 0.2);
    selectTokenPackage(customCount, price);
}

function completePurchase() {
    if (!selectedTokenPackage) {
        alert('Please select a token package');
        return;
    }
    
    try {
        const user = JSON.parse(localStorage.getItem('swj_user'));
        
        if (!user) {
            alert('Please log in first');
            window.location.href = 'login.html';
            return;
        }
        
        // Add tokens
        user.tokens = (user.tokens || 0) + selectedTokenPackage.tokens;
        localStorage.setItem('swj_user', JSON.stringify(user));
        
        // Add to history
        const history = JSON.parse(localStorage.getItem('swj_token_history') || '[]');
        history.unshift({
            date: new Date().toLocaleDateString(),
            type: 'purchase',
            description: 'Token Purchase - ' + selectedTokenPackage.tokens + ' tokens',
            amount: selectedTokenPackage.tokens,
            balance: user.tokens,
            price: selectedTokenPackage.price
        });
        localStorage.setItem('swj_token_history', JSON.stringify(history));
        
        // Show success
        alert('✓ Successfully purchased ' + selectedTokenPackage.tokens + ' tokens!');
        
        // Update display
        updateTokenDisplay();
        closeTokenPurchaseModal();
        
    } catch (e) {
        alert('Error processing purchase');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateTokenDisplay();
});

// ========== UPDATE TOKEN DISPLAY ==========
function updateTokenDisplay() {
    try {
        const user = JSON.parse(localStorage.getItem('swj_user'));
        const tokenBtn = document.getElementById('nav-token-btn');
        const tokenCount = document.getElementById('nav-token-count');
        
        if (user && user.tokens && tokenBtn && tokenCount) {
            tokenCount.textContent = user.tokens;
            tokenBtn.style.display = 'inline-flex';
        }
    } catch (e) {
        // User not logged in
    }
}

// ========== SEARCH BAR TOGGLE ==========
function toggleSearchBar() {
    const searchIcon = document.getElementById('nav-search');
    const searchBar = document.getElementById('nav-search-bar');
    
    if (searchBar) {
        if (searchBar.style.display === 'none' || searchBar.style.display === '') {
            searchBar.style.display = 'flex';
            const searchInput = document.getElementById('skill-search');
            if (searchInput) {
                searchInput.focus();
            }
        } else {
            searchBar.style.display = 'none';
        }
    }
}


