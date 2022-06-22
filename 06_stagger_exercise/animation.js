
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
  document.querySelector('body').appendChild(box)
  // 5 :) 
}
