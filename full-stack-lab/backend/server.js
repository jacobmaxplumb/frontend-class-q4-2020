const express = require('express');
const cors = require('cors');
const items = require('./routes/items');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/cart-items', items);

app.listen(3000, () => console.log('listening on port 3000'));