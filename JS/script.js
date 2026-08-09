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
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const formStatus = document.getElementById("form-status");
    const originalButtonText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    formStatus.className = "form-status";
    formStatus.textContent = "Sending your message...";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      formStatus.className = "form-status success";
      formStatus.textContent = "Thank you! Your message has been sent successfully.";
    } catch (error) {
      formStatus.className = "form-status error";
      formStatus.textContent = "Sorry, your message could not be sent. Please try again.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
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
