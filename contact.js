document.addEventListener("DOMContentLoaded", function() {
    var submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        submitBtn.style.backgroundColor = '#19d819'; // Change button color on click
        submitBtn.textContent = 'Message Sent'; // Change button text
        submitBtn.disabled = true; // Disable the button
    });
});
