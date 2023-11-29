let currentImageIndex = 0;
    const galleryImages = document.querySelectorAll('.gallery-img');

    function showImage(index) {
        // Hide all images
        galleryImages.forEach(img => img.style.display = 'none');

        // Display the selected image
        galleryImages[index].style.display = 'block';
        currentImageIndex = index;
    }

    function changeImage(step) {
        let newIndex = currentImageIndex + step;

        // Loop back to the first image if at the end
        if (newIndex >= galleryImages.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            // Go to the last image if at the beginning
            newIndex = galleryImages.length - 1;
        }

        showImage(newIndex);
    }

    // Show the first image initially
    showImage(currentImageIndex);