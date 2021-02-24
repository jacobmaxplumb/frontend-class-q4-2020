"use strict";
const pizzas = [
    { name: 'Pepperoni', calories: 300, toppings: ['Pepperoni'] },
    { name: 'Veggie', calories: 285, toppings: ['Mushrooms', 'Peppers', 'Olives'] }
];
const calculateTotalCalories = (array) => {
    let total = 0;
    array.forEach((pizza) => total += pizza.calories);
    return total;
};
// console.log(calculateTotalCalories(pizzas));
const doesPizzaHaveTopping = (pizza, topping) => {
    return pizza.toppings.some((t) => t === topping);
};
// const failValue = 'Pepperoni';
// const passValue = 'Mushrooms';
// console.log(doesPizzaHaveTopping(pizzas[1], failValue));
// console.log(doesPizzaHaveTopping(pizzas[1], passValue));
const buildPizza = (name, toppings) => {
    const calories = 200 + (20 * toppings.length);
    const pizza = {
        name,
        toppings,
        calories
    };
    return pizza;
};
// const p = buildPizza('Mystery', ['Pepperoni', 'Sausage'])
// console.log(p);
