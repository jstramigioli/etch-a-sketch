gridContainer = document.querySelector('#gridContainer');
gridContainerWidth = gridContainer.offsetWidth;
gridContainer.addEventListener('mouseover', e => changeSquareColor(e));

btnRowNum = document.querySelector('.rowNum');
btnRowNum.addEventListener('click', () => {
    setSquaresPerRow();
    updateGrid()}
)

btnGameMode = document.querySelector('.gameMode');
btnGameMode.addEventListener('click', changeGameMode);

let gameMode = 'normal'

function createGrid(numSquaresPerRow) {
    let numSquares = 0;
    if (numSquaresPerRow > 100) numSquaresPerRow = 100 ;
    while (numSquares < (numSquaresPerRow**2)) {
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

function changeSquareColor(e) {
    if (e.target.classList.contains('square') && gameMode === 'normal') {
        e.target.classList.toggle('black')
    }
    else if (e.target.classList.contains('square') && gameMode === 'color') {
        e.target.classList.toggle('color')
        e.target.style.backgroundColor = ('#'+Math.floor(Math.random()*16777215).toString(16))
    }
}

function removeSquares() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

function setSquaresPerRow() {
    numSquaresPerRow = prompt('Cantidad de cuadros por fila')
}

function updateGrid() {
    removeSquares();
    createGrid(numSquaresPerRow);
}

function changeGameMode() {
    if (gameMode === 'normal') {
        gameMode = 'color';
        btnGameMode.textContent = 'Color';
        updateGrid();
    }
    else {
        gameMode = 'normal';
        btnGameMode.textContent = 'Normal';
        updateGrid();
    }
}

