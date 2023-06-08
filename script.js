const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
const container = document.querySelector("#gridContainer");
const colorChoiceWrapper = document.querySelector('#color-choice-wrapper')
const colorChoice = document.querySelector("#color-select");
const backgroundColor = document.querySelector("#bg-color-select");
const backgroundColorChoiceWrapper = document.querySelector('#background-color-choice-wrapper')
const colorFill = document.querySelector("#fill-all");
const pipette = document.querySelector("#pipette");
const eraser = document.querySelector("#eraser");
const rainbow = document.querySelector("#rainbow");
const shader = document.querySelector("#shader");
const lighter = document.querySelector("#lighter");
const clearAll = document.querySelector("#reset");
const rangeSlider = document.querySelector('#myRange');
const output = document.getElementById("demo");


colorChoice.oninput = (e)=>setCurrentColor(e.target.value);
colorChoice.onclick = () => setCurrentMode('color')
backgroundColor.oninput = (e)=>setCurrentBackgroundColor(e.target.value);
backgroundColor.onclick = () => setCurrentMode('colorAll')
rainbow.onclick = () => setCurrentMode('rainbow')
eraser.onclick = () => setCurrentMode('eraser');
shader.onclick = () => setCurrentMode('darker')
lighter.onclick = () => setCurrentMode('lighten')
pipette.onclick = () => setCurrentMode('pipette')
clearAll.onclick = () => resetGrid();

function setCurrentColor(newColor) {
  currentColor = newColor
}

function setCurrentMode(newMode) {
  activateButton(newMode)
  currentMode = newMode
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function resetGrid(){
  container.innerHTML = "";
}

function createGrid(){
    resetGrid();
    
    container.style.gridTemplateColumns = `repeat(${rangeSlider.value}, 1fr)`
    container.style.gridTemplateRows = `repeat(${rangeSlider.value}, 1fr)`
  
    for (let i = 0; i < rangeSlider.value * rangeSlider.value; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add('cell')
      gridElement.addEventListener('mouseover', changeColor)
      gridElement.addEventListener('mousedown', changeColor)
      container.appendChild(gridElement)
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    } else if (currentMode === 'darker'){
      e.target.style.backgroundColor = ''
    } else if (currentMode === 'lighter'){
      e.target.style.backgroundColor = ''
    } else if (currentMode === 'pipette'){
      let cells = document.querySelectorAll('.cell')
        for (let i = 0; i<cells.length; i++){
          cells[i].addEventListener('click', function (){
            colorChoice = this.style.backgroundColor
            currentColor.valueList = this.style.backgroundColor
          })
        }
    }
  }

  function activateButton(newMode){
    if (currentMode === "rainbow"){
      rainbow.classList.remove("active")
    } else if (currentMode === 'color'){
      colorChoice.classList.remove('active')
    } else if (currentMode === "eraser"){
      eraser.classList.remove('active')
    } else if (currentMode === "darker"){
      shader.classList.remove('active')
    } else if (currentMode === "lighten"){
      lighter.classList.remove('active')
    } else if (currentMode === "pipette"){
      pipette.classList.remove('active')
    }

    if (newMode === 'rainbow') {
      rainbow.classList.add('active')
    } else if (newMode === 'color') {
      colorChoice.classList.add('active')
    } else if (newMode === 'eraser') {
      eraser.classList.add('active')
    } else if (currentMode === "darker"){
      shader.classList.add('active')
    } else if (currentMode === "lighten"){
      lighter.classList.add('active')
    } else if (currentMode === "pipette"){
      pipette.classList.add('active')
    }

  }

function setCurrentBackgroundColor(newColor){
  currentBackgroundColor = newColor;
  let cells = document.querySelectorAll('.cell')
  for (let i = 0; i<cells.length; i++){
    cells[i].style.backgroundColor = newColor;
  }
}


// Event Listeners
output.innerHTML = rangeSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
rangeSlider.oninput = function() {
    output.innerHTML = this.value;
}

// Add an event listener to the slider input event
rangeSlider.addEventListener('input', createGrid);
colorChoice.addEventListener('input', function(){
  currentMode = 'color';
  console.log(colorChoice.value);
});

backgroundColor.addEventListener('input', function(){
  console.log(backgroundColor.value);
})

clearAll.addEventListener('mousedown', function(){
  resetGrid();
  console.log('lmao')
  rangeSlider.value = 10
  createGrid();
})

colorChoice.onchange = function() {
	colorChoiceWrapper.style.backgroundColor = colorChoice.value;    
}
colorChoiceWrapper.style.backgroundColor = colorChoice.value;

backgroundColor.onchange = function(){
  backgroundColorChoiceWrapper.style.backgroundColor = backgroundColor.value;
}
backgroundColorChoiceWrapper.style.backgroundColor = backgroundColor.value;

window.onload = () => {
  createGrid(rangeSlider.value);
  gridArea = rangeSlider.value;
  activateButton(DEFAULT_MODE)
}

//WORKING CODE WITHOUT FLEXBOX
// for (let i = 0; i<rangeSlider.value; i++){
//     let breaker = document.createElement('br');
//     let gridItem = document.createElement('div');
//     gridItem.classList.add('cell');
//     container.appendChild(breaker);
//     container.appendChild(gridItem);
//     for (let j=0; j<rangeSlider.value-1; j++){
//         let gridItem = document.createElement('div');
//         gridItem.classList.add('cell');
//         container.appendChild(gridItem);
//     }
// }

//WORKING CODE WITH FLEXBOX 
// for (let i = 0; i<rangeSlider.value; i++){
//     let gridItem = document.createElement('div');
//     gridItem.classList.add('cell');
//     let rowDiv = document.createElement("div");
//     rowDiv.classList.add('cell-div')
//     container.appendChild(rowDiv);
//     rowDiv.appendChild(gridItem);
//     for (let j=0; j<rangeSlider.value-1; j++){
//         let gridItem = document.createElement('div');
//         gridItem.classList.add('cell');
//         rowDiv.appendChild(gridItem);
//     }
// }
//