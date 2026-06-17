(function () {
  // Mobile menu toggle (same IDs across pages)
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");

  if (menuButton && mobileMenu && iconMenu && iconClose) {
    menuButton.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      if (isOpen) {
        mobileMenu.classList.add("hidden");
        iconMenu.classList.remove("hidden");
        iconClose.classList.add("hidden");
        menuButton.setAttribute("aria-expanded", "false");
      } else {
        mobileMenu.classList.remove("hidden");
        iconMenu.classList.add("hidden");
        iconClose.classList.remove("hidden");
        menuButton.setAttribute("aria-expanded", "true");
      }
    });

    // Close menu when a mobile nav link is clicked
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        iconMenu.classList.remove("hidden");
        iconClose.classList.add("hidden");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Dynamic year in footer
  const yearSpans = document.querySelectorAll("#year");
  if (yearSpans.length) {
    const year = new Date().getFullYear();
    yearSpans.forEach((el) => {
      el.textContent = year;
    });
  }
})();

