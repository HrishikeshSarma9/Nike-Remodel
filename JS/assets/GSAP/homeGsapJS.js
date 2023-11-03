var tl = gsap.timeline();

    tl
    .from("nav", {
      delay: 1,
      opacity: 0,
      duration: 1
    })
    .from(".nike-logo-bg", {
      x:20,
      opacity:0,
      // duration: 1
    })
    .from(".hero-grid .text-content", {
      x:20,
      opacity:0,
      duration: 1
    })
    
    .from(".shoe-image", {
      
      opacity:0,
      y:20,
      scale:.8,
      duration: 1
    })
    .to(".shoe-image", {
      y: 20,
      yoyo: true,
      repeat: "-1"
    })
    
    gsap.from(".limited-edition", {
      opacity: 0,
      y:40,
      duration: 2,
      scrollTrigger:{
        trigger: ".limited-edition",
        scoller: "body",
        // markers: true,
        scrub: 1,
        start: "middle 50%",
        end: "middle bottom",
      }
    })
    gsap.from(".featured-products h1", {
      opacity: 0,
      y:20,
      duration: 2,
      scrollTrigger:{
        trigger: ".featured-products h1",
        scoller: "body",
        // markers: true,
        scrub: 3,
        start: "top 60%",
        end: "top 10%",
      }
    })

    gsap.from(".mySwiper", {
      opacity: 0,
      y:50,
    //   duration: 1,
      scrollTrigger:{
        trigger: ".mySwiper",
        scoller: "body",
        // markers: true,
        scrub: 3,
        start: "top 50%",
        end: "top 50%",
      }
    })

    