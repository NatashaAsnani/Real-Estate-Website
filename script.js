// Smooth scroll to the top on click
document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Show the scroller when scrolling down
window.addEventListener("scroll", function () {
    const scroller = document.getElementById("scrollToTop");
    if (window.scrollY > 100) {
        scroller.style.display = "flex";
    } else {
        scroller.style.display = "none";
    }
});

// Smooth scroll to the top on click
document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Hide the scroller on reload if we're on the home section
window.addEventListener("load", function () {
    const scroller = document.getElementById("scrollToTop");
    if (window.scrollY === 0) {
        scroller.style.display = "none";
    }
});

// Smooth scroll to the top on click
document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Add active class on click
const navLinks = document.querySelectorAll(".nav-link");

// Listen for click events on navbar links
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        // Remove active class from all nav-links
        navLinks.forEach(link => link.classList.remove("active"));
        
        // Add active class to the clicked nav-link
        event.target.classList.add("active");
    });
});


// Ensure the DOM is loaded before executing GSAP animations
document.addEventListener("DOMContentLoaded", () => {
    // Hero Section Animation
    gsap.from("#home .centered", {
        y: 50,
        opacity: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#home",
            start: "top center", // Trigger when the top of the section hits the center of the viewport
        },
    });

    // About Section Animation
    gsap.from("#about .imgcol img", {
        x: -100,
        opacity: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%", // Trigger slightly before the section enters
        },
    });

    gsap.from("#about .connecting", {
        x: 100,
        opacity: 0,
        duration: 3,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
        },
    });

    // Services Section Animation
    gsap.from("#services .third", {
        y: 50,
        opacity: 0,
        duration: 3,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#services",
            start: "top 85%",
        },
    });

    // Properties Section Animation
    gsap.from("#property .features", {
        y: 50,
        opacity: 0,
        duration: 3,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#property",
            start: "top 85%",
        },
    });

    // Testimonials Section Animation
    gsap.from("#testimonial .testimonial", {
        x: -50,
        opacity: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#testimonial",
            start: "top 85%",
        },
    });

    gsap.from("#testimonial .card", {
        scale: 0.9,
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#testimonial",
            start: "top 85%",
        },
    });

    // Contact Section Animation
    gsap.from("#contact form", {
        scale: 0.9,
        opacity: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 85%",
        },
    });
});
