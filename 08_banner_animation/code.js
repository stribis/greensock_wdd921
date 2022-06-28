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


line_p_tl.to('.line',{})