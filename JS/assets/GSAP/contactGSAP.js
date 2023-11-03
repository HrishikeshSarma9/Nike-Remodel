var tl = gsap.timeline();

tl
.from("nav",{
    // delay: 1,
    opacity: 0,
    duration: 1
})
.from([".contact-image", ".contact-content"],{
    opacity: 0,
    y: 30,
})
.from(".contact-form", {
    opacity: 0,
    y:20,
    duration: 1
})
