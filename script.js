// Image descriptions help screen-reader users and give search engines context.
const imageMap = {
  hero: "contemporary-luxe-living-room.png",
  about: "anna-jatsiv-interior-designer-about.png",
  office: "modern-organic-home-office.png",
  living: "contemporary-luxe-living-room.png",
  primary: "contemporary-primary-bedroom.png",
  bedroom: "modern-transitional-bedroom.png",
  nursery: "modern-organic-nursery.png"
};
document.querySelectorAll(".image-slot").forEach(el => {
  const key = el.dataset.image;
  const file = imageMap[key];
  if (file) {
    const img = document.createElement("img");
    img.src = `assets/${file}`;
    img.alt = el.dataset.alt || "Interior design portfolio image";
    img.loading = key === "hero" ? "eager" : "lazy";
    img.decoding = "async";
    if (key === "hero") img.fetchPriority = "high";
    el.prepend(img);
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
    `Hello Anna,\n\nI'd like to inquire about your services.\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message")}\n\nThank you.`
  );
  window.location.href = `mailto:anna.jatsiv@gmail.com?subject=${subject}&body=${body}`;
});
