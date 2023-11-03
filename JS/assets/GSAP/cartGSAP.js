var tl = gsap.timeline();

tl
.from("nav", {
    delay: 1,
    opacity: 0,
    duration: 1
})
.from(".title-bag", {
    opacity: 0,
    y: 20,
    duration:1
})
.from(".item-image", {
    opacity: 0,
    y: 20,
    
})
.from(".item-detail-content", {
    opacity: 0,
    x: 20,
    
})
.from(".item-quantity", {
    opacity: 0,
    x: 20,
})
.to(".item-quantity", {
    x: 20,
    yoyo: true,
})
.from(".card-header", {
    opacity: 0,
    x: 20,
})
.from(".card-body", {
    opacity: 0,
    x: 20,
})
.from(".card-footer", {
    opacity: 0,
    x: 20,
    scale:1.6
})
.from("footer", {
    opacity: 0,
    y: 20,
    duration: 1
})
