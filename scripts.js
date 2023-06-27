
var showImageBtn = document.getElementById('showImageBtn');
var imageContainer = document.getElementById('imageContainer');
var myImage = document.getElementById('myImage');


showImageBtn.addEventListener('click', function() {

  myImage.src = 'quim1.jpeg';
  

  imageContainer.style.display = 'block';
});

