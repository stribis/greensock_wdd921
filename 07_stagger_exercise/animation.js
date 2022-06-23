
// Page width
const pageWidth = window.innerWidth
// Page height
const pageHeight = window.innerHeight
// Columns
const cols = 25
// Size of box
const boxSize = Math.floor(pageWidth/cols)
// Number of rows
const rows = Math.floor(pageHeight/boxSize)
// number of boxes
const numBoxes = rows * cols

// Creating 200 boxes in the DOM

// 1. Create a loop that iterates 200 times

for ( let i = 0; i < numBoxes ; i++){
  
  // 2. Create a div and save it in a variable x
  const box = document.createElement('div')
  // 3. give a class to x
  box.classList.add('box')

  // add width and height to box
  box.setAttribute('style', 'width: ' + boxSize + 'px; height: ' + boxSize + 'px;')
  // 4. append x in the body of the document
  document.querySelector('.container').appendChild(box)
  // 5 :) 
}


gsap.to('.box', {
  opacity: 0,
  background: 'rgb(112, 0, 112)',
  borderRadius: '50%',
  scale: 0.1,
  ease: 'ease.inOut',
  y: 33,
  yoyo: true,
  repeat: -1,
  // duration: 3
  stagger : {
    amount: 2,
    grid: 'auto',
    from: 'center'
  }

})