const express = require('express');
const students = require('./routes/students');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/students', students);

app.listen(port, () => console.log(`listening on port ${port}`));