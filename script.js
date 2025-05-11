// Tab switching
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// Show About section
const AboutLink = document.querySelector('a[href="#About"]');
const AboutSection = document.querySelector('.about');

AboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  AboutSection.classList.add("show");
  AboutSection.scrollIntoView({ behavior: "smooth" });
});

// Hide About section on Home click
const homeLink = document.querySelector('a[href="#home"]');

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  AboutSection.classList.remove("show");
  document.querySelector('#home').scrollIntoView({ behavior: "smooth" });
});
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  contactForm.reset();
});