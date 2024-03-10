/* --------program to check all field have been feild up */
document.addEventListener("DOMContentLoaded", function () {
    var name = document.getElementById("full_name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var buttonSubmit = document.getElementById("submitBtn");

    buttonSubmit.onclick = function (event) {
        // Prevent the default form submission
        event.preventDefault();

        if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "" ) {
            alert("Please input a value for full name");
        } else {
            // Proceed with your form submission logic here
            alert("Form submitted successfully");
        }
    };
});

document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.image'); // Get all image elements
    var currentImageIndex = 0; // Index of the currently displayed image
    var intervalTime = 3000; // Time between image changes (in milliseconds)
    var transitionTime = 500; // Transition time for fading effect (in milliseconds)

    // Function to show the next image
    function showNextImage() {
        // Increment the index, and reset to 0 if it exceeds the number of images
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Hide all images except the current one
        images.forEach(function(image, index) {
            if (index !== currentImageIndex) {
                image.style.opacity = 0;
            } else {
                // Show the next image with full opacity
                image.style.opacity = 1;
            }
        });
    }

    // Ensure all images except the first one have an initial opacity of 0
    for (var i = 1; i < images.length; i++) {
        images[i].style.opacity = 0;
    }

    // Start the slideshow
    setInterval(showNextImage, intervalTime + transitionTime);
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
