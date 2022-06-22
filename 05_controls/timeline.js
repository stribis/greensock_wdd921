

  const tl_a = gsap.timeline().pause()
  tl_a.to('.a', {
    x: 300,
    y: 500,
    rotate: 360,
    duration: 4
  })
  .to('.a', {
    x: 500,
    y: 300,
    rotate: 0,
    duration: 4
  })
  .to('.a', {
    x: 0,
    y: 0,
    rotate: 360,
    duration: 4
  })
  // Play
  document.querySelector('.play').addEventListener('click', ()=> tl_a.play())
  // Pause
  document.querySelector('.pause').addEventListener('click', ()=> tl_a.pause())
  // Reverse
  document.querySelector('.reverse').addEventListener('click', ()=> tl_a.reverse())
  // Accelerate
  document.querySelector('.acc').addEventListener('click', ()=> tl_a.timeScale(2))
  // Slow
  document.querySelector('.slow').addEventListener('click', ()=> tl_a.timeScale(0.5))
  // Seek
  document.querySelector('.seek').addEventListener('click', ()=> tl_a.seek(8))
  // Progress
  document.querySelector('.prog').addEventListener('click', ()=> tl_a.progress(0.33))
  // Restart
  document.querySelector('.restart').addEventListener('click', ()=> tl_a.restart())