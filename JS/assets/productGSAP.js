var tl = gsap.timeline();

tl.from("nav",{
  delay: 1,
  opacity: 0,
  duration : 1,
})

tl.from(".container h1", {
opacity: 0,
y: 20,

})
.from(".product-data",{
  opacity: 0,
  y: 20
}
)

