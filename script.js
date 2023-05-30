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
    const gridNumber = rangeSlider.value;
    let gridArea = gridNumber * gridNumber;

    // Clear the existing grid
    // container.innerHTML = '';

    // Set the CSS custom property (--grid-size) to the new grid size
    // container.style.setProperty('--grid-size', gridArea);

    //prints a sinle row
    for (let i = 0; i<gridArea; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('cell');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    }
    
}

function pixelSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    createGrid(rangeSlider.value);
}


// Event Listeners
rangeSlider.addEventListener('mouseup', pixelSize);
output.innerHTML = rangeSlider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
rangeSlider.oninput = function() {
    output.innerHTML = this.value;
}

// Add an event listener to the slider input event
rangeSlider.addEventListener('input', createGrid);


createGrid(rangeSlider.value);



// const row = document.createElement('div');
// const wholeRow = document.createElement('div')
// row.classList.add('cell');


// //fills the row with cells that make columns
// for (let i = 0; i<gridSize-1; i++){
//     const column = document.createElement('div');
//     column.classList.add('cell');
//     wholeRow.appendChild(column);

// }
// gridContainer.appendChild(wholeRow);
// wholeRow.appendChild(row);
// let br = document.createElement('br');
// gridContainer.appendChild(br);