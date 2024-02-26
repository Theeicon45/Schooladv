document.addEventListener("DOMContentLoaded", function() {
    var submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        submitBtn.style.backgroundColor = '#19d819'; // Change button color on click
        submitBtn.textContent = 'Message Sent'; // Change button text
        submitBtn.disabled = true; // Disable the button
    });
});

  window.addEventListener('DOMContentLoaded', function () {
    var loader = document.querySelector('.loader');
  
    // Show the loader initially
    loader.style.display = 'block';
  
    // Hide the loader after 10 seconds
    setTimeout(function () {
      loader.style.display = 'none';
    }, 10000); // 10 seconds
  });
  
  
