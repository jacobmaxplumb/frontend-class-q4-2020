

// function getInput() {
//     let nameInput = document.getElementById('name');
//     console.log(nameInput);
// }

// getInput();

// let divTextElement = document.getElementById('some-text');
// divTextElement.innerText += 'jacob';
// console.log(divTextElement.innerText);
//divTextElement.innerText = '<h1>jacob</h1>';
//document.getElementById('area').innerText = "this is my text";
// document.querySelector('#area').innerText = "jacob"
const myClasses = document.querySelectorAll('.my-class');
console.log(myClasses)
for (let classs of myClasses) {
    classs.innerText = 'jacob'
}