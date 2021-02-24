const express = require('express');
const app = express();
const port = 3000;

const people = [
    {id: 1, name: 'jacob'},
    {id: 2, name: 'james'}
]

app.get('/people', (req, res) => {
    res.json(people);
})

app.listen(port, () => console.log(`listening on port: ${port}`));