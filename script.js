let menuItems = document.getElementsByClassName("menu");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    // Remove the "active" class from all navigation items
    for (let j = 0; j < menuItems.length; j++) {
      menuItems[j].classList.remove("active");
      menuItems[j].classList.add("nav-item");
    }

    // Add the "active" class to the clicked navigation item
    this.classList.add("active");
    this.classList.remove("nav-item");
  });
}

gsap.from("#hero-heading", { duration: 1, y: "-100%", ease: "bounce" });
gsap.from(".nav-item", {
  duration: 0.8,
  opacity: 0.2,
  delay: 0.25,
  stagger: 0.1,
});
gsap.from(".btn", { duration: 1, x: "-100vw", delay: 0.1, ease: "power2.out" });
gsap.fromTo(
  ".logo",
  { opacity: 0, scale: 0, rotation: 720 },
  { duration: 1, delay: 0, opacity: 1, scale: 1, rotation: 0 }
);
