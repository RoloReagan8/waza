document.addEventListener("DOMContentLoaded", function() {
  var counterValue = 0;
  var counterElement = document.getElementById('counterValue');

  setInterval(function() {
    counterValue++;
    counterElement.textContent = counterValue;
  }, 1000);
});
