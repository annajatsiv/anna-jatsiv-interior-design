// Site image assignment is generated from assets in this package.
// You can replace any asset filename in the map below with a higher-resolution original.
const imageMap = {
  hero: "pdf-p6-img1.png",
  about: "pdf-p2-img1.png",
  office: "pdf-p4-img1.png",
  living: "pdf-p6-img1.png",
  primary: "pdf-p8-img1.png",
  bedroom: "pdf-p10-img1.png",
  nursery: "pdf-p12-img1.png"
};
document.querySelectorAll(".image-slot").forEach(el => {
  const key = el.dataset.image;
  const file = imageMap[key];
  if (file) {
    const url = `assets/${file}`;
    el.style.backgroundImage = `url("${url}")`;
    el.classList.add("has-image");
  }
});
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "×" : "☰";
});
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle?.setAttribute("aria-expanded", "false");
  if (toggle) toggle.textContent = "☰";
}));
document.querySelectorAll("[data-service]").forEach(link => link.addEventListener("click", () => {
  const service = document.querySelector("#service");
  if (service) {
    const wanted = link.dataset.service;
    const option = [...service.options].find(o => o.textContent.includes(wanted));
    if (option) service.value = option.value;
  }
}));
document.querySelector("#inquiry-form")?.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const subject = encodeURIComponent(`Interior design inquiry — ${data.get("service")}`);
  const body = encodeURIComponent(
    `Hello Anna,\\n\\nI'd like to inquire about your services.\\n\\nName: ${data.get("name")}\\nEmail: ${data.get("email")}\\nService: ${data.get("service")}\\n\\nProject details:\\n${data.get("message")}\\n\\nThank you.`
  );
  // Replace anna@example.com with the email address you want clients to use.
  window.location.href = `mailto:anna@example.com?subject=${subject}&body=${body}`;
});