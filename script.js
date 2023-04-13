gridContainer = document.querySelector('#gridContainer');
gridContainerWidth = gridContainer.offsetWidth;

function createGrid(numSquaresTarget) {
    let numSquares = 0;
    let numSquaresPerRow = Math.sqrt(numSquaresTarget);
    while (numSquares < numSquaresTarget) {
        addSquare(numSquaresPerRow);
        ++numSquares;
    }
}

function addSquare(numSquaresPerRow) {
    let square = document.createElement('div');
    square.classList.add('square');
    squareWidthAndHeight = (gridContainerWidth / numSquaresPerRow);
    square.style.width = squareWidthAndHeight+'px';
    square.style.height = squareWidthAndHeight+'px';
    gridContainer.appendChild(square);
}

createGrid(prompt('Cantidad de cuadros'))