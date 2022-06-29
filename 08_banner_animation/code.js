gsap.registerPlugin(TextPlugin)


// 1. Timeline for web and sae logos
const logos_tl = gsap.timeline()
// 2. Line and p tag text timeline
const line_p_tl = gsap.timeline().pause()
// 3. Timeline for unordered list
const ul_tl = gsap.timeline().pause()
// 4. Call to Action timeline
const cta_tl = gsap.timeline().pause()

// 1. Web and SAE Logo

logos_tl.to('.web', {
  scale: 1.4,
  ease: 'linear',
  duration: 0.6
})
.to('.web', {
  scale: 1,
  ease: 'bounce.out',
  duration: 0.6
})
.to('.web', {
  scale: 1.4,
  ease: 'linear',
  duration: 0.6
})
.to('.web', {
  scale: 1,
  ease: 'bounce.out',
  duration: 0.6
})
.to('.web', {
  scale: 1.4,
  ease: 'linear',
  duration: 0.6
})
.to('.web', {
  scale: 1,
  ease: 'bounce.out',
  duration: 0.6
})
.set('.web', {
  autoAlpha: 0
})
.from('.sae', {
  opacity: 0,
  duration: 0.3,
  left: '-100%',
  onComplete : () => line_p_tl.resume()
})


line_p_tl.fromTo('.line',{
  autoAlpha: 0
}, {
  autoAlpha: 1,
  duration: 0.2,
  repeat: 6
}, '+=1')
.to('.text', {
  text: 'Programmiere <br> deine <br> Zukunft',
  duration: 2,
  ease: 'linear'
})
.to('.text', {
  top: '10%',
  ease: 'elastic.out(1, 0.3)',
  duration: 2,
  onComplete: () => ul_tl.resume()
  
})

ul_tl.to('ul li', {
  autoAlpha: 1,
  stagger: {
    amount: 1.8,
    from: 0
  }
})
.to('ul li', {
  autoAlpha: 0,
  stagger: {
    amount: 0.4,
    from: 5
  },
  onComplete: () => cta_tl.resume()
}, '+=1')


cta_tl.set('.cta', {
  display: 'block',
  height: 0
})
.to('.cta', {
  autoAlpha: 1,
  padding: '1.4rem 0',
  duration: 1,
  height: 'auto'
})


document.querySelector('.cta a').addEventListener('click', e => {
  cta_tl.to('.cta', {
    scale: 1.3,
    duration: 1
  })
})