const tl = gsap.timeline()
tl.from(".sect-lf h1",{
    x:-40,
    opacity:0,
    duration:1,
    stagger:0.3
})
tl.from(".sect-lf p",{
    y:-40,
    opacity:0,
    duration:1,
})
tl.from("button",{
    y:-40,
    opacity:0,
    duration:1,
})

gsap.from(".f-sect",{
    y:40,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:".f-sect"
})