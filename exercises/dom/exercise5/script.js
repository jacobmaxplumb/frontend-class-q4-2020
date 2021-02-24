const randomNumber = Math.floor(Math.random() * 16);
const ccells = document.querySelectorAll('.cell');
console.log(ccells);
ccells.forEach((cell, index) => {
    if (index === randomNumber) {
        cell.id = 'it';
    }
})

function cellClicked(e) {

    if (e.target.id === 'it') {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            if (cell.style.backgroundColor === 'green') {
                cell.style.backgroundColor = 'yellow';
            }
        });
        e.target.style.backgroundColor = 'red';
    } else {
        e.target.style.backgroundColor = 'green';
    }
}