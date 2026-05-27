// Admin authentication check
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Setup logo link
        const logoLink = document.querySelector('.nav-logo');
        if (logoLink) {
            logoLink.href = 'dashboard.html';
            logoLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'dashboard.html';
            });
        }
        
        const adminUser = localStorage.getItem('swj_admin');
        if (!adminUser) {
            // For demo purposes, create a default admin account
            // In production, this would require proper authentication
            localStorage.setItem('swj_admin', JSON.stringify({
                id: 'admin_001',
                name: 'Admin',
                email: 'admin@skillwithjigs.com',
                role: 'super_admin',
                createdAt: new Date().toISOString()
            }));
        }

        initializeAdminDashboard();
    } catch(e) {
        console.error('Admin authentication error:', e);
        window.location.href = 'index.html';
    }
});

// Initialize admin dashboard
function initializeAdminDashboard() {
    loadOverviewStats();
    loadRecentUsersAndSkills();
    loadUsersTable();
    loadSkillsTable();
    loadTokenTransactions();
    loadEngagementReport();
    setupProfileDropdown();
    setupEventListeners();
}

// Load overview statistics
function loadOverviewStats() {
    // Get all users data
    const allUsers = getAllUsers();
    const allSkills = availableSkills || [];
    const tokenHistory = getAllTokenTransactions();
    
    // Calculate stats
    const totalUsers = allUsers.length;
    const totalSkills = allSkills.length;
    const totalTokensDistributed = tokenHistory.reduce((sum, t) => {
        return sum + (t.type === 'distributed' ? t.amount : 0);
    }, 0);
    
    // Calculate growth (demo: random percentage)
    const platformGrowth = Math.floor(Math.random() * 15) + 5;

    // Update stats display
    document.getElementById('total-users').textContent = totalUsers;
    document.getElementById('total-skills').textContent = totalSkills;
    document.getElementById('total-tokens').textContent = totalTokensDistributed;
    document.getElementById('platform-growth').textContent = platformGrowth + '%';

    // Load activity chart
    loadActivityChart();
}

// Load activity chart
function loadActivityChart() {
    const chartContainer = document.getElementById('activity-chart');
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    let html = '';
    days.forEach(day => {
        const height = Math.floor(Math.random() * 80) + 20;
        html += `
            <div class="chart-bar" style="height: ${height}%;" title="${day}: ${height}% activity"></div>
        `;
    });
    
    chartContainer.innerHTML = html;
}

// Load recent users and skills
function loadRecentUsersAndSkills() {
    const allUsers = getAllUsers();
    const recentUsers = allUsers.slice(-5).reverse();
    
    const usersList = document.getElementById('recent-users-list');
    usersList.innerHTML = recentUsers.map(user => `
        <div class="list-item">
            <div class="list-item-content">
                <div class="list-item-title">${user.name}</div>
                <div class="list-item-subtitle">${user.email || user.mobile}</div>
            </div>
            <div class="list-item-value">${new Date(user.joinedAt).toLocaleDateString()}</div>
        </div>
    `).join('');

    // Load popular skills
    const availableSkillsData = availableSkills || [];
    const popularSkills = availableSkillsData.sort((a, b) => b.students - a.students).slice(0, 5);
    
    const skillsList = document.getElementById('popular-skills-list');
    skillsList.innerHTML = popularSkills.map(skill => `
        <div class="list-item">
            <div class="list-item-content">
                <div class="list-item-title">${skill.name}</div>
                <div class="list-item-subtitle">by ${skill.teacher}</div>
            </div>
            <div class="list-item-value">${skill.students} students</div>
        </div>
    `).join('');
}

// Get all users from localStorage
function getAllUsers() {
    const users = [];
    const user = localStorage.getItem('swj_user');
    if (user) {
        users.push(JSON.parse(user));
    }
    
    // Check for other users in a multi-user scenario
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('swj_user_')) {
            users.push(JSON.parse(localStorage.getItem(key)));
        }
    }
    
    return users.length > 0 ? users : [
        { id: 1, name: 'John Doe', email: 'john@example.com', mobile: '9876543210', tokens: 150, joinedAt: new Date(Date.now() - 30*24*60*60*1000).toISOString(), status: 'active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: '9876543211', tokens: 120, joinedAt: new Date(Date.now() - 20*24*60*60*1000).toISOString(), status: 'active' },
        { id: 3, name: 'Mike Johnson', email: 'mike@example.com', mobile: '9876543212', tokens: 80, joinedAt: new Date(Date.now() - 10*24*60*60*1000).toISOString(), status: 'active' }
    ];
}

// Get all token transactions
function getAllTokenTransactions() {
    const history = JSON.parse(localStorage.getItem('swj_token_history') || '[]');
    return history.length > 0 ? history : [
        { date: new Date().toLocaleDateString(), type: 'distributed', user: 'John Doe', amount: 200, balance: 350, reason: 'Welcome Bonus' },
        { date: new Date(Date.now() - 24*60*60*1000).toLocaleDateString(), type: 'earned', user: 'Jane Smith', amount: 50, balance: 170, reason: 'Teaching Python' }
    ];
}

// Load users table
function loadUsersTable() {
    const tbody = document.getElementById('users-table-body');
    const allUsers = getAllUsers();
    
    tbody.innerHTML = allUsers.map((user, index) => `
        <tr>
            <td>#${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email || user.mobile}</td>
            <td>${new Date(user.joinedAt || Date.now()).toLocaleDateString()}</td>
            <td>${user.tokens || 0}💎</td>
            <td><span class="status-badge ${user.status || 'active'}">${user.status || 'active'}</span></td>
            <td>
                <button class="btn btn-small btn-secondary" onclick="editUser(${user.id || index})">
                    <i class="ph ph-pencil"></i> Edit
                </button>
            </td>
        </tr>
    `).join('');
}

// Load skills table
function loadSkillsTable() {
    const tbody = document.getElementById('skills-table-body');
    const skills = availableSkills || [];
    
    tbody.innerHTML = skills.map((skill, index) => `
        <tr>
            <td>${skill.name}</td>
            <td>${skill.teacher}</td>
            <td>${skill.category}</td>
            <td>${skill.students}</td>
            <td>${skill.rating} ⭐</td>
            <td>${skill.tokens}💎</td>
            <td><span class="status-badge active">Active</span></td>
            <td>
                <button class="btn btn-small btn-secondary" onclick="editSkill(${skill.id})">
                    <i class="ph ph-pencil"></i> Edit
                </button>
                <button class="btn btn-small btn-danger" onclick="deleteSkill(${skill.id})">
                    <i class="ph ph-trash"></i> Delete
                </button>
            </td>
        </tr>
    `).join('');
}

// Load token transactions
function loadTokenTransactions() {
    const tbody = document.getElementById('token-history-body');
    const transactions = getAllTokenTransactions();
    
    tbody.innerHTML = transactions.map(t => `
        <tr>
            <td>${t.date}</td>
            <td>${t.user || 'System'}</td>
            <td><span class="status-badge ${t.type}">${t.type}</span></td>
            <td style="color: ${t.type === 'earned' || t.type === 'distributed' ? 'var(--success)' : 'var(--danger)'}">${t.type === 'earned' || t.type === 'distributed' ? '+' : '-'}${t.amount}</td>
            <td>${t.reason || '-'}</td>
            <td>${t.balance}💎</td>
        </tr>
    `).join('');

    // Update token stats
    const totalDistributed = transactions.filter(t => t.type === 'distributed').reduce((sum, t) => sum + t.amount, 0);
    const users = getAllUsers();
    const inCirculation = users.reduce((sum, u) => sum + (u.tokens || 0), 0);
    const avgPerUser = users.length > 0 ? Math.floor(inCirculation / users.length) : 0;

    document.getElementById('stat-total-distributed').textContent = totalDistributed;
    document.getElementById('stat-in-circulation').textContent = inCirculation;
    document.getElementById('stat-avg-per-user').textContent = avgPerUser;

    // Populate user select for token distribution
    const userSelect = document.getElementById('token-user-select');
    userSelect.innerHTML = '<option value="">Choose a user...</option>' + users.map(u => `
        <option value="${u.id || u.name}">${u.name} (${u.tokens || 0}💎)</option>
    `).join('');
}

// Load engagement report
function loadEngagementReport() {
    const tbody = document.getElementById('engagement-report-body');
    const users = getAllUsers();
    
    tbody.innerHTML = users.map(user => {
        const engagementScore = Math.floor(Math.random() * 100);
        return `
            <tr>
                <td>${user.name}</td>
                <td>${Math.floor(Math.random() * 5)}</td>
                <td>${Math.floor(Math.random() * 3)}</td>
                <td>${Math.floor(Math.random() * 50)}h</td>
                <td>${Math.floor(Math.random() * 30)} days ago</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div style="width: 60px; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                            <div style="width: ${engagementScore}%; height: 100%; background: linear-gradient(90deg, var(--p), var(--p2));"></div>
                        </div>
                        <span>${engagementScore}%</span>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Tab switching
function switchAdminTab(tabName, e) {
    e.preventDefault();

    // Hide all tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from menu items
    document.querySelectorAll('.admin-menu-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show selected tab
    const selectedTab = document.getElementById(`tab-${tabName}`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Add active class to clicked menu item
    if (e.target.closest('.admin-menu-item')) {
        e.target.closest('.admin-menu-item').classList.add('active');
    }

    // Reload data for specific tabs
    if (tabName === 'users') {
        loadUsersTable();
    } else if (tabName === 'skills') {
        loadSkillsTable();
    } else if (tabName === 'tokens') {
        loadTokenTransactions();
    } else if (tabName === 'reports') {
        loadEngagementReport();
    }
}

// Moderation tab switching
function switchModerationTab(tabName, e) {
    e.preventDefault();

    // Hide all moderation content
    document.querySelectorAll('.mod-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from buttons
    document.querySelectorAll('.mod-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected content
    const selectedContent = document.getElementById(`mod-${tabName}`);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Add active class to clicked button
    if (e.target.closest('.mod-tab-btn')) {
        e.target.closest('.mod-tab-btn').classList.add('active');
    }
}

// Distribute tokens
function distributeTokens() {
    const userId = document.getElementById('token-user-select').value;
    const amount = parseInt(document.getElementById('token-amount').value);
    const reason = document.getElementById('token-reason').value;

    if (!userId || !amount || amount < 1) {
        alert('Please fill all fields correctly');
        return;
    }

    // Get user and update tokens
    const users = getAllUsers();
    const user = users.find(u => (u.id || u.name) === userId);
    if (user) {
        user.tokens = (user.tokens || 0) + amount;
        localStorage.setItem('swj_user', JSON.stringify(user));

        // Add to history
        const history = JSON.parse(localStorage.getItem('swj_token_history') || '[]');
        history.unshift({
            date: new Date().toLocaleDateString(),
            type: 'distributed',
            user: user.name,
            amount: amount,
            balance: user.tokens,
            reason: reason
        });
        localStorage.setItem('swj_token_history', JSON.stringify(history));

        // Clear form and reload
        document.getElementById('token-user-select').value = '';
        document.getElementById('token-amount').value = '';
        loadTokenTransactions();
        alert(`✓ Distributed ${amount} tokens to ${user.name}`);
    }
}

// Save token settings
function saveTokenSettings() {
    const settings = {
        welcomeBonus: parseInt(document.getElementById('setting-welcome-bonus').value),
        minTeach: parseInt(document.getElementById('setting-min-teach').value),
        maxCost: parseInt(document.getElementById('setting-max-cost').value)
    };

    localStorage.setItem('swj_token_settings', JSON.stringify(settings));
    alert('✓ Token settings saved successfully');
}

// Save platform settings
function savePlatformSettings() {
    const settings = {
        registrationOpen: document.getElementById('setting-registration-open').checked,
        teachingOpen: document.getElementById('setting-teaching-open').checked,
        maintenanceMode: document.getElementById('setting-maintenance').checked
    };

    localStorage.setItem('swj_platform_settings', JSON.stringify(settings));
    alert('✓ Platform settings saved successfully');
}

// Add skill modal
function openAddSkillModal() {
    document.getElementById('add-skill-modal').classList.add('active');
}

function closeAddSkillModal() {
    document.getElementById('add-skill-modal').classList.remove('active');
    document.getElementById('skill-name').value = '';
    document.getElementById('skill-category').value = '';
    document.getElementById('skill-teacher').value = '';
    document.getElementById('skill-cost').value = '';
    document.getElementById('skill-description').value = '';
}

function submitAddSkill(e) {
    e.preventDefault();

    const newSkill = {
        id: Date.now(),
        name: document.getElementById('skill-name').value,
        category: document.getElementById('skill-category').value,
        teacher: document.getElementById('skill-teacher').value,
        tokens: parseInt(document.getElementById('skill-cost').value),
        description: document.getElementById('skill-description').value,
        rating: 4.5,
        students: 0
    };

    // Add to availableSkills
    availableSkills.push(newSkill);
    localStorage.setItem('swj_available_skills', JSON.stringify(availableSkills));

    alert('✓ Skill added successfully');
    closeAddSkillModal();
    loadSkillsTable();
}

// Edit user
function editUser(userId) {
    alert('Edit user functionality would be implemented with a modal form');
}

// Edit skill
function editSkill(skillId) {
    alert('Edit skill functionality would be implemented with a modal form');
}

// Delete skill
function deleteSkill(skillId) {
    if (confirm('Are you sure you want to delete this skill?')) {
        availableSkills = availableSkills.filter(s => s.id !== skillId);
        loadSkillsTable();
        alert('✓ Skill deleted successfully');
    }
}

// Setup event listeners
function setupEventListeners() {
    // User search and filter
    const userSearch = document.getElementById('user-search');
    const userStatusFilter = document.getElementById('user-status-filter');
    
    if (userSearch) {
        userSearch.addEventListener('input', () => {
            filterUsers();
        });
    }
    
    if (userStatusFilter) {
        userStatusFilter.addEventListener('change', () => {
            filterUsers();
        });
    }

    // Skill search and filter
    const skillSearch = document.getElementById('skill-search');
    const skillCategoryFilter = document.getElementById('skill-category-filter');
    
    if (skillSearch) {
        skillSearch.addEventListener('input', () => {
            filterSkills();
        });
    }
    
    if (skillCategoryFilter) {
        skillCategoryFilter.addEventListener('change', () => {
            filterSkills();
        });
    }

    // Token history search
    const tokenHistorySearch = document.getElementById('token-history-search');
    const tokenTypeFilter = document.getElementById('token-type-filter');
    
    if (tokenHistorySearch) {
        tokenHistorySearch.addEventListener('input', () => {
            filterTokenHistory();
        });
    }
    
    if (tokenTypeFilter) {
        tokenTypeFilter.addEventListener('change', () => {
            filterTokenHistory();
        });
    }

    // Close modals on background click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

// Filter users
function filterUsers() {
    const searchQuery = document.getElementById('user-search').value.toLowerCase();
    const statusFilter = document.getElementById('user-status-filter').value;
    const tbody = document.getElementById('users-table-body');
    const rows = tbody.querySelectorAll('tr');

    rows.forEach(row => {
        const name = row.cells[1].textContent.toLowerCase();
        const email = row.cells[2].textContent.toLowerCase();
        const status = row.cells[5].textContent.toLowerCase();

        const matchesSearch = name.includes(searchQuery) || email.includes(searchQuery);
        const matchesStatus = statusFilter === 'all' || status.includes(statusFilter);

        row.style.display = matchesSearch && matchesStatus ? '' : 'none';
    });
}

// Filter skills
function filterSkills() {
    const searchQuery = document.getElementById('skill-search').value.toLowerCase();
    const categoryFilter = document.getElementById('skill-category-filter').value;
    const tbody = document.getElementById('skills-table-body');
    const rows = tbody.querySelectorAll('tr');

    rows.forEach(row => {
        const skillName = row.cells[0].textContent.toLowerCase();
        const category = row.cells[2].textContent.toLowerCase();

        const matchesSearch = skillName.includes(searchQuery);
        const matchesCategory = categoryFilter === 'all' || category.includes(categoryFilter);

        row.style.display = matchesSearch && matchesCategory ? '' : 'none';
    });
}

// Filter token history
function filterTokenHistory() {
    const searchQuery = document.getElementById('token-history-search').value.toLowerCase();
    const typeFilter = document.getElementById('token-type-filter').value;
    const tbody = document.getElementById('token-history-body');
    const rows = tbody.querySelectorAll('tr');

    rows.forEach(row => {
        const user = row.cells[1].textContent.toLowerCase();
        const type = row.cells[2].textContent.toLowerCase();
        const reason = row.cells[4].textContent.toLowerCase();

        const matchesSearch = user.includes(searchQuery) || reason.includes(searchQuery);
        const matchesType = typeFilter === 'all' || type.includes(typeFilter);

        row.style.display = matchesSearch && matchesType ? '' : 'none';
    });
}

// Setup profile dropdown
function setupProfileDropdown() {
    const adminBtn = document.querySelector('.admin-btn');
    const adminDropdown = document.querySelector('.admin-dropdown');

    if (adminBtn && adminDropdown) {
        adminBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            adminDropdown.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-links')) {
                adminDropdown.classList.remove('active');
            }
        });

        const logoutBtn = document.getElementById('admin-logout');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('swj_admin');
                window.location.href = 'index.html';
            });
        }
    }
}

// Sample availableSkills data (imported from dashboard.js)
const availableSkills = [
    { id: 1, name: 'Python Programming', category: 'programming', teacher: 'Alex Johnson', tokens: 40, rating: 4.8, students: 245, description: 'Learn Python from basics to advanced' },
    { id: 2, name: 'Web Design', category: 'design', teacher: 'Maria Garcia', tokens: 35, rating: 4.7, students: 189, description: 'Master modern web design principles' },
    { id: 3, name: 'Spanish Language', category: 'languages', teacher: 'Carlos Lopez', tokens: 30, rating: 4.9, students: 312, description: 'Conversational Spanish in 60 days' },
    { id: 4, name: 'Piano Basics', category: 'music', teacher: 'Emma Wilson', tokens: 45, rating: 4.6, students: 98, description: 'Learn piano from beginner to intermediate' },
    { id: 5, name: 'Yoga & Fitness', category: 'fitness', teacher: 'John Smith', tokens: 25, rating: 4.8, students: 420, description: 'Complete fitness transformation program' },
    { id: 6, name: 'Italian Cooking', category: 'cooking', teacher: 'Sophia Romano', tokens: 50, rating: 4.9, students: 156, description: 'Authentic Italian recipes and techniques' },
    { id: 7, name: 'JavaScript', category: 'programming', teacher: 'Dev Kumar', tokens: 40, rating: 4.7, students: 201, description: 'Modern JavaScript ES6+ development' },
    { id: 8, name: 'UI/UX Design', category: 'design', teacher: 'Rachel Green', tokens: 45, rating: 4.8, students: 167, description: 'Professional UI/UX design skills' },
    { id: 9, name: 'French Language', category: 'languages', teacher: 'Pierre Dubois', tokens: 30, rating: 4.7, students: 234, description: 'French conversation and grammar' },
    { id: 10, name: 'Guitar', category: 'music', teacher: 'Marcus Rock', tokens: 40, rating: 4.6, students: 145, description: 'Guitar lessons from beginner to advanced' }
];
