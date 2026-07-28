const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const body = document.body;

// Toggle mobile menu
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = body.classList.toggle("menu-open");
    toggleBtn.innerHTML = isOpen ? "&times;" : "&#9776;";
  });
}

// Auto-close menu when a navigation link is clicked
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      body.classList.remove("menu-open");

      if (toggleBtn) {
        toggleBtn.innerHTML = "&#9776;";
      }
    }
  });
});

// Contact form handler
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    alert(
      "Thank you! Your message has been 'sent' " +
      "(not really — this is a demo)."
    );

    form.reset();
  });
}

// Project category filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Activate the clicked filter button
    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projectCards.forEach(card => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Back button for the under-construction page
const backButton = document.getElementById("back-button");

if (backButton) {
  backButton.addEventListener("click", () => {
    // Go to the previous page when browser history exists
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback when the page was opened directly
      window.location.href = "projects.html";
    }
  });
}