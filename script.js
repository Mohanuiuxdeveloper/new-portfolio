// Mobile navigation
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Project filters
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projects.forEach(project => {
      project.hidden =
        filter !== "all" && project.dataset.category !== filter;
    });
  });
});

// Dynamic copyright year
document.querySelector("#year").textContent =
  new Date().getFullYear();

// Contact form opens the visitor's email application
document.querySelector("#contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const form = new FormData(event.currentTarget);
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");

  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(
    `Hi Mohan,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
  );

  window.location.href =
    `mailto:mmuiuxdeveloper@gmail.com?subject=${subject}&body=${body}`;
});