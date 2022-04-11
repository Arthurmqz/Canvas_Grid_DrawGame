'use strict'

const canvas = document.querySelector('#grid')
const ctx = canvas.getContext('2d')

const position = { x: 0, y: 0 }

//Loop function to create the checkered table
function setup() {
  for (let i = 0; i < canvas.width; i += 20) {
    //creation of vertical lines
    ctx.moveTo(i, 0)
    ctx.lineTo(i, canvas.height)

    //creation of horizontal lines
    ctx.moveTo(0, i)
    ctx.lineTo(canvas.width, i)
    //To be possible to see the checkered table
    ctx.strokeStyle = '#f0f0f0'
    ctx.stroke()
  }
}

//Draw function and eventListener to user create their drawing
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  //setup need to be here to not clear our checkered table
  setup()
  //draw creation
  ctx.rect(position.x, position.y, 20, 20)
  //Similar to .stroke, to be possible see the fill rectangle
  ctx.fill()
}

document.addEventListener('keydown', function (event) {
  const { key } = event
  //Conditional to create a down arrow
  if (key === 'ArrowDown') {
    position.y += 20
    draw()
  }
  //Conditional to create a right arrow
  if (key === 'ArrowRight') {
    position.x += 20
    draw()
  }
  //Conditional to create a up arrow
  if (key === 'ArrowUp') {
    position.y -= 20
    draw()
  }
  //Conditional to create a left arrow
  if (key === 'ArrowLeft') {
    position.x -= 20
    draw()
  }
})

setup()
draw()
