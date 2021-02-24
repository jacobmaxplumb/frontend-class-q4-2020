const name = 'Mitch Cuckovich';
const age = 25;
const birthday = 'Januarary 24';
const detroitGC = false;
const lifeEvents = ['I was born', 'I went to college', 'I can run', 'I graduated'];

function myLab1Function(name, age, birthday) {
    if (detroitGC) {
        console.log(`My name is ${name} i am ${age} years old, my birthday is ${birthday}`)
    } else {
        console.log(`my name is ${name} - ${age} - ${birthday}`);
    }
    for (let i = 0; i < lifeEvents.length; i++) {
        console.log(lifeEvents[i])
    }
    let counter = 0;
    while (true) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        if (randomNumber !== 5) {
            counter++;
            console.log(`${randomNumber} !== 5`)
        } else {
            counter++;
            console.log(`5 === 5 it took ${counter} times to get 5`);
            break;
        }
    }
}

myLab1Function(name, age, birthday);