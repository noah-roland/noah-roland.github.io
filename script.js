document.addEventListener("DOMContentLoaded", function () {
  // Select Modals
  const contactModal = document.getElementById("contactModal");
  const socialsModal = document.getElementById("socialsModal");

  // Select Triggers
  const contactLink = document.querySelector('a[href="#contact"]');
  const socialsBtn = document.getElementById("socialsBtn");

  // Helper function to open a modal
  const openModal = (m) => m.classList.remove("hidden");
  // Helper function to close a modal
  const closeModal = (m) => m.classList.add("hidden");

  // Contact Modal Events
  if (contactLink) {
    contactLink.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(contactModal);
    });
  }

  // Socials Modal Events
  if (socialsBtn) {
    socialsBtn.addEventListener("click", () => {
      openModal(socialsModal);
    });
  }

  // Handle all Close Buttons
  document.querySelectorAll(".close-button").forEach(btn => {
    btn.addEventListener("click", () => {
      closeModal(contactModal);
      closeModal(socialsModal);
    });
  });

  // Close if clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === contactModal) closeModal(contactModal);
    if (e.target === socialsModal) closeModal(socialsModal);
  });
});