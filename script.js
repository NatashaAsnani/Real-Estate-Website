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

// Hide the 'scroll to top' button when the page loads if already at the top
window.addEventListener("load", function () {
    const scroller = document.getElementById("scrollToTop");
    if (window.scrollY === 0) {
        scroller.style.display = "none";
    }
});

// Add 'active' class to the clicked navigation link for styling purposes
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        // Remove active class from all nav-links
        navLinks.forEach(link => link.classList.remove("active"));
        
        // Add active class to the clicked nav-link
        event.target.classList.add("active");
    });
});

// Functionality for filtering sections based on button clicks
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const loading = document.getElementById("loading");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const target = this.getAttribute("data-target");
            const targetSection = document.querySelector(`.row.main[data-filter='${target}']`);

            if (!targetSection) {
                console.error("Target section not found:", target);
                return;
            }

            // Sab kuch temporarily hide karna (Chahe listings ho ya sirf "No listing found")
            const elementsToHide = targetSection.children; 
            for (let elem of elementsToHide) {
                elem.style.display = "none";
            }

            // Show loading animation
            loading.style.display = "block";

            setTimeout(() => {
                // Hide loading animation
                loading.style.display = "none";

                // Sab kuch wapas show karna
                for (let elem of elementsToHide) {
                    elem.style.display = "block";
                }

            }, 1500); // Delay for loading effect
        });
    });
});




// Toggle 'active' class for buttons on click
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".custom-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active")); // Remove 'active' from all buttons
            this.classList.add("active"); // Add 'active' only to the clicked button
        });
    });
});

// Filter sections for carousel content based on button click
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const carouselSections = document.querySelectorAll("#carouselContainer .row");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Update active button styling
            buttons.forEach(btn => btn.classList.remove("custom-btn"));
            this.classList.add("custom-btn");

            // Get the selected category
            const target = this.getAttribute("data-target");

            // Hide/show carousel sections based on filter
            carouselSections.forEach(section => {
                if (section.getAttribute("data-filter") === target) {
                    section.style.display = "flex";
                } else {
                    section.style.display = "none";
                }
            });
        });
    });

    // Default show only 'latest' category
    carouselSections.forEach(section => {
        if (section.getAttribute("data-filter") !== "latest") {
            section.style.display = "none";
        }
    });
});



document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    });
});


// GSAP animations for different sections with scroll trigger
document.addEventListener("DOMContentLoaded", () => {
    // Hero Section Animation
    gsap.from("#home .centered", {
        y: 50,
        opacity: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#home",
            start: "top center",
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
            start: "top 80%",
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