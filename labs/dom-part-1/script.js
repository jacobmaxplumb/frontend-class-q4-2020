let total = 0.00;

function updateTotal(price) {
    total += price;
    const totalElement = document.getElementById('total');
    totalElement.innerText = `$ ${total}.00`;
}

function limeColaClicked() {
    updateTotal(2.00);
}

function saltedPeanutsClicked() {
    updateTotal(3.00);
}

function chocolateBarClicked() {
    updateTotal(4.00);
}

function fruitGummiesClicked() {
    updateTotal(6.00);
}