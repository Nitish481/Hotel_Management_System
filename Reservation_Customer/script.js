document.getElementById("reservationForm").onsubmit = function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;

    // Basic validation
    if (name === "" || contact === "") {
        alert("Please fill in all required fields");
        return false;
    }

    // Display reservation success message
    document.getElementById("message").innerText = `Reservation Successful! Your Booking ID is US006-${Math.floor(Math.random() * 1000)}.`;
};
