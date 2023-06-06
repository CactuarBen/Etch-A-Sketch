const container = document.querySelector("#gridContainer");
const colorChoice = document.querySelector("color-select");
const backgroundColor = document.querySelector("bg-color-select");
const colorFill = document.querySelector("#fill-all");
const pipette = document.querySelector("pipette");
const eraser = document.querySelector("eraser");
const rainbow = document.querySelector("rainbow");
const shader = document.querySelector("shader");
const lighter = document.querySelector("lighter");
const clearAll = document.querySelector("reset");
const rangeSlider = document.querySelector('#myRange');
const output = document.getElementById("demo");

function createGrid(){
    //prints a sinle row
    container.innerHTML = "";
    
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


createGrid(rangeSlider.value);
gridArea = rangeSlider.value;

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