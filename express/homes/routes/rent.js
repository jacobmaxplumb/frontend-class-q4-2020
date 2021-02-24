const express = require('express');
const rent = express.Router();

rent.get('/', (req, res) => {
    res.send('rent get');
})

rent.post('/', (req, res) => {
    res.send('rent post');
})

rent.put('/', (req, res) => {
    res.send('rent put');
})

rent.delete('/', (req, res) => {
    res.send('rent delete');
})

module.exports = rent;