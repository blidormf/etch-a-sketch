const newGridButton = document.querySelector('#new-grid');
const container = document.querySelector('#container');

newGridButton.addEventListener('click', createNewGrid);

function createNewGrid() {
    container.innerHTML = '';

    const rows = prompt('Enter the number of rows');
    const columns = prompt('Enter the number of columns');

    if (rows < 1 || rows > 40 || columns < 1 || columns > 40) {
        alert("Please enter a number between 1 and 40!")
        return;
    }

    container.style.padding = (700 - 16 * rows) / 2 + 'px ' + (700 - 16 * columns) / 2 + 'px';
    container.style.boxSizing = 'border-box';

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const square = document.createElement('div');
            square.setAttribute('id', 'square');
            square.addEventListener('mouseover', rainbowColor);
            container.appendChild(square);
        }
    }
}

function rainbowColor(e) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}