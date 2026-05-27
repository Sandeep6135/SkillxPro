// Sample Skills Data for Marketplace (100 skills with Indian teachers)
const availableSkills = [
    // Programming Skills
    { id: 1, name: 'Python Programming', category: 'programming', teacher: 'Rajesh Kumar', tokens: 40, rating: 4.8, students: 245, description: 'Learn Python from basics to advanced' },
    { id: 2, name: 'Web Development with Django', category: 'programming', teacher: 'Amit Sharma', tokens: 45, rating: 4.7, students: 189, description: 'Build web apps with Django framework' },
    { id: 3, name: 'JavaScript Mastery', category: 'programming', teacher: 'Priya Patel', tokens: 40, rating: 4.9, students: 312, description: 'Modern JavaScript ES6+ development' },
    { id: 4, name: 'Java Spring Boot', category: 'programming', teacher: 'Arjun Singh', tokens: 50, rating: 4.6, students: 198, description: 'Build scalable applications with Spring Boot' },
    { id: 5, name: 'React Native Development', category: 'programming', teacher: 'Deepak Verma', tokens: 55, rating: 4.8, students: 220, description: 'Create mobile apps with React Native' },
    { id: 6, name: 'Full Stack Web Development', category: 'programming', teacher: 'Neha Gupta', tokens: 60, rating: 4.9, students: 410, description: 'Complete MERN stack development' },
    { id: 7, name: 'C++ Programming', category: 'programming', teacher: 'Vikram Nair', tokens: 35, rating: 4.7, students: 167, description: 'Master C++ from basics to competitive coding' },
    { id: 8, name: 'Data Science with Python', category: 'programming', teacher: 'Ravi Kumar', tokens: 50, rating: 4.9, students: 345, description: 'Machine learning and data analysis' },
    { id: 9, name: 'SQL & Database Design', category: 'programming', teacher: 'Shreya Iyer', tokens: 30, rating: 4.8, students: 234, description: 'SQL optimization and database design patterns' },
    { id: 10, name: 'Web API Development', category: 'programming', teacher: 'Arun Malhotra', tokens: 40, rating: 4.7, students: 156, description: 'RESTful API design and development' },
    
    // Design Skills
    { id: 11, name: 'UI/UX Design Fundamentals', category: 'design', teacher: 'Meera Reddy', tokens: 45, rating: 4.8, students: 287, description: 'Professional UI/UX design skills' },
    { id: 12, name: 'Graphic Design with Adobe', category: 'design', teacher: 'Sanjeev Malik', tokens: 40, rating: 4.7, students: 198, description: 'Master Photoshop, Illustrator, and InDesign' },
    { id: 13, name: 'Figma Design System', category: 'design', teacher: 'Priyanka Desai', tokens: 35, rating: 4.9, students: 267, description: 'Create scalable design systems in Figma' },
    { id: 14, name: 'Web Design Trends 2024', category: 'design', teacher: 'Rohan Singh', tokens: 35, rating: 4.6, students: 145, description: 'Modern web design principles and trends' },
    { id: 15, name: 'Digital Marketing Design', category: 'design', teacher: 'Anjali Sharma', tokens: 30, rating: 4.8, students: 189, description: 'Design for social media and digital campaigns' },
    { id: 16, name: 'Branding & Logo Design', category: 'design', teacher: 'Sanjay Patel', tokens: 40, rating: 4.7, students: 176, description: 'Create powerful brand identities' },
    { id: 17, name: 'Motion Graphics Basics', category: 'design', teacher: 'Divya Kumar', tokens: 45, rating: 4.8, students: 203, description: 'Animate designs with After Effects' },
    { id: 18, name: 'Web Design with CSS Mastery', category: 'design', teacher: 'Nikhil Gupta', tokens: 32, rating: 4.7, students: 234, description: 'Advanced CSS animations and layouts' },
    { id: 19, name: 'Product Design Process', category: 'design', teacher: 'Mansi Singh', tokens: 48, rating: 4.9, students: 156, description: 'From concept to final product design' },
    { id: 20, name: 'Typography for Designers', category: 'design', teacher: 'Akshay Reddy', tokens: 28, rating: 4.8, students: 218, description: 'Master typography in digital design' },
    
    // Languages
    { id: 21, name: 'Spoken English Fluency', category: 'languages', teacher: 'Kavya Iyer', tokens: 30, rating: 4.9, students: 512, description: 'Improve English speaking skills' },
    { id: 22, name: 'Hindi Communication', category: 'languages', teacher: 'Ramesh Sharma', tokens: 20, rating: 4.8, students: 345, description: 'Master Hindi language communication' },
    { id: 23, name: 'Sanskrit Basics', category: 'languages', teacher: 'Dr. Mohan Verma', tokens: 25, rating: 4.7, students: 156, description: 'Learn Sanskrit fundamentals' },
    { id: 24, name: 'Tamil Language', category: 'languages', teacher: 'Krishnan Tamil', tokens: 22, rating: 4.8, students: 187, description: 'Fluent Tamil language course' },
    { id: 25, name: 'Telugu Language Learning', category: 'languages', teacher: 'Lakshmi Reddy', tokens: 22, rating: 4.7, students: 134, description: 'Complete Telugu language course' },
    { id: 26, name: 'Marathi Language', category: 'languages', teacher: 'Anil Marathe', tokens: 21, rating: 4.8, students: 98, description: 'Learn Marathi language fluently' },
    { id: 27, name: 'Gujarati Language', category: 'languages', teacher: 'Nimita Desai', tokens: 20, rating: 4.6, students: 76, description: 'Complete Gujarati language course' },
    { id: 28, name: 'Bengali Language', category: 'languages', teacher: 'Raman Roy', tokens: 21, rating: 4.7, students: 112, description: 'Learn Bengali from expert teacher' },
    { id: 29, name: 'Spanish Language for Beginners', category: 'languages', teacher: 'Isabella Garcia', tokens: 30, rating: 4.8, students: 289, description: 'Conversational Spanish basics' },
    { id: 30, name: 'French Language Basics', category: 'languages', teacher: 'Pierre Dubois', tokens: 30, rating: 4.7, students: 234, description: 'French conversation and grammar' },
    
    // Music
    { id: 31, name: 'Indian Classical Music', category: 'music', teacher: 'Pandit Ravi Shankar', tokens: 50, rating: 4.9, students: 234, description: 'Learn Sitar, Tabla, or Sarod basics' },
    { id: 32, name: 'Hindustani Vocal Music', category: 'music', teacher: 'Savitri Devi', tokens: 45, rating: 4.8, students: 178, description: 'Classical vocal training from expert' },
    { id: 33, name: 'Tabla Fundamentals', category: 'music', teacher: 'Zakir Khan', tokens: 40, rating: 4.7, students: 156, description: 'Learn rhythm instrument tabla' },
    { id: 34, name: 'Guitar Basics', category: 'music', teacher: 'Marcus Rock', tokens: 40, rating: 4.6, students: 245, description: 'Guitar lessons from beginner to advanced' },
    { id: 35, name: 'Piano for Beginners', category: 'music', teacher: 'Emma Wilson', tokens: 45, rating: 4.7, students: 189, description: 'Learn piano from beginner level' },
    { id: 36, name: 'Harmonium Lessons', category: 'music', teacher: 'Arun Singh', tokens: 35, rating: 4.8, students: 134, description: 'Harmonium playing techniques' },
    { id: 37, name: 'Ukulele for Everyone', category: 'music', teacher: 'Pradeep Kumar', tokens: 28, rating: 4.7, students: 98, description: 'Easy ukulele learning course' },
    { id: 38, name: 'Music Production Basics', category: 'music', teacher: 'DJ Vikas', tokens: 50, rating: 4.8, students: 212, description: 'Create music with production software' },
    { id: 39, name: 'Flute Playing Techniques', category: 'music', teacher: 'Hariprasad Chaurasia', tokens: 42, rating: 4.9, students: 167, description: 'Learn bansuri or Western flute' },
    { id: 40, name: 'Voice Training', category: 'music', teacher: 'Neha Kakkar', tokens: 40, rating: 4.8, students: 289, description: 'Professional voice training' },
    
    // Fitness
    { id: 41, name: 'Yoga & Meditation', category: 'fitness', teacher: 'Yogi Ananda', tokens: 25, rating: 4.9, students: 520, description: 'Complete yoga and meditation program' },
    { id: 42, name: 'Gym & Fitness Training', category: 'fitness', teacher: 'Vikas Sharma', tokens: 30, rating: 4.8, students: 389, description: 'Strength training and body building' },
    { id: 43, name: 'Dance Fitness', category: 'fitness', teacher: 'Shilpa Shetty', tokens: 28, rating: 4.7, students: 267, description: 'Dance while staying fit' },
    { id: 44, name: 'Running Marathon Training', category: 'fitness', teacher: 'Milind Soman', tokens: 35, rating: 4.8, students: 156, description: 'Training for marathon running' },
    { id: 45, name: 'Zumba Fitness', category: 'fitness', teacher: 'Priya Desai', tokens: 25, rating: 4.7, students: 234, description: 'Fun Zumba dance fitness' },
    { id: 46, name: 'Pilates Core Training', category: 'fitness', teacher: 'Sarah Mitchell', tokens: 32, rating: 4.8, students: 189, description: 'Core strength and flexibility' },
    { id: 47, name: 'Boxing Fitness', category: 'fitness', teacher: 'Amir Khan', tokens: 35, rating: 4.6, students: 145, description: 'Learn boxing techniques' },
    { id: 48, name: 'Weight Loss Program', category: 'fitness', teacher: 'Dr. Anupam Sharma', tokens: 40, rating: 4.9, students: 456, description: 'Safe and effective weight loss' },
    { id: 49, name: 'CrossFit Training', category: 'fitness', teacher: 'Ronit Roy', tokens: 38, rating: 4.7, students: 178, description: 'High-intensity CrossFit training' },
    { id: 50, name: 'Aerobics Fitness', category: 'fitness', teacher: 'Shakeela Khan', tokens: 22, rating: 4.8, students: 212, description: 'Fun aerobics workout sessions' },
    
    // Cooking
    { id: 51, name: 'North Indian Cooking', category: 'cooking', teacher: 'Madhur Jaffrey', tokens: 40, rating: 4.9, students: 378, description: 'Traditional North Indian recipes' },
    { id: 52, name: 'South Indian Cuisine', category: 'cooking', teacher: 'Chitra Asnani', tokens: 38, rating: 4.8, students: 234, description: 'Authentic South Indian cooking' },
    { id: 53, name: 'Bengali Cooking', category: 'cooking', teacher: 'Ramen Roy', tokens: 35, rating: 4.7, students: 156, description: 'Traditional Bengali cuisine' },
    { id: 54, name: 'Gujarati Cooking', category: 'cooking', teacher: 'Neha Desai', tokens: 35, rating: 4.8, students: 189, description: 'Traditional Gujarati recipes' },
    { id: 55, name: 'Maharashtrian Cooking', category: 'cooking', teacher: 'Anil Marathe', tokens: 36, rating: 4.7, students: 145, description: 'Authentic Maharashtrian food' },
    { id: 56, name: 'Tandoori Cooking', category: 'cooking', teacher: 'Rajesh Khan', tokens: 42, rating: 4.9, students: 267, description: 'Master tandoori cooking techniques' },
    { id: 57, name: 'Bakery & Pastry Making', category: 'cooking', teacher: 'Maya Wazir', tokens: 40, rating: 4.8, students: 213, description: 'Learn baking and pastry making' },
    { id: 58, name: 'Italian Cooking', category: 'cooking', teacher: 'Sophia Romano', tokens: 50, rating: 4.9, students: 156, description: 'Authentic Italian recipes' },
    { id: 59, name: 'Continental Cooking', category: 'cooking', teacher: 'Chef Sanjeev Kapoor', tokens: 45, rating: 4.8, students: 289, description: 'International continental cuisine' },
    { id: 60, name: 'Vegan & Healthy Cooking', category: 'cooking', teacher: 'Dr. Swati Sharma', tokens: 35, rating: 4.9, students: 345, description: 'Healthy vegan meal preparation' },
    
    // Business & Entrepreneurship  
    { id: 61, name: 'Start Your Own Business', category: 'business', teacher: 'Anil Gupta', tokens: 50, rating: 4.8, students: 456, description: 'Complete guide to starting a business' },
    { id: 62, name: 'Digital Marketing Mastery', category: 'business', teacher: 'Neil Patel', tokens: 45, rating: 4.9, students: 534, description: 'SEO, SEM, and social media marketing' },
    { id: 63, name: 'Financial Planning', category: 'business', teacher: 'Dr. Balaji Sampath', tokens: 40, rating: 4.7, students: 267, description: 'Personal and investment planning' },
    { id: 64, name: 'Sales & Negotiation Skills', category: 'business', teacher: 'Harv Eker', tokens: 42, rating: 4.8, students: 389, description: 'Master sales and closing techniques' },
    { id: 65, name: 'Stock Market Trading', category: 'business', teacher: 'Rakesh Jhunjhunwala', tokens: 50, rating: 4.6, students: 312, description: 'Learn stock trading strategies' },
    { id: 66, name: 'Leadership Skills', category: 'business', teacher: 'Satya Nadella', tokens: 45, rating: 4.9, students: 278, description: 'Develop effective leadership skills' },
    { id: 67, name: 'Project Management', category: 'business', teacher: 'Ratan Tata', tokens: 42, rating: 4.8, students: 198, description: 'Professional project management' },
    { id: 68, name: 'Public Speaking & Presentation', category: 'business', teacher: 'Shashi Tharoor', tokens: 35, rating: 4.9, students: 423, description: 'Master public speaking skills' },
    { id: 69, name: 'E-Commerce Business', category: 'business', teacher: 'Flipkart Expert', tokens: 40, rating: 4.7, students: 234, description: 'Build profitable e-commerce business' },
    { id: 70, name: 'Content Creation & Blogging', category: 'business', teacher: 'Harsh Snehanshu', tokens: 32, rating: 4.8, students: 345, description: 'Create and monetize content' },
    
    // Art & Creativity
    { id: 71, name: 'Oil Painting Techniques', category: 'art', teacher: 'M.F. Husain', tokens: 45, rating: 4.8, students: 134, description: 'Learn professional oil painting' },
    { id: 72, name: 'Watercolor Painting', category: 'art', teacher: 'Shiraz Mirza', tokens: 38, rating: 4.7, students: 156, description: 'Watercolor painting for beginners' },
    { id: 73, name: 'Sketching & Drawing', category: 'art', teacher: 'Ram Kumar', tokens: 30, rating: 4.8, students: 289, description: 'Develop sketching and drawing skills' },
    { id: 74, name: 'Digital Art & Illustration', category: 'art', teacher: 'Mythili Rakshananda', tokens: 40, rating: 4.9, students: 212, description: 'Create digital art with tablets' },
    { id: 75, name: 'Photography Basics', category: 'art', teacher: 'Raghubir Singh', tokens: 35, rating: 4.8, students: 267, description: 'Learn professional photography' },
    { id: 76, name: 'Portrait Painting', category: 'art', teacher: 'Atul Dodiya', tokens: 42, rating: 4.7, students: 145, description: 'Master portrait painting' },
    { id: 77, name: 'Sculpture & Modeling', category: 'art', teacher: 'Anish Kapoor', tokens: 45, rating: 4.8, students: 98, description: 'Learn sculpture techniques' },
    { id: 78, name: 'Calligraphy & Typography Art', category: 'art', teacher: 'Sheila Sharma', tokens: 28, rating: 4.8, students: 187, description: 'Beautiful calligraphy and lettering' },
    { id: 79, name: 'Video Editing Masterclass', category: 'art', teacher: 'Farah Khan', tokens: 45, rating: 4.9, students: 334, description: 'Professional video editing skills' },
    { id: 80, name: 'Animation Basics', category: 'art', teacher: 'Cartoon Network Expert', tokens: 50, rating: 4.8, students: 201, description: '2D and 3D animation fundamentals' },
    
    // Additional Skills for variety
    { id: 81, name: 'Photography: Portrait', category: 'art', teacher: 'Ashish Sharma', tokens: 35, rating: 4.8, students: 156, description: 'Professional portrait photography' },
    { id: 82, name: 'E-Learning Course Creation', category: 'business', teacher: 'Udemy Expert', tokens: 40, rating: 4.7, students: 234, description: 'Create and sell online courses' },
    { id: 83, name: 'Virtual Assistant Training', category: 'business', teacher: 'Ramit Sethi', tokens: 35, rating: 4.8, students: 289, description: 'Become a virtual assistant' },
    { id: 84, name: 'SEO Optimization', category: 'business', teacher: 'Backlinko Team', tokens: 42, rating: 4.9, students: 345, description: 'Master SEO techniques' },
    { id: 85, name: 'Social Media Marketing', category: 'business', teacher: 'Gary Vaynerchuk', tokens: 38, rating: 4.8, students: 456, description: 'Build your social media presence' },
    { id: 86, name: 'Graphic Design Advanced', category: 'design', teacher: 'David Carson', tokens: 48, rating: 4.9, students: 178, description: 'Advanced graphic design concepts' },
    { id: 87, name: 'Website Building with WordPress', category: 'programming', teacher: 'WordPress Master', tokens: 35, rating: 4.7, students: 267, description: 'Build websites without coding' },
    { id: 88, name: 'Cloud Computing with AWS', category: 'programming', teacher: 'AWS Expert', tokens: 55, rating: 4.9, students: 198, description: 'AWS cloud services mastery' },
    { id: 89, name: 'Cyber Security Basics', category: 'programming', teacher: 'Security Expert', tokens: 50, rating: 4.8, students: 234, description: 'Learn cybersecurity fundamentals' },
    { id: 90, name: 'Mobile App Development', category: 'programming', teacher: 'Tech Lead', tokens: 52, rating: 4.8, students: 212, description: 'Build iOS and Android apps' },
    { id: 91, name: 'Blockchain Development', category: 'programming', teacher: 'Crypto Expert', tokens: 60, rating: 4.7, students: 145, description: 'Learn blockchain and smart contracts' },
    { id: 92, name: 'Mentorship & Career Coaching', category: 'business', teacher: 'Life Coach Expert', tokens: 45, rating: 4.9, students: 389, description: 'Professional career guidance' },
    { id: 93, name: 'Personality Development', category: 'business', teacher: 'Dr. Shiv Khera', tokens: 35, rating: 4.8, students: 523, description: 'Transform your personality' },
    { id: 94, name: 'Time Management & Productivity', category: 'business', teacher: 'David Allen', tokens: 32, rating: 4.9, students: 445, description: 'Master productivity techniques' },
    { id: 95, name: 'Freelancing Mastery', category: 'business', teacher: 'Pat Flynn', tokens: 40, rating: 4.8, students: 289, description: 'Build successful freelance career' },
    { id: 96, name: 'Affiliate Marketing', category: 'business', teacher: 'Commission Junction Expert', tokens: 35, rating: 4.7, students: 267, description: 'Earn through affiliate marketing' },
    { id: 97, name: 'Content Writing & Copywriting', category: 'business', teacher: 'Demian Farnworth', tokens: 38, rating: 4.8, students: 312, description: 'Master persuasive writing' },
    { id: 98, name: 'Video Marketing Strategy', category: 'business', teacher: 'Video Expert', tokens: 40, rating: 4.9, students: 223, description: 'Create viral marketing videos' },
    { id: 99, name: 'Personal Branding', category: 'business', teacher: 'Tim Ferriss', tokens: 42, rating: 4.8, students: 345, description: 'Build your personal brand' },
    { id: 100, name: 'Podcast Creation & Editing', category: 'business', teacher: 'Podcast Master', tokens: 40, rating: 4.7, students: 178, description: 'Start and grow your podcast' }
];

// Check if user is logged in
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Setup logo link to profile
        const logoLink = document.querySelector('.nav-logo');
        if (logoLink) {
            logoLink.href = 'profile.html';
            logoLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'profile.html';
            });
        }
        
        const user = localStorage.getItem('swj_user');
        if (!user) {
            window.location.href = 'login.html';
            return;
        }

        const userData = JSON.parse(user);
        
        // Populate user info
        document.getElementById('profile-name').textContent = userData.name || 'User';
        document.getElementById('user-fullname').textContent = userData.name || 'User Name';
        document.getElementById('user-email').textContent = userData.email || userData.mobile || 'user@gmail.com';
        
        // Set avatar initials
        const initials = userData.name
            ? userData.name.split(' ').map(n => n[0]).join('').toUpperCase()
            : 'U';
        document.getElementById('user-avatar').textContent = initials;
        document.getElementById('settings-name').value = userData.name || '';
        document.getElementById('settings-email').value = userData.email || userData.mobile || '';

        // Initialize token system
        initializeTokenSystem(userData);
        
        // Load marketplace skills
        loadMarketplaceSkills();
        setupSearchAndFilters();
        
        // Load token history
        loadTokenHistory(userData);

        // Setup profile dropdown toggle
        setupProfileDropdown();
        setupSettings();

    } catch(e) {
        window.location.href = 'login.html';
    }
});

// Initialize token system
function initializeTokenSystem(userData) {
    // Get or create tokens data
    let tokens = userData.tokens || 200; // Welcome bonus
    let history = JSON.parse(localStorage.getItem('swj_token_history') || '[]');

    // Add welcome bonus on first login
    if (!userData.hasSeenWelcome) {
        history.unshift({
            date: new Date().toLocaleDateString(),
            type: 'bonus',
            description: 'Welcome Bonus',
            amount: 200,
            balance: tokens
        });
        userData.hasSeenWelcome = true;
        localStorage.setItem('swj_user', JSON.stringify(userData));
        localStorage.setItem('swj_token_history', JSON.stringify(history));
    }

    // Update token display
    document.getElementById('token-balance').textContent = tokens;
    
    // Store tokens for easy access
    userData.tokens = tokens;
    localStorage.setItem('swj_user', JSON.stringify(userData));
}

// Load marketplace skills with search and filter
function loadMarketplaceSkills() {
    const marketplace = document.getElementById('skills-marketplace');
    const user = JSON.parse(localStorage.getItem('swj_user'));
    const enrolledSkills = JSON.parse(localStorage.getItem('swj_enrolled_skills') || '[]');
    
    // Get filter values
    const searchQuery = document.getElementById('skills-search')?.value?.toLowerCase() || '';
    const selectedCategory = document.getElementById('category-filter')?.value || 'all';
    const maxTokens = document.getElementById('budget-filter')?.value || '100';
    const sortBy = document.getElementById('sort-filter')?.value || 'popular';

    // Filter skills based on search and filters
    let filteredSkills = availableSkills.filter(skill => {
        const matchesSearch = searchQuery === '' || 
            skill.name.toLowerCase().includes(searchQuery) || 
            skill.teacher.toLowerCase().includes(searchQuery) ||
            skill.description.toLowerCase().includes(searchQuery);
        
        const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
        const matchesBudget = skill.tokens <= parseInt(maxTokens);
        
        return matchesSearch && matchesCategory && matchesBudget;
    });

    // Sort skills based on selected sort option
    filteredSkills.sort((a, b) => {
        switch(sortBy) {
            case 'rating':
                return b.rating - a.rating;
            case 'cheapest':
                return a.tokens - b.tokens;
            case 'newest':
                return b.id - a.id;
            case 'popular':
            default:
                return b.students - a.students;
        }
    });

    // Show no results message
    if (filteredSkills.length === 0) {
        marketplace.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--t2);">
                <p style="font-size: 16px; margin-bottom: 10px;">No skills found</p>
                <p style="font-size: 14px; color: var(--t3);">Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    marketplace.innerHTML = filteredSkills.map(skill => {
        const isEnrolled = enrolledSkills.includes(skill.id);
        const hasTokens = user.tokens >= skill.tokens;
        const disabled = isEnrolled || !hasTokens;
        const hintText = !hasTokens ? `Need ${skill.tokens - user.tokens} more tokens` : '';
        
        return `
            <div class="skill-card">
                <div class="skill-card-header">
                    <div class="skill-icon">📚</div>
                    <div>
                        <div class="skill-card-title">${skill.name}</div>
                        <div class="skill-card-teacher">by ${skill.teacher}</div>
                    </div>
                </div>
                <div class="skill-card-description">${skill.description}</div>
                <div class="skill-card-stats">
                    <span class="stat-item"><i class="ph-fill ph-user-circle"></i> ${skill.students} students</span>
                    <span class="stat-item"><i class="ph-fill ph-star"></i> ${skill.rating}</span>
                </div>
                <div class="skill-card-footer">
                    <div class="skill-token-cost">💎 ${skill.tokens} tokens</div>
                    <button class="btn-enroll" ${disabled ? 'disabled' : ''} onclick="enrollSkill(${skill.id}, ${skill.tokens}, '${skill.name}')" title="${hintText}">
                        ${isEnrolled ? '✓ Enrolled' : 'Enroll Now'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Setup search and filter listeners
function setupSearchAndFilters() {
    const searchBox = document.getElementById('skills-search');
    const categoryFilter = document.getElementById('category-filter');
    const budgetFilter = document.getElementById('budget-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    const reloadSkills = () => loadMarketplaceSkills();
    
    if (searchBox) {
        searchBox.addEventListener('input', reloadSkills);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', reloadSkills);
    }
    if (budgetFilter) {
        budgetFilter.addEventListener('change', reloadSkills);
    }
    if (sortFilter) {
        sortFilter.addEventListener('change', reloadSkills);
    }
}

// Enroll in skill
function enrollSkill(skillId, tokens, skillName) {
    const user = JSON.parse(localStorage.getItem('swj_user'));
    
    if (user.tokens < tokens) {
        alert('Not enough tokens! You need ' + tokens + ' tokens to enroll in this skill.');
        return;
    }

    // Deduct tokens
    user.tokens -= tokens;
    localStorage.setItem('swj_user', JSON.stringify(user));

    // Add to enrolled skills
    const enrolled = JSON.parse(localStorage.getItem('swj_enrolled_skills') || '[]');
    if (!enrolled.includes(skillId)) {
        enrolled.push(skillId);
        localStorage.setItem('swj_enrolled_skills', JSON.stringify(enrolled));
    }

    // Add to history
    const history = JSON.parse(localStorage.getItem('swj_token_history') || '[]');
    history.unshift({
        date: new Date().toLocaleDateString(),
        type: 'spend',
        description: 'Enrolled in ' + skillName,
        amount: -tokens,
        balance: user.tokens
    });
    localStorage.setItem('swj_token_history', JSON.stringify(history));

    // Update display
    document.getElementById('token-balance').textContent = user.tokens;
    loadMarketplaceSkills();
    loadTokenHistory(user);
    
    alert('✓ Successfully enrolled in ' + skillName + '!');
}

// List new skill for teaching
function listNewSkill() {
    const skillName = prompt('What skill would you like to teach?');
    if (!skillName) return;
    
    const tokenReward = prompt('How many tokens should students spend to learn? (recommended 30-50)');
    if (!tokenReward) return;

    const teachingSkills = JSON.parse(localStorage.getItem('swj_teaching_skills') || '[]');
    teachingSkills.push({
        id: Date.now(),
        name: skillName,
        tokens: parseInt(tokenReward),
        students: 0,
        hours: 0,
        created: new Date().toLocaleDateString()
    });
    localStorage.setItem('swj_teaching_skills', JSON.stringify(teachingSkills));

    alert('✓ Skill "' + skillName + '" listed for teaching!');
    loadTeachingOpportunities();
}

// Load teaching opportunities
function loadTeachingOpportunities() {
    const teachingList = document.getElementById('teaching-list');
    const teachingSkills = JSON.parse(localStorage.getItem('swj_teaching_skills') || '[]');

    if (teachingSkills.length === 0) {
        teachingList.innerHTML = '<p style="color: var(--t2); grid-column: 1/-1; text-align: center; padding: 40px;">No skills listed yet. Add your first skill to start earning tokens!</p>';
        return;
    }

    teachingList.innerHTML = teachingSkills.map(skill => `
        <div class="teaching-card">
            <h4>${skill.name}</h4>
            <p>Students pay ${skill.tokens} tokens per hour</p>
            <div class="teaching-stats">
                <div class="teaching-stat">
                    <div class="teaching-stat-label">Students</div>
                    <div class="teaching-stat-value">${skill.students}</div>
                </div>
                <div class="teaching-stat">
                    <div class="teaching-stat-label">Hours Taught</div>
                    <div class="teaching-stat-value">${skill.hours}h</div>
                </div>
                <div class="teaching-stat">
                    <div class="teaching-stat-label">Earned</div>
                    <div class="teaching-stat-value">${skill.hours * skill.tokens}💎</div>
                </div>
            </div>
            <button class="btn btn-primary btn-small" onclick="completeTeachingSession(${skill.id}, ${skill.tokens}, '${skill.name}')">
                <i class="ph ph-plus"></i> Log Teaching Hour
            </button>
        </div>
    `).join('');
}

// Complete teaching session
function completeTeachingSession(skillId, tokens, skillName) {
    const user = JSON.parse(localStorage.getItem('swj_user'));
    const teachingSkills = JSON.parse(localStorage.getItem('swj_teaching_skills') || '[]');
    
    const skill = teachingSkills.find(s => s.id === skillId);
    if (!skill) return;

    // Add tokens earned
    user.tokens += tokens;
    localStorage.setItem('swj_user', JSON.stringify(user));

    // Update skill stats
    skill.hours += 1;
    localStorage.setItem('swj_teaching_skills', JSON.stringify(teachingSkills));

    // Add to history
    const history = JSON.parse(localStorage.getItem('swj_token_history') || '[]');
    history.unshift({
        date: new Date().toLocaleDateString(),
        type: 'earn',
        description: 'Teaching ' + skillName + ' (1 hour)',
        amount: tokens,
        balance: user.tokens
    });
    localStorage.setItem('swj_token_history', JSON.stringify(history));

    // Update display
    document.getElementById('token-balance').textContent = user.tokens;
    loadTeachingOpportunities();
    loadTokenHistory(user);
    
    alert('✓ Earned ' + tokens + ' tokens for teaching!');
}

// Load token history
function loadTokenHistory(user) {
    const historyTbody = document.getElementById('history-tbody');
    const history = JSON.parse(localStorage.getItem('swj_token_history') || '[]');

    if (history.length === 0) {
        historyTbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 40px; color: var(--t2);">No transactions yet</td></tr>';
        return;
    }

    historyTbody.innerHTML = history.slice(0, 20).map(entry => {
        const typeIcon = entry.type === 'earn' ? '✓' : entry.type === 'spend' ? '✗' : '🎁';
        const typeClass = entry.type === 'earn' ? 'token-earn' : entry.type === 'spend' ? 'token-spend' : 'token-bonus';
        const amountDisplay = entry.type === 'earn' ? '+' + entry.amount : entry.amount;

        return `
            <tr>
                <td>${entry.date}</td>
                <td>${typeIcon} ${entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}</td>
                <td>${entry.description}</td>
                <td class="${typeClass}">${amountDisplay}</td>
                <td style="font-weight: 600; color: var(--p2);">${entry.balance}💎</td>
            </tr>
        `;
    }).join('');
}

function setupProfileDropdown() {
    const profileBtn = document.querySelector('.profile-btn');
    const profileDropdown = document.querySelector('.profile-dropdown');

    if (profileBtn && profileDropdown) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-links')) {
                profileDropdown.classList.remove('active');
            }
        });

        // Handle all profile links directly
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
        
        // Admin links
        const adminLinks = profileDropdown.querySelectorAll('a[href="admin.html"]');
        adminLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                profileDropdown.classList.remove('active');
                window.location.href = 'admin.html';
            });
        });

        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('swj_user');
                localStorage.removeItem('swj_admin');
                location.href = 'index.html';
            });
        }

        // Show admin link if user is admin
        const adminAccessLink = document.getElementById('admin-access-link');
        if (adminAccessLink) {
            const adminUser = localStorage.getItem('swj_admin');
            if (adminUser) {
                adminAccessLink.style.display = 'flex';
            }
        }
    }
}

// Tab switching
function switchTab(tabName, e) {
    e.preventDefault();

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show selected tab
    const selectedTab = document.getElementById(`tab-${tabName}`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Add active class to clicked menu item
    if (e.target.closest('.menu-item')) {
        e.target.closest('.menu-item').classList.add('active');
    }

    // Load content for specific tabs
    if (tabName === 'teach') {
        loadTeachingOpportunities();
    } else if (tabName === 'marketplace') {
        loadMarketplaceSkills();
    } else if (tabName === 'myskills') {
        loadMySkills();
    } else if (tabName === 'history') {
        const user = JSON.parse(localStorage.getItem('swj_user'));
        loadTokenHistory(user);
    }
}

// Load My Skills - Combined view of teaching and learning
function loadMySkills() {
    const user = JSON.parse(localStorage.getItem('swj_user'));
    const teachingSkillsList = document.getElementById('teaching-skills-list');
    const learningSkillsList = document.getElementById('learning-skills-list');
    
    // Load teaching skills
    const teachingSkills = JSON.parse(localStorage.getItem('swj_teaching_skills') || '[]');
    if (teachingSkills.length === 0) {
        teachingSkillsList.innerHTML = '<p style="color: var(--t2);">No skills added yet. <a href="#" style="color: var(--p); cursor: pointer;" onclick="listNewSkill(); return false;">Start teaching to earn tokens!</a></p>';
    } else {
        teachingSkillsList.innerHTML = teachingSkills.map(skill => `
            <div class="skill-item" style="padding: 15px; border-radius: 8px; background: rgba(124,111,255,0.1); margin-bottom: 10px; border-left: 3px solid var(--p);">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h4 style="margin: 0 0 5px 0;">${skill.name}</h4>
                        <p style="margin: 0; color: var(--t2); font-size: 13px;">💎 ${skill.tokens} tokens/hour | ${skill.students} students | ${skill.hours}h taught</p>
                    </div>
                    <button class="btn btn-primary btn-small" onclick="removeSkill('teaching', ${skill.id})" style="background: rgba(255,59,48,0.8);">Remove</button>
                </div>
            </div>
        `).join('');
    }
    
    // Load enrolled skills (learning)
    const enrolledSkills = JSON.parse(localStorage.getItem('swj_enrolled_skills') || '[]');
    const enrolledSkillDetails = availableSkills.filter(s => enrolledSkills.includes(s.id));
    
    if (enrolledSkillDetails.length === 0) {
        learningSkillsList.innerHTML = '<p style="color: var(--t2);">You haven\'t enrolled in any skills yet. <a href="#" style="color: var(--p); cursor: pointer;" onclick="switchTab(\'marketplace\', event); return false;">Browse available skills!</a></p>';
    } else {
        learningSkillsList.innerHTML = enrolledSkillDetails.map(skill => `
            <div class="skill-item" style="padding: 15px; border-radius: 8px; background: rgba(16,185,129,0.1); margin-bottom: 10px; border-left: 3px solid var(--green);">
                <div>
                    <h4 style="margin: 0 0 5px 0;">${skill.name}</h4>
                    <p style="margin: 0; color: var(--t2); font-size: 13px;">Teacher: ${skill.teacher} | Rating: ⭐${skill.rating}</p>
                </div>
            </div>
        `).join('');
    }
}

// Modal Functions
function openAddSkillModal() {
    document.getElementById('addSkillModal').classList.add('active');
}

function closeAddSkillModal() {
    document.getElementById('addSkillModal').classList.remove('active');
}

function submitAddSkill(event) {
    event.preventDefault();
    
    const skillName = document.getElementById('skill-name').value;
    const skillCategory = document.getElementById('skill-category').value;
    const skillTokens = parseInt(document.getElementById('skill-tokens').value);
    const skillDescription = document.getElementById('skill-description').value;
    const skillLevel = document.getElementById('skill-level').value;
    
    const user = JSON.parse(localStorage.getItem('swj_user'));
    const teachingSkills = JSON.parse(localStorage.getItem('swj_teaching_skills') || '[]');
    
    const newSkill = {
        id: Date.now(),
        name: skillName,
        category: skillCategory,
        tokens: skillTokens,
        description: skillDescription,
        level: skillLevel,
        teacher: user.name,
        students: 0,
        hours: 0,
        rating: 4.8,
        created: new Date().toLocaleDateString()
    };
    
    teachingSkills.push(newSkill);
    localStorage.setItem('swj_teaching_skills', JSON.stringify(teachingSkills));
    
    // Show success message
    alert('✓ Skill "' + skillName + '" added successfully! It will now appear on your profile.');
    
    // Reset form and close modal
    document.getElementById('skill-form')?.reset();
    closeAddSkillModal();
    
    // Reload teaching opportunities
    loadTeachingOpportunities();
    loadMySkills();
}

function openFindPersonModal() {
    document.getElementById('findPersonModal').classList.add('active');
    setupPersonSearch();
}

function closeFindPersonModal() {
    document.getElementById('findPersonModal').classList.remove('active');
}

function setupPersonSearch() {
    const personSearch = document.getElementById('person-search');
    if (!personSearch) return;
    
    personSearch.addEventListener('input', function() {
        const searchQuery = this.value.toLowerCase();
        const results = document.getElementById('person-search-results');
        
        if (searchQuery.length < 2) {
            results.innerHTML = '<p style="color: var(--t2);">Type at least 2 characters to search</p>';
            return;
        }
        
        // Search in available skills for teachers matching the query
        const matchingTeachers = availableSkills
            .filter(skill => skill.teacher.toLowerCase().includes(searchQuery) || 
                            skill.name.toLowerCase().includes(searchQuery))
            .reduce((unique, skill) => {
                if (!unique.find(s => s.teacher === skill.teacher)) {
                    unique.push(skill);
                }
                return unique;
            }, []);
        
        if (matchingTeachers.length === 0) {
            results.innerHTML = '<p style="color: var(--t2);">No teachers found matching "' + searchQuery + '"</p>';
            return;
        }
        
        results.innerHTML = matchingTeachers.map(skill => `
            <div style="padding: 12px; border-radius: 8px; background: rgba(255,255,255,0.04); margin-bottom: 10px; border: 1px solid rgba(255,255,255,0.08);">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h4 style="margin: 0 0 5px 0;">👨‍🏫 ${skill.teacher}</h4>
                        <p style="margin: 0; color: var(--t2); font-size: 13px;">Teaches: ${skill.name}</p>
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <button class="btn btn-primary btn-small" onclick="openMessagesModal('${skill.teacher}')" style="padding: 6px 12px; font-size: 12px;">Message</button>
                        <button class="btn btn-primary btn-small" onclick="openScheduleModal('${skill.teacher}')" style="padding: 6px 12px; font-size: 12px;">Schedule</button>
                    </div>
                </div>
            </div>
        `).join('');
    });
}

function openMessagesModal(teacherName = null) {
    const modal = document.getElementById('messagesModal');
    if (modal) {
        modal.classList.add('active');
        loadMessages(teacherName);
    }
}

function closeMessagesModal() {
    document.getElementById('messagesModal').classList.remove('active');
}

function loadMessages(teacherName = null) {
    const messagesList = document.getElementById('messages-list');
    const messages = JSON.parse(localStorage.getItem('swj_messages') || '[]');
    
    if (messages.length === 0) {
        messagesList.innerHTML = '<p style="color: var(--t2); text-align: center; padding: 20px;">No messages yet. Start a conversation!</p>';
        return;
    }
    
    messagesList.innerHTML = messages.slice(-10).reverse().map(msg => `
        <div style="padding: 10px; border-radius: 8px; margin-bottom: 8px; background: ${msg.sender === 'you' ? 'rgba(124,111,255,0.2)' : 'rgba(255,255,255,0.04)'}; max-width: 80%; ${msg.sender === 'you' ? 'margin-left: auto; text-align: right;' : ''}">
            <p style="margin: 0; font-size: 12px; color: var(--t2);">${msg.sender === 'you' ? 'You' : msg.teacher}</p>
            <p style="margin: 5px 0 0 0;">${msg.text}</p>
            <p style="margin: 5px 0 0 0; font-size: 11px; color: var(--t3);">${new Date(msg.date).toLocaleTimeString()}</p>
        </div>
    `).join('');
    
    // Scroll to bottom
    messagesList.scrollTop = messagesList.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('message-input');
    const messageText = input.value.trim();
    
    if (!messageText) {
        alert('Please type a message');
        return;
    }
    
    const messages = JSON.parse(localStorage.getItem('swj_messages') || '[]');
    messages.push({
        sender: 'you',
        teacher: 'Teacher',
        text: messageText,
        date: new Date().toISOString()
    });
    
    localStorage.setItem('swj_messages', JSON.stringify(messages));
    input.value = '';
    
    // Show message in modal
    loadMessages();
    
    // Auto-response after 1 second (simulation)
    setTimeout(() => {
        messages.push({
            sender: 'teacher',
            teacher: 'Teacher',
            text: 'Thanks for your message! I will respond soon.',
            date: new Date().toISOString()
        });
        localStorage.setItem('swj_messages', JSON.stringify(messages));
        loadMessages();
    }, 1000);
}

function openScheduleModal(teacherName = null) {
    const modal = document.getElementById('scheduleModal');
    if (modal) {
        modal.classList.add('active');
        
        // Populate teacher/skill dropdown
        const scheduleTeacher = document.getElementById('schedule-teacher');
        if (scheduleTeacher && teacherName) {
            scheduleTeacher.value = teacherName;
        }
    }
}

function closeScheduleModal() {
    document.getElementById('scheduleModal').classList.remove('active');
}

function submitScheduleClass(event) {
    event.preventDefault();
    
    const teacher = document.getElementById('schedule-teacher').value;
    const date = document.getElementById('schedule-date').value;
    const time = document.getElementById('schedule-time').value;
    const duration = document.getElementById('schedule-duration').value;
    const notes = document.getElementById('schedule-notes').value;
    
    if (!teacher) {
        alert('Please select a teacher or skill');
        return;
    }
    
    const schedules = JSON.parse(localStorage.getItem('swj_schedules') || '[]');
    schedules.push({
        id: Date.now(),
        teacher: teacher,
        date: date,
        time: time,
        duration: duration,
        notes: notes,
        status: 'pending',
        created: new Date().toLocaleDateString()
    });
    
    localStorage.setItem('swj_schedules', JSON.stringify(schedules));
    
    alert('✓ Class scheduled successfully! You will receive a confirmation soon.');
    
    // Reset form and close modal
    event.target.reset();
    closeScheduleModal();
}

function removeSkill(type, skillId) {
    if (type === 'teaching') {
        const teachingSkills = JSON.parse(localStorage.getItem('swj_teaching_skills') || '[]');
        const filtered = teachingSkills.filter(s => s.id !== skillId);
        localStorage.setItem('swj_teaching_skills', JSON.stringify(filtered));
    }
    
    loadMySkills();
    alert('Skill removed successfully');
}

// Add skill
function addSkill() {
    const skillName = prompt('What skill would you like to teach?');
    if (skillName) {
        alert(`Great! "${skillName}" added to your skills. You can now find learners for this skill.`);
    }
}

// Settings form
function setupSettings() {
    const settingsForm = document.getElementById('settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('settings-name').value;
            const user = JSON.parse(localStorage.getItem('swj_user'));
            user.name = name;
            localStorage.setItem('swj_user', JSON.stringify(user));

            // Show success message
            const btn = settingsForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="ph ph-check-circle"></i> Changes Saved!';
            btn.style.background = 'rgba(16,185,129,0.8)';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
            }, 3000);

            // Update sidebar
            document.getElementById('user-fullname').textContent = name;
        });
    }
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
        document.getElementById('token-balance').textContent = user.tokens;
        updateTokenDisplay();
        closeTokenPurchaseModal();
        loadTokenHistory(user);
        
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
            tokenBtn.style.display = 'flex';
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

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    updateTokenDisplay();
});

console.log('Dashboard loaded');
