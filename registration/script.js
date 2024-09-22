function registerUser() {
    const form = document.getElementById('registrationForm');
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const userId = 'US' + Math.floor(1000 + Math.random() * 9000);  // Generate random User ID

    // Display acknowledgment message
    document.getElementById('acknowledgment').style.display = 'block';
    document.getElementById('generatedUserId').innerText = userId;

    form.reset();  // Optionally reset the form after registration
}
