const express = require('express');
const students = express.Router();

const studentsArray = [
    {id: 1, firstName: 'Jacob', lastName: 'Plumb'},
    {id: 2, firstName: 'James', lastName: 'Plumb'},
    {id: 3, firstName: 'Jon', lastName: 'Plumb'},
];

students.get('/', (req, res) => {
    if (req.query.lastName && req.query.firstName) {
        const selectedStudents = studentsArray
            .filter(s => s.firstName.toUpperCase().startsWith(req.query.firstName.toUpperCase()) && s.lastName.toUpperCase().startsWith(req.query.lastName.toUpperCase()));
    } else if (req.query.lastName) {

    } else if (req.query.firstName) {

    } else {
        res.status(200).send(studentsArray);
    }
});

students.get('/:id', (req, res) => {
    const student = studentsArray.find(s => s.id === parseInt(req.params.id));
    res.status(200).send(student);
});

students.post('/', (req, res) => {
    const id = studentsArray[studentsArray.length - 1].id + 1;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const newStudent = {id, firstName, lastName};
    studentsArray.push(newStudent);
    res.status(201).send(newStudent);
});

students.put('/:id', (req, res) => {
    const indexOfStudent = studentsArray.findIndex(s => s.id === parseInt(req.params.id));
    studentsArray[indexOfStudent].firstName = req.body.firstName;
    studentsArray[indexOfStudent].lastName = req.body.lastName;
    res.status(200).send(studentsArray[indexOfStudent]);
});

students.delete('/:id', (req, res) => {
    const indexOfStudent = studentsArray.findIndex(s => s.id === parseInt(req.params.id));
    studentsArray.splice(indexOfStudent, 1);
    res.sendStatus(204);
})

module.exports = students;