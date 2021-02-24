const express = require('express');
const students = express.Router();

students.get('/', (req, res) => {
    res.send('you hit the get endpoint');
});

students.put('/', (req, res) => {
    res.send('you hit the put endpoint');
});

students.post('/', (req, res) => {
    res.send('you hit the post endpoint');
});

students.delete('/', (req, res) => {
    res.send('you hit the delete endpoint');
});

module.exports = students;