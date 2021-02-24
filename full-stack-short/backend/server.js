const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send({data: 'hello'});
})

app.listen(port, () => console.log(`listening on port ${port}`));