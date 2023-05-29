const container = document.querySelector("#container");
console.log(container);
let rows = document.getElementsByClassName("gridRow");
let cells =document.getElementsByClassName("cell");

function createGrid(){
    makeColumns(16);
    makeRows(16);
}

// function makeColumns(columnNumber){
//     for (let c = 0; c<columnNumber; c++){
//         let column = document.createElement('div');
//         column.className = "cell";
//         container.appendChild(column)
//         column.className = "cell";
//     }
// }

// function makeRows(rowNumber){
//     for (let r = 0; r<rowNumber; r++){
//         for (let i = 0; i<columnNumber)
//         let row = document.createElement('div');
//         row.className = "gridRow";
//         container.appendChild(row)
//         row.className = "gridRow";
//     }
// }

function makeGrid(){
    //prints a sinle row
    for (let i = 0; i<16; i++){
        const row = document.createElement('div');
        row.classList.add('row');

        //fills the row with cells that make columns
        for (let i = 0; i<16; i++){
            const column = document.createElement('div');
            column.classList.add('column');
            container.appendChild(column);
        
        }
        container.appendChild(row);
        let br = document.createElement('br');
        container.appendChild(br);
    }
}


// for (let i = 0; i<16; i++){
//     const divider = document.createElement('div');
//     container.appendChild(divider);
// }