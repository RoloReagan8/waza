// Get the button and image elements
var showImageBtn = document.getElementById('showImageBtn');
var imageContainer = document.getElementById('imageContainer');
var myImage = document.getElementById('myImage');

// Add a click event listener to the button
showImageBtn.addEventListener('click', function() {
  // Set the image source
  myImage.src = 'quim1.jpeg';
  
  // Show the image container
  imageContainer.style.display = 'block';
});

