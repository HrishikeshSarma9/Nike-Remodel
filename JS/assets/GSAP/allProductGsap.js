var tl = gsap.timeline();

    tl
    .from("nav",{
      delay:1,
      opacity: 0,
      duration : 1,
      
    })
    .from(".container .title", {
    opacity: 0,
    y:20,
    duration: 1,
    })
    .from(".container .title-women", {
    opacity: 0,
    y:20,
    duration: 1,
    })
    .from(".women-all-shoe",{
      opacity: 0,
      y:20,
      duration: 2,
      
    }
    )
    tl.from(".title-men",{
      opacity:0,
      y:20,
      // duration:2,
      scrollTrigger:{
        trigger: ".title-men",
        scoller: "body",
        // markers: true,
        scrub: 2,
        start: "bottom 40%",
        end: "bottom 50%"
      }
    })
    tl.from(".men-all-shoe",{
      opacity: 0,
      y:20,
      // duration: 2,
      scrollTrigger:{
        trigger: ".men-all-shoe",
        scoller: "body",
        // markers: true,
        scrub: 3,
        start: "7% 40%",
        end: "20% 50%",
      }
    }
    )
    tl.from(".title-kid",{
      opacity:0,
      y:20,
      duration:2,
      scrollTrigger:{
        trigger: ".title-kid",
        scoller: "body",
        // markers: true,
        scrub: 3,
        start: "20% 40%",
        end: "middle 50%"
      }
    })
    tl.from(".kid-all-shoe",{
      opacity: 0,
      y:20,
      // duration: 2,
      scrollTrigger:{
        trigger: ".kid-all-shoe",
        scoller: "body",
        // markers: true,
        scrub: 3,
        start: "4% 40%",
        end: "20% 50%",
      }
    }
    )
    tl.from("footer",{
      opacity:0,
      y:20,
      duration:2,
      scrollTrigger:{
        trigger: "footer",
        scoller: "body",
        // markers: true,
        scrub: 3,
        start: "bottom 70%",
        end: "bottom 70%"
      }
    })