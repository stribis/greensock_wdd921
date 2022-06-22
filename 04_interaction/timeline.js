

const tl_b = gsap.timeline().pause()

tl_b.to('.b', {
  x: 50,
  y: 40,
  rotate: 360,
  duration: 2
})
.to('.b', {
  x: 1000,
  y: 800,
  rotate: 0,
  duration: 2
})
.to('.b', {
  x: 90,
  y: 110,
  rotate: 360,
  duration: 2
})

document.querySelector('.toggle').addEventListener('click', e => {
  const tl_a = gsap.timeline()
  tl_a.to('.a', {
    x: 300,
    y: 500,
    rotate: 360,
    duration: 2,
    onStart: animationStart
  })
  .to('.a', {
    x: 500,
    y: 300,
    rotate: 0,
    duration: 2,
    onUpdate: () => console.log('updating')
  })
  .to('.a', {
    x: 0,
    y: 0,
    rotate: 360,
    duration: 2,
    onComplete: function () {
      console.log('animation is done')
      tl_b.resume()
    }
  })
} )

function animationStart () {
  console.log('Animation has started')
}