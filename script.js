// Initialize the current image index and select all elements with the class 'gallery-img'
let currentImageIndex = 0;
const galleryImages = document.querySelectorAll('.gallery-img');

// Function to show a specific image in the gallery
function showImage(index) {
    // Hide all gallery images
    galleryImages.forEach(img => img.style.display = 'none');

    // Display the selected image
    galleryImages[index].style.display = 'block';
    currentImageIndex = index;
}

// Function to change the displayed image based on the given step (1 or -1)
function changeImage(step) {
    // Calculate the new index
    let newIndex = currentImageIndex + step;

    // Handle boundary cases
    if (newIndex >= galleryImages.length) {
        newIndex = 0; // Loop to the first image if at the end
    } else if (newIndex < 0) {
        newIndex = galleryImages.length - 1; // Loop to the last image if at the beginning
    }

    // Show the new image
    showImage(newIndex);
}

// Initial display of the first image in the gallery
showImage(currentImageIndex);

// Get the button element with the ID 'myBtn'
let mybutton = document.getElementById("myBtn");

// Event listener for scrolling
window.onscroll = function() {
    scrollFunction();
};

// Function to control button visibility based on scroll position
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Display the button when scrolling down
        mybutton.style.display = "block";
    } else {
        // Hide the button when at the top
        mybutton.style.display = "none";
    }
}

// Function to scroll to the top when the button is clicked
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
