document.addEventListener("DOMContentLoaded", function() {
  var submitBtn = document.getElementById('submitBtn');

  submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission

      // Check if all fields are filled
      var allFieldsFilled = true;
      var formFields = document.querySelectorAll('input[type="text"], textarea');
      formFields.forEach(function(field) {
          if (field.value.trim() === '') {
            allFieldsFilled = false;
            return;
          }
      });

      if (!allFieldsFilled) {
        alert('Please fill in all fields before sending the message.');
        return;
      }

      submitBtn.style.backgroundColor = '#19d819'; // Change button color on click
      submitBtn.textContent = 'Message Sent'; // Change button text
      submitBtn.disabled = true; // Disable the button
      
      setTimeout(function() {
        formFields.forEach(function(field) {
            field.value = '';
        });
        submitBtn.style.backgroundColor = ''; // Reset button color
        submitBtn.textContent = 'Send Message'; // Reset button text
        submitBtn.disabled = false; // Enable the button
    }, 2000);
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
  


var button_one = document.getElementById("fa-ellipsis-vertical");
var button_two = document.getElementById("fa-ellipsis");
var nav_list = document.getElementById("nav_list");

button_one.onclick= function(){
    nav_list.style.paddingLeft = "100%";
    button_one.style.visibility = "hidden";
    button_two.style.visibility = "visible";
}

button_two.onclick= function(){
    nav_list.style.paddingLeft = "0%";
    button_one.style.visibility = "visible";
    button_two.style.visibility = "hidden";
}
  
