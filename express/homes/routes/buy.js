const express = require('express');
const buy = express.Router();

buy.get('/', (req, res) => {
    res.send('buy get');
})

buy.post('/', (req, res) => {
    res.send('buy post');
})

buy.put('/', (req, res) => {
    res.send('buy put');
})

buy.delete('/', (req, res) => {
    res.send('buy delete');
})

module.exports = buy;