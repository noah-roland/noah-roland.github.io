document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("contactModal");
    const contactLink = document.querySelector('a[href="#contact"]');
    const closeButton = document.querySelector(".close-button");
  
    if (contactLink) {
      contactLink.addEventListener("click", function (e) {
        e.preventDefault();
        modal.classList.remove("hidden");
      });
    }
  
    if (closeButton) {
      closeButton.addEventListener("click", function () {
        modal.classList.add("hidden");
      });
    }
  
    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });
  