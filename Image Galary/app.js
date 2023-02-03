// Get all the thumbnail images
const thumbnails = document.querySelectorAll('.thumbnail');

// Loop through each thumbnail
for (let thumbnail of thumbnails) {
  // Add a click event listener to each thumbnail
  thumbnail.addEventListener('click', function () {
    // Get the source of the full-size image
    const fullSizeImageSrc = this.src;

    // Create a lightbox element
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';

    // Create an image element to display the full-size image
    const fullSizeImage = document.createElement('img');
    fullSizeImage.src = fullSizeImageSrc;

    // Add the full-size image to the lightbox
    lightbox.appendChild(fullSizeImage);

    // Add the lightbox to the document
    document.body.appendChild(lightbox);

    // Add a click event listener to the lightbox to close it when it is clicked
    lightbox.addEventListener('click', function () {
      // Remove the lightbox from the document
      lightbox.remove();
    });
  });
}
