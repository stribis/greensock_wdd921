

gsap.to('.mr-circle',{
  x: 300, 
  duration: 5, 
  ease: 'none'
})

gsap.from('.mrs-square', {
  y: 500,
  x: 300,
  duration:4,
  yoyo: true,
  repeat: 1
})

gsap.fromTo('.mr-square', {
  x: 500,
  opacity: 0.5
}, {
  x: 200,
  opacity: 1,
  duration: 2
})

gsap.set('.mrs-circle', {
  x: 400,
  y: 20,
  opacity: 0.7 
})