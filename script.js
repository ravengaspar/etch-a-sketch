const canvas = document.querySelector('.canvas')
const rstbtn = document.querySelector('.reset')
const rainbow = document.querySelector('.rainbow')
const bw = document.querySelector('.bw')

const input = document.getElementById('input')

let grid = ''
let size = 256 // 16x16 grid

const drawCanvas = (size) => {
  for (let i = 0; i < size; i++) {
    grid = document.createElement('div')
    grid.classList.add('pixel')
    grid.classList.add('pixel' + i)
    canvas.appendChild(grid)
  }

  bw.addEventListener('click', bwButton)
  rainbow.addEventListener('click', rainbowButton)
  rstbtn.addEventListener('click', resetButton)

  eraser()
}

resetButton = () => {
  input.value = 'please set preffered grid size'
  location.reload()
}

bwButton = () => {
  let pixel = document.querySelectorAll('.pixel')
  pixel.forEach((pxl) => {
    pxl.addEventListener('mouseover', (e) => {
      pxl.classList.add('active')
      pxl.classList.remove('rnw')
      pxl.style.setProperty('--pixelColor', '#' + '000')
    })
  })
  rainbow.classList.remove('clicked')
  bw.classList.add('clicked')
}

rainbowButton = () => {
  let pixel = document.querySelectorAll('.pixel')

  pixel.forEach((pxl) => {
    pxl.addEventListener('mouseover', (e) => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16)
      pxl.classList.remove('active')
      pxl.classList.add('rnw')
      pxl.style.setProperty('--pixelColor', '#' + randomColor)
    })
  })
  bw.classList.remove('clicked')
  rainbow.classList.add('clicked')
}

eraser = () => {
  let pixel = document.querySelectorAll('.pixel')
  pixel.forEach((pxl) => {
    pxl.addEventListener('mousedown', (e) => {
      pxl.classList.remove('active')
      pxl.classList.remove('rnw')
      pxl.style.setProperty('--pixelColor', '#' + 'FFF')
    })
  })
}

drawCanvas(size)

input.addEventListener('input', (e) => {
  console.log(e.target.value)
  size = e.target.value * e.target.value
  canvas.innerHTML = ''
  if (e.target.value == 2) {
    canvas.style.setProperty('max-width', 4.5 + 'em')
  } else if (e.target.value == 3) {
    canvas.style.setProperty('max-width', 6.75 + 'em')
  } else if (e.target.value == 4) {
    canvas.style.setProperty('max-width', 9 + 'em')
  } else if (e.target.value == 5) {
    canvas.style.setProperty('max-width', 11.25 + 'em')
  } else if (e.target.value == 6) {
    canvas.style.setProperty('max-width', 13.5 + 'em')
  } else if (e.target.value == 7) {
    canvas.style.setProperty('max-width', 15.75 + 'em')
  } else if (e.target.value == 8) {
    canvas.style.setProperty('max-width', 18 + 'em')
  } else if (e.target.value == 9) {
    canvas.style.setProperty('max-width', 20.25 + 'em')
  } else if (e.target.value == 10) {
    canvas.style.setProperty('max-width', 22.5 + 'em')
  } else if (e.target.value == 11) {
    canvas.style.setProperty('max-width', 24.75 + 'em')
  } else if (e.target.value == 12) {
    canvas.style.setProperty('max-width', 27 + 'em')
  } else if (e.target.value == 13) {
    canvas.style.setProperty('max-width', 29.25 + 'em')
  } else if (e.target.value == 14) {
    canvas.style.setProperty('max-width', 31.5 + 'em')
  } else if (e.target.value == 15) {
    canvas.style.setProperty('max-width', 33.75 + 'em')
  } else if (e.target.value == 16) {
    canvas.style.setProperty('max-width', 36 + 'em')
  }

  drawCanvas(parseInt(size))
})
