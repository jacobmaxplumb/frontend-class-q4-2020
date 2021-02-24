const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send({data: 'hello'});
})


app.listen(3001, () => console.log('listening on port 3001'));