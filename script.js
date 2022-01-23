const canvas = document.querySelector('.canvas')
const rstbtn = document.querySelector('.reset')
const rainbow = document.querySelector('.rainbow')

let grid = ''
let size = 256 // 16x16 grid

const drawCanvas = (size) => {
  for (let i = 0; i < size; i++) {
    grid = document.createElement('div')
    grid.classList.add('pixel')
    grid.classList.add('pixel' + i)
    canvas.appendChild(grid)
  }

  resetButton = () => {
    location.reload()
  }

  rainbowButton = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16)
    document.documentElement.style.setProperty('--rainbow', '#' + randomColor)
  }

  rainbow.addEventListener('click', rainbowButton)
  rstbtn.addEventListener('click', resetButton)
}

const active = () => {
  let pixel = document.querySelectorAll('.pixel')
  pixel.forEach((pxl) => {
    pxl.addEventListener('mouseover', (e) => {
      pxl.classList.add('active')
    })
  })
}

drawCanvas(size)
active()
