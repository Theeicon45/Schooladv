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
    var mapFrame = document.querySelector('.mapFrame');
    var loader = document.querySelector('.loader');
  
    // Hide the loader initially
    loader.style.display = 'none';
  
    // Show the loader when the iframe starts loading
    mapFrame.addEventListener('loadstart', function () {
      loader.style.display = 'block';
    });
  
    // Hide the loader when the iframe finishes loading
    mapFrame.addEventListener('load', function () {
      // Delay hiding the loader by 2 seconds
      setTimeout(function () {
        loader.style.display = 'none';
      }, 12000);
    });
  });
  
  
