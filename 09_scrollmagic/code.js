// ScrollMagic Animation

if (document.documentElement.clientWidth > 790) {
  // Initialize Controller
  let controller = new ScrollMagic.Controller();

  // 1. Parallax Background

  new ScrollMagic.Scene({
    triggerElement: "#parallax",
    triggerHook : "onEnter"
  })
  .duration('200%')
  .setTween('#parallax', {
    backgroundPosition: "50% 100%",
    ease: Linear.easeNone 
  })
  .addTo(controller)


  // 2. Pin Effect

  new ScrollMagic.Scene({
    triggerElement: '#slideIn',
    triggerHook: 'onLeave'
  })
  .setPin('#slideIn')
  .duration('100%')
  .addIndicators()
  .addTo(controller)




  // 3. SlideIn2  
  const fromLeftTimeline = gsap.timeline()
  const fadeTimeline = gsap.timeline()
  const fromBottomTimeline = gsap.timeline()


  fromLeftTimeline
  .from('.left', {
    x: -500,
    autoAlpha: 0,
    duration: 3
  })

  fadeTimeline
  .from('.fade', {
    autoAlpha: 0,
    duration: 1
  })

  fromBottomTimeline
  .from('.bottom', {
    y: 500,
    duration: 2
  })

  
  
  new ScrollMagic.Scene({
    triggerElement: '#slideIn2',
    offset: 300
  })
  .setTween(fromLeftTimeline)
  .duration(400)
  .addIndicators()
  .addTo(controller)

  new ScrollMagic.Scene({
    triggerElement: '#slideIn2',
    offset: 300
  })
  .setTween(fromBottomTimeline)
  .duration(400)
  .addIndicators()
  .addTo(controller)

  new ScrollMagic.Scene({
    triggerElement: '#slideIn2',
    offset: 300
  })
  .setTween(fadeTimeline)
  .duration(400)
  .addIndicators()
  .addTo(controller)




}
