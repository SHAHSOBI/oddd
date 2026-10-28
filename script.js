// =========================
// MOUSE PARALLAX EFFECT
// =========================

const heroImage = document.querySelector(".hero-image");
const heroContent = document.querySelector(".hero-content");
const floatingOrb = document.querySelector(".floating-orb");
document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    heroImage.style.transform =
        `scale(1.12) translate3d(${x}px, ${y}px, 0)`;

    heroContent.style.transform =
        `translate3d(${x * -0.25}px, calc(-50% + ${y * -0.25}px), 0)`;
        floatingOrb.style.transform =
    `translate3d(${x * -1.5}px, ${y * -1.5}px, 0) rotateX(${y * 0.5}deg) rotateY(${x * 0.5}deg)`;
});


// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll(
    ".about, .work, .contact"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    revealObserver.observe(section);
});


// =========================
// MOBILE MENU
// =========================

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// =========================
// YEAR / PAGE READY
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});