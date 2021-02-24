function translateWord() {
    const wordInput = document.getElementById('word').value;
    const resultContainer = document.getElementById('translated-word');
    resultContainer.innerText = translate(wordInput);
}

function translate(word) {
    // same as line below 
    // const firstLetter = word[0];
    // word.shift() - takes off first letter
    console.log('hit me');
    const lowerCaseWord = word.toLowerCase();
    const wordArray = lowerCaseWord.split('');
    const firstLetter = wordArray.shift(); // takes off and returns first letter
    if (firstLetter === 'a' 
    || firstLetter === 'e' 
    || firstLetter === 'i' 
    || firstLetter === 'o' 
    || firstLetter === 'u') {
        return lowerCaseWord + 'way';
    }
    return wordArray.join('') + firstLetter + 'ay';
}

// module.exports = {
//     translate,
//     translateWord
// }