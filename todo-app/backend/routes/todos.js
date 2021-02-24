const express = require('express');
const todos = express.Router();
const pool = require('../connection');

todos.get('/', (req, res) => {
    if (req.query.description) {
        const description = req.query.description;
        pool.query(`select * from Todos where Description like '%${description}%'`).then(result => {
            res.send(result.rows);
        })
    } else {
        pool.query('select * from Todos').then((result) => {
            res.send(result.rows);
        })
    }
    
});

todos.post('/', (req, res) => {
    const isDone = req.body.isdone ? 1 : 0;
    const description = req.body.description;
    pool.query(`insert into Todos (description, isdone) values ('${description}', ${isDone})`).then(result => {
        res.sendStatus(201);
    });
});

todos.put('/:id', (req, res) => {
    const isDone = req.body.isdone;
    const description = req.body.description;
    const id = req.params.id;
    if (isDone !== undefined && description !== undefined) {
        pool.query(`update Todos set isdone = ${isDone}, description = '${description}' where id = ${id}`).then(result => {
            res.send({data: 'todo updated'});
        })
    }
     else if (isDone !== undefined) {
        pool.query(`update Todos set isdone = ${isDone} where id = ${id}`).then(result => {
            res.send({data: 'isdone updated'});
        })
    }
    else if (description !== undefined) {
        pool.query(`update Todos set description = '${description}' where id = ${id}`).then(result => {
            res.send({data: 'description updated'});
        })
    } else {
        res.send({data: 'data'})
    }
});

todos.delete('/:id', (req, res) => {
    const id = req.params.id;
    pool.query(`delete from Todos where id = ${id}`).then(result => {
        res.sendStatus(204);
    })
})

module.exports = todos;