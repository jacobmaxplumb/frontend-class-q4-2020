function convertTemp(temp, unit) {
    if (unit === 'C') {
        return temp * (9/5) + 32;
    } else if (unit === 'F') {
        return (temp - 32) * (5/9);
    }
}

function sayHello() {
    console.log('hello')
}

module.exports = {
    convertTemp: convertTemp
}