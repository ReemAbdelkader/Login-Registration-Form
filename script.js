const container  = document.querySelector('.container');
const registerBtn  = document.querySelector('.register-btn');
const loginBtn  = document.querySelector('.login-btn');


registerBtn.addEventListener('click' , () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click' , () => {
    container.classList.remove('active');
});

// Login elements
const loginForm = document.querySelector('.login form');
const loginUsername = document.querySelector('.login input[type="text"]');
const loginPassword = document.querySelector('.login input[type="password"]');

// Registration elements
const registerForm = document.querySelector('.register form');
const registerUsername = document.querySelector('.register input[type="text"]');
const registerEmail = document.querySelector('.register input[type="email"]');
const registerPassword = document.querySelector('.register input[type="password"]');

// Toggle forms
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Handle registration
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const user = {
        username: registerUsername.value.trim(),
        email: registerEmail.value.trim(),
        password: registerPassword.value
    };

    // Validation
    if (!user.username || !user.email || !user.password) {
        alert('Please fill in all fields');
        return;
    }

    if (!validateEmail(user.email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Save to localStorage
    localStorage.setItem('userData', JSON.stringify(user));
    alert('Registration successful! You can now login');
    container.classList.remove('active');
    
    // Clear form
    registerForm.reset();
});

// Handle login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const savedUser = JSON.parse(localStorage.getItem('userData'));
    
    if (!savedUser) {
        alert('No registered user found. Please register first');
        return;
    }

    const username = loginUsername.value.trim();
    const password = loginPassword.value;

    if (username === savedUser.username && password === savedUser.password) {
        alert(`Welcome back ${username}! Login successful`);
        // Redirect to dashboard or other page:
        // window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
    
    loginForm.reset();
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}