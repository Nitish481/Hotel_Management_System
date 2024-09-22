function login() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Simple Validation
    const userIdValid = userId.length >= 5 && userId.length <= 20;
    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,30}$/.test(password);

    if (!userIdValid || !passwordValid) {
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    // Simulate Successful Login
    document.getElementById('errorMessage').style.display = 'none';
    alert('Login successful! Redirecting to dashboard...');
    window.location.href = "dashboard.html";  // Redirect to role-specific dashboard
}
