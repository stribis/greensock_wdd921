
// Tween are simple point to point animations where you get to define what the "start" or / and "end" points are
// .to()
// .to() lets use animate to desired properties using the set styles as a start
gsap.to('.mr-circle',{
  x: 300, 
  duration: 5, 
  ease: 'none'
})

// .from()
// .from() lets us animate from set properties using the set css styles as an end
gsap.from('.mrs-square', {
  y: 500,
  x: 300,
  duration:4,
  yoyo: true,
  repeat: 1
})

// .fromTo()
// .fromTo() is a combination of both from and to. It lets us set the properties we want to change at the
// start and end of an animation
gsap.fromTo('.mr-square', {
  x: 500,
  opacity: 0.5
}, {
  x: 200,
  opacity: 1,
  duration: 2 // We only need ONE duration when using fromTo
})

// .set()
// .set() just sets css properties (just like element.style.color = 'red' in JS sets color to red)
gsap.set('.mrs-circle', {
  x: 400,
  y: 20,
  opacity: 0.7 
  // set does NOT need a duration
})

// Tween can be saved into variables if we desire 
let foo = gsap.to('.mr-circle', {
  x: 20,
  duration: 20
})