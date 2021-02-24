// const list = document.getElementById('list');
// const input = document.getElementById('name');
// const myCheckbox = document.getElementById('my-checkbox');
// myCheckbox.checked = true;

function formSubmitted(e) {
    e.preventDefault();
    const nameForm = document.getElementById('name-form');
    const nameFormData = new FormData(nameForm);
    const firstName = nameFormData.get('firstname');
    console.log(firstName);
    console.log('form submitted');
}

// function addListItem(e) {
//     if (myCheckbox.checked) {
//         const text = input.value;
//         const li = document.createElement('li');
//         li.innerText = text;
//         li.addEventListener('click', (e) => {
//             e.stopPropagation();
//             console.log('I got clicked')
//         });
//         list.append(li);
//     } else {
//         alert('checkbox needs to be checked to add list items');
//     }
    
// }

// function logUl(e) {
//     console.log('ul got clicked');
// }

// function addPTag(e) {
//     const pTag = document.createElement('p');
//     pTag.innerText = 'new';
//     document.body.append(pTag);
// }