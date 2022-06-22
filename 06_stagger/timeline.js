
gsap.to('.box', {
  x: 10,
  backgroundColor: 'red',
  // duration: 3,
  stagger: {
    amount: 5,
    from: 12,
    grid: 'auto'
  }
})