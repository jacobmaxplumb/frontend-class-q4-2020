interface Pizza {
    name: string;
    calories: number;
    toppings: string[];
}

const pizzas: Pizza[] = [
    {name: 'Pepperoni', calories: 300, toppings: ['Pepperoni']},
    {name: 'Veggie', calories: 285, toppings: ['Mushrooms', 'Peppers', 'Olives']}
];

const calculateTotalCalories = (array: Pizza[]): number => {
    let total: number = 0;
    array.forEach((pizza: Pizza) => total += pizza.calories);
    return total;
}

// console.log(calculateTotalCalories(pizzas));

const doesPizzaHaveTopping = (pizza: Pizza, topping: string): boolean => {
    return pizza.toppings.some((t: string) => t === topping);
}

// const failValue = 'Pepperoni';
// const passValue = 'Mushrooms';

// console.log(doesPizzaHaveTopping(pizzas[1], failValue));
// console.log(doesPizzaHaveTopping(pizzas[1], passValue));

const buildPizza = (name: string, toppings: string[]): Pizza => {
    const calories = 200 + (20 * toppings.length);
    const pizza: Pizza = {
        name,
        toppings,
        calories
    };
    return pizza;
}

// const p = buildPizza('Mystery', ['Pepperoni', 'Sausage'])
// console.log(p);