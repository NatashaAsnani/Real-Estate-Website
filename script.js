// gsap.from(".centered h1", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     delay: 0.5,
//   });
//   gsap.from(".centered button", {
//     scale: 0.8,
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//     ease: "elastic.out(1, 0.3)",
//   });
  

// gsap.from(".imgcol img", {
//     x: -200,
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out",
//   });
//   gsap.from(".connecting", {
//     x: 200,
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out",
//     delay: 0.3,
//   });
  
//   gsap.from(".card", {
//     y: 50,
//     rotate: 3,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.3,
//     ease: "power2.out",
//   });


// document.addEventListener("DOMContentLoaded", () => {
//     gsap.from("#about .imgcol img", {
//         x: -100,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//             trigger: "#about",
//             start: "top 90%", 
//         },
//     });

//     gsap.from("#services .third", {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//             trigger: "#services",
//             start: "top 80%",
//         },
//     });

//     gsap.from("#contact form", {
//         scale: 0.9,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//             trigger: "#contact",
//             start: "top 85%",
//         },
//     });
// });
// Set up canvas for the stars


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
