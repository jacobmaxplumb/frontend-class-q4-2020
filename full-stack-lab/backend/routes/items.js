const express = require('express');
const items = express.Router();

const cartItems = [
    {id: 1, product: 'bananas', price: 20.40, quantity: 10},
    {id: 2, product: 'tv', price: 200.99, quantity: 5},
    {id: 3, product: 'apple', price: 1.99, quantity: 20}
]

items.get('/', (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : null;
    const prefix = req.query.prefix ? req.query.prefix : null;
    const maxPrice = req.query.maxPrice ? parseInt(req.query.maxPrice) : null;
    let myItems = cartItems;
    if (maxPrice) myItems = myItems.filter(i => i.price <= maxPrice);
    if (prefix) myItems = myItems.filter(i => i.product.toUpperCase().startsWith(prefix.toUpperCase()));
    if (pageSize) myItems = myItems.slice(0, pageSize);
    res.send(myItems);
});

items.get('/:id', (req, res) => {
    const itemIndex = cartItems.findIndex(i => i.id === parseInt(req.params.id));
    res.send(cartItems[itemIndex]);
})

items.post('/', (req, res) => {
    const newId = cartItems[cartItems.length - 1].id + 1;
    const newItem = {
        id: newId,
        product: req.body.product,
        quantity: req.body.quantity,
        price: req.body.price
    }
    cartItems.push(newItem);
    res.send(cartItems);
});

items.put('/:id', (req, res) => {
    const itemId = cartItems.findIndex(i => i.id === parseInt(req.params.id));
    cartItems[itemId].product = req.body.product;
    cartItems[itemId].price = req.body.price;
    cartItems[itemId].quantity = req.body.quantity;
    res.send(cartItems[itemId]);
});

items.delete('/:id', (req, res) => {
    const itemId = cartItems.findIndex(i => i.id === parseInt(req.params.id));
    cartItems.splice(itemId, 1);
    res.send(cartItems);
})

module.exports = items;