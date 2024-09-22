// Function to simulate navigating to Home
function goHome() {
    document.getElementById('contentArea').innerHTML = '<h1>Welcome to your dashboard</h1><p>Select an option from the menu.</p>';
}

// Function to simulate navigating to Reservation Screen
function goReservation() {
    document.getElementById('contentArea').innerHTML = '<h1>Reservation</h1><p>This is the Reservation screen.</p>';
}

// Function to simulate navigating to Billing Screen
function goBilling() {
    document.getElementById('contentArea').innerHTML = '<h1>Billing Page</h1><p>This is the Billing screen.</p>';
}

// Function to simulate navigating to History Screen
function goHistory() {
    document.getElementById('contentArea').innerHTML = '<h1>History</h1><p>This is your booking history.</p>';
}

// Function to simulate navigating to Bookings Screen
function goBookings() {
    document.getElementById('contentArea').innerHTML = '<h1>Bookings</h1><p>This is the Bookings page.</p>';
}

// Function to simulate navigating to Support Screen
function goSupport() {
    document.getElementById('contentArea').innerHTML = '<h1>Contact Support</h1><p>This is the support page.</p>';
}

// Function to simulate logout and redirect to the first page
function logout() {
    alert("Logging out...");
    window.location.href = "index.html"; // Redirect to login page
}
