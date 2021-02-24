const express = require('express');
const app = express();
const students = require('./routes/students');

app.use('/students', students);

app.listen(3000);
