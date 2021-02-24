function toggleMenuItems(e) {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hide');
}

function lettersClicked(e) {
    e.preventDefault();
    const shownNumbers = document.getElementById('shownNumbers');
    const shownLetters = document.getElementById('shownLetters');
    shownNumbers.classList.add('hide');
    shownLetters.classList.remove('hide');
}

function numbersClicked(e) {
    e.preventDefault();
    const shownNumbers = document.getElementById('shownNumbers');
    const shownLetters = document.getElementById('shownLetters');
    shownNumbers.classList.remove('hide');
    shownLetters.classList.add('hide');
}