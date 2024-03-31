
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

    
    
// Function to handle the click event for toggling message visibility and image transformation
function toggleMessageAndImage(btn, fullMsg, picDiv) {
    btn.addEventListener('click', function() {
        if (fullMsg.style.display === 'none' || fullMsg.style.display === '') {
            fullMsg.style.display = 'block';
            btn.textContent = 'Show less';
            // Smoothly transition the alignment of the image
            picDiv.style.transition = 'align-items 0.5s ease-in-out';
            picDiv.style.alignItems = 'center';
        } else {
            fullMsg.style.display = 'none';
            btn.textContent = 'Read More';
            // Smoothly transition the alignment of the image
            picDiv.style.transition = 'align-items 0.5s ease-in-out';
            picDiv.style.alignItems = 'flex-start';
        }
    });
}

// Selecting the "Read more" buttons and the corresponding message elements
var readMoreBtn1 = document.querySelector('.read-more-btn');
var readMoreBtn2 = document.querySelector('.read-more-btn1');
var fullMessage1 = document.querySelector('.bar .full-message');
var fullMessage2 = document.querySelector('.barOne .full-message');
var picDiv1 = document.querySelector('.bar .pic');
var picDiv2 = document.querySelector('.barOne .pic');

// Toggle functionality for the first "Read more" button and its corresponding image
toggleMessageAndImage(readMoreBtn1, fullMessage1, picDiv1);

// Toggle functionality for the second "Read more" button and its corresponding image
toggleMessageAndImage(readMoreBtn2, fullMessage2, picDiv2);


    


let button_one = document.getElementById("fa-ellipsis-vertical");
let button_two = document.getElementById("fa-ellipsis");
let nav_list = document.getElementById("nav_list");

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

