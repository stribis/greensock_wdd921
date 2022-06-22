// Timelines can be saved into variables and be expanded upon even after being defined
const tl = gsap.timeline()
// If we want to add settings to the timeline we would just add an object as a parameter 
// .eg : timeline({repeat: -1})

// Timelines are just chains of tweens. 
tl.to('.mr-square', {
  x : 500,
  duration: 1
})
.to('.mr-square', {
  y: 500,
  duration: 1,
  autoAlpha: 0
})