const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const body = document.body;

// Toggle menu
toggleBtn.addEventListener("click", () => {
  const isOpen = body.classList.toggle("menu-open");
  toggleBtn.innerHTML = isOpen ? "&times;" : "&#9776;";
});

// Auto-close on nav link click (mobile only)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      body.classList.remove("menu-open");
      toggleBtn.innerHTML = "&#9776;";
    }
  });
});

// Contact form handler (non-functional placeholder)
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been 'sent' (not really — this is a demo).");
    form.reset();
  });
}

// Filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Activate clicked button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
