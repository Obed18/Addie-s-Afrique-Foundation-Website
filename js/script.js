// Get the modal
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Get all images and loop through them
const images = document.querySelectorAll('.story-image');
images.forEach(img => {
    img.addEventListener('click', function () {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
    });
});

const profileImages = document.querySelectorAll('.gallery-lightbox');
profileImages.forEach(img => {
    img.addEventListener('click', function () {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
    });
});

const feedImages = document.querySelectorAll('.update-image');
feedImages.forEach(img => {
    img.addEventListener('click', function () {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
    });
});


// Close the modal when clicking the close button
const close = document.querySelector('.close');
close.addEventListener('click', function () {
    lightbox.style.display = 'none';
});
