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


