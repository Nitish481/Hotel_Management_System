document.getElementById("reservationForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent form submission

    let reservationId = document.getElementById("reservationId").value;
    let roomType = document.getElementById("roomType").value;
    let status = document.getElementById("status").value;

    let outputMessage;

    if (status === "approve") {
        outputMessage = `Reservation Approved!<br>Reservation ID: ${reservationId}<br>Room Type: ${roomType}`;
    } else {
        outputMessage = `Reservation Rejected.<br>Reservation ID: ${reservationId}`;
    }

    document.getElementById("output").innerHTML = outputMessage;
});
