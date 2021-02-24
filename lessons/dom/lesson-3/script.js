
function clickLi(event) {
    event.target.remove();
}

const listItem = document.getElementById('list-item');
listItem.addEventListener('keypress', keyPressed);

function keyPressed(event) {
    event.target.remove();
    console.log(event);
    console.log(event.key);
    console.log(event.target.value);
}
// const text = document.getElementById('text');
// const text2 = document.getElementById('text-2');
// text.addEventListener('click', clickText);
// text2.addEventListener('click', clickText);
// input.addEventListener('keypress', (e) => {
//     console.log(e);
//     console.log(e.key);
//     console.log(e.target.value);
// });
function main() {
    console.log(event);
    event.target.remove();
    const unorderedList = document.getElementById('unorder-list');
    const input = document.getElementById('list-item');
    const inputValue = input.value;
    const listItem = document.createElement('li');
    listItem.innerText = inputValue;
    listItem.addEventListener('click', (event) => event.target.remove())
    unorderedList.append(listItem);
    // const el = document.createElement('div');
    // el.innerText = 'click me 2';
    // document.body.append(el);
    // const container = document.getElementById('container');
    // const head = document.createElement('div');
    // head.style.backgroundColor = 'blue';
    // head.innerText = 'this is my div tag';
    // container.append(head);

    // const temp = document.getElementById('temp');
    // temp.remove();

    // const text = document.getElementById('text');
    // text.style.backgroundColor = 'red';

    // const one = document.getElementById('one');
    // const two = document.getElementById('two');

    // one.innerText = 'hello <h1>jacob</h1>';
    // two.innerHTML = 'hello <h1>jacob</h1>';
}