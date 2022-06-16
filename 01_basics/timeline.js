const tl = gsap.timeline()

tl.to('.mr-square', {
  x : 500,
  duration: 1
})
.to('.mr-square', {
  y: 500,
  duration: 1,
  autoAlpha: 0
})