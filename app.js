const gridContainer = document.querySelector('#gridContainer');
const gridAmount = 45;
const input = document.querySelector('button')

// creates the grid
function genGrid(gridAmount) {
    for (i = 0; i < gridAmount; i++) {
       const row = document.createElement('div');
       row.classList.add('row');
       row.style.height = `${800/gridAmount}px`
       gridContainer.appendChild(row);
        for (j = 0; j < gridAmount; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('square');
            gridSquare.style.width = `${800/gridAmount}px`
            row.appendChild(gridSquare);
        } 
    }
}
genGrid(gridAmount);


// reset and resize the grid when click button
input.addEventListener('click', function(){
    const gridAmount = prompt("How many sqaures do you want?");
    // deleting all squares and rows (innerHTML is a bit hacky) 
    const row = Array.from(document.getElementsByClassName('row'));
    row.forEach(function(row){
        row.innerHTML = '';
    })
    gridContainer.innerHTML = '';
    // regenerate with new number
    genGrid(gridAmount);
    
    // why does this need to be repeated here
    squares = Array.from(document.getElementsByClassName('square'))
        squares.forEach(function(square){
            square.addEventListener('mouseover', function(){
                square.classList.add('squareAltered')
            })
        })
})


// mouseover drawing effect
let squares = Array.from(document.getElementsByClassName('square'))
squares.forEach(function(square){
    square.addEventListener('mouseover', function(){
        square.classList.add('squareAltered')
    })
})
