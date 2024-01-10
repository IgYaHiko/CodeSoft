/*   const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});   */




Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .3,
  });

  Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

/* Shery.hoverWithMediaCircle(".hvr", {video: ["./pain.mp4"]});
 */
Shery.hoverWithMediaCircle(".hvr",{images: []});




/* 
gsap.to(".ele", {
  scrollTrigger: {
    trigger: ".images",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
}); */



gsap.to(".ele", {
  scrollTrigger: {
    trigger: ".featuredImg",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: "#last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});


let sections = document.querySelectorAll(".ele");
//Custom Scroll Trigger
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach((section,index) => {
        ScrollTrigger.create({
           trigger: section,
           start: "top top",
           scrub: 1,
           onUpdate: function(prog) {
              setScroll(prog.progress+index);
           },
        });
    });
  },
}); 


