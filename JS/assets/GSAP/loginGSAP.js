var tl = gsap.timeline()

tl
.from("nav",{
    // delay: 1,
    opacity: 0,
    duration: 1
})
.from(".login-section", {
    opacity: 0,
    y: 20,
})
.from([".login-content", "login-title"],{
    opacity: 0,
    y: 20,
})
.from(".login-form",{
    opacity: 0,
    y: 20,
    scale: 1.6
})
.from("footer",{
    opacity: 0,
    y: 20,
})