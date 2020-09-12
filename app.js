const gridContainer = document.querySelector('#gridContainer');
const gridAmount = 45;
const input = document.querySelector('button')

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

//Mouseover drawing effect
const squares = Array.from(document.getElementsByClassName('square'))
squares.forEach(function(square){
    square.addEventListener('mouseover', function(){
        square.classList.add('squareAltered')
    })
})

//This is a mess with NodeLists, etc. deleting child nodes
input.addEventListener('click', function(){
    const gridAmount = prompt("How many sqaures do you want?")
    const gridSquare = document.querySelectorAll('.square', '.squareAltered');
    const row = document.querySelectorAll('row');
    // //row.removeChild(gridSquare)
    // const row = document.getElementsByClassName("row");
    // while (row.firstChild) {
    //     row.removeChild(row.firstChild);
    // }
    row.parentNode.removeChild(row);
    genGrid(gridAmount);
})
