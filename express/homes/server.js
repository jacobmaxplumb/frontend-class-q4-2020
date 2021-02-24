const express = require('express');
const app = express();
const buy = require('./routes/buy');
const rent = require('./routes/rent');

app.use('/buy', buy);
app.use('/rent', rent);

app.listen(3000, () => console.log('listening on port 3000'));