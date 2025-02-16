document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scrollBtn");
  
    // Function to check if the user has scrolled enough to display the button
    function toggleScrollBtn() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    }