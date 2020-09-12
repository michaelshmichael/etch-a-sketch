const gridContainer = document.querySelector('#gridContainer');

function genGrid(x) {
    for (i = 0; i < x; i++) {
       let row = document.createElement('div');
       row.classList.add('row');
       gridContainer.appendChild(row);
    }

    let rows = document.querySelector(".row")

    for (i = 0; i < x; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('square');
        rows.appendChild(gridSquare);
        console.log('added square')
    }   
}

genGrid(4);



// function genSquare(x) {
//      for (i = 0; i < x; i++) {
            
//             const gridSquare = document.createElement('div');
//             gridSquare.classList.add('square');
//             row.appendChild(gridSquare);
//             console.log('added square')
//         }   
// }

// genSquare(4);