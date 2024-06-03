document.addEventListener('DOMContentLoaded', () => {
    // Function to handle form submissions
    function handleFormSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if (form.id === 'login-form') {
            handleLogin(data);
        } else if (form.id === 'appointment-form') {
            alert('Appointment booked successfully!');
        } else if (form.id === 'contact-form') {
            alert('Thank you for contacting us!');
        }
        form.reset();
    }

    // Function to handle login
    function handleLogin(data) {
        const { username, password } = data;
        const loginMessage = document.getElementById('login-message');

        if (username === 'user' && password === 'password') {
            document.getElementById('login').classList.remove('active');
            document.getElementById('dashboard').classList.add('active');
            loginMessage.textContent = '';
        } else {
            loginMessage.textContent = 'Invalid username or password';
        }
    }

    // Function to handle navigation
    function handleNavigation(event) {
        event.preventDefault();
        const target = event.target;
        const section = target.getAttribute('data-section');

        document.querySelectorAll('.dashboard-section').forEach(section => {
            section.classList.remove('active');
        });

        document.getElementById(section).classList.add('active');

        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to the clicked link
        target.classList.add('active');
    }

    // Function to handle logout
    function handleLogout(event) {
        event.preventDefault();
        document.getElementById('dashboard').classList.remove('active');
        document.getElementById('login').classList.add('active');
        alert("Logged out successfully.");
    }

    // Add event listeners
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    document.getElementById('logout-link').addEventListener('click', handleLogout);
});
