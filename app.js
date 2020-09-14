const gridContainer = document.querySelector('#gridContainer');
const input = document.querySelector('button');
const gridAmount = 18;

// generate random RGB
function genRandomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let opacity = 1;
    let color = `rgb(${r}, ${g}, ${b}, ${opacity})`;
    return color;
}

// creates the grid
function genGrid(gridAmount) {
    for (i = 0; i < gridAmount; i++) {
       const row = document.createElement('div');
       row.classList.add('row');
       row.style.height = `${800/gridAmount}px`
       gridContainer.appendChild(row);
        for (j = 0; j < gridAmount; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${800/gridAmount}px`
            row.appendChild(square);
        } 
    }
    // giving coloring functionality
    let squares = Array.from(document.getElementsByClassName('square'))
    squares.forEach(function(square){
    
        square.addEventListener('mouseover', function drawOpacity(e) {
                if (e.target.id !== "gridContainer") {
                    let alphaStart = e.target.style.backgroundColor.slice(-4,-1);
                    if (alphaStart === 1) {
                        let alphaEnd = 1;
                    } else {
                        alphaEnd = Number(alphaStart) + 0.1;
                    }
                    e.target.style.backgroundColor = `rgba(0, 0, 0, ${alphaEnd})`;
                }
                //square.style.backgroundColor = `${genRandomColor()}`
            })      
        })
}

genGrid(gridAmount);

// need to make opacity change with each mouseover

// reset and resize the grid when click button
input.addEventListener('click', function(){
    let gridAmount = prompt("How many sqaures do you want? Please enter a value from 2 - 60.");
    
    // should make a better loop here to stop null entrance.
    if(gridAmount === '') {
        let gridAmount = prompt("How many sqaures do you want? Please enter a value from 2 - 60.");
    };
    
    // deleting all squares and rows (innerHTML is a bit hacky) 
    const row = Array.from(document.getElementsByClassName('row'));
    row.forEach(function(row){
        row.innerHTML = '';
    })
    gridContainer.innerHTML = '';
    // regenerate with new number
    genGrid(gridAmount);
});





