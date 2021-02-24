const express = require('express');
const todos = require('./routes/todos');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/todos', todos);

app.listen(port, () => console.log(`listening on port ${port}`));