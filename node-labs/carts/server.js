const express = require('express');
const sql = require('./connection');
const app = express();
app.use(express.json());

app.get('/cart-items', (req, res) => {
    const pageSize = req.query.pageSize;
    const prefix = req.query.prefix;
    const maxPrice = parseFloat(req.query.maxPrice);
    if (prefix && maxPrice) {
        sql.query(`select * from shopping_cart where Price < ${maxPrice} AND Product Like '${prefix}%'`).then(results => {
            if (pageSize) {
                res.send(results.rows.slice(0, pageSize));
            } else {
                res.send(results.rows);
            }
        })
    } else if (prefix) {
        sql.query(`select * from shopping_cart where Product Like '${prefix}%'`).then(results => {
            if (pageSize) {
                res.send(results.rows.slice(0, pageSize));
            } else {
                res.send(results.rows);
            }
        })
    } else if (maxPrice) {
        sql.query(`select * from shopping_cart where Price < ${maxPrice}`).then(results => {
            if (pageSize) {
                res.send(results.rows.slice(0, pageSize));
            } else {
                res.send(results.rows);
            }
        })
    } else {
        sql.query(`select * from shopping_cart`).then(results => {
            if (pageSize) {
                res.send(results.rows.slice(0, pageSize));
            } else {
                res.send(results.rows);
            }
        })
    }
    
})

app.get('/cart-items/:id', (req, res) => {
    sql.query(`select * from shopping_cart where Id = ${parseInt(req.params.id)}`).then(results => {
        if(results.rows.length > 0) {
            res.send(results.rows[0]);
        } else {
            res.sendStatus(404);
        }
        
    })
})

app.post('/cart-items', (req, res) => {
    const price = parseFloat(req.body.price);
    const quantity = parseInt(req.body.quantity);
    const product = req.body.product;
    sql.query(`insert into shopping_cart (Product, Price, Quantity) Values ('${product}', ${price}, ${quantity})`).then(result => {
        console.log(result);
        if (result.rowCount === 1) {
            res.sendStatus(201);
        } else {
            res.sendStatus(500);
        } 
    })
});

app.put('/cart-items/:id', (req, res) => {
    const price = parseFloat(req.body.price);
    const quantity = parseInt(req.body.quantity);
    const product = req.body.product;
    const id = parseInt(req.params.id)
    sql.query(`update shopping_cart set Product = '${product}', Price = ${price}, Quantity = ${quantity} where Id = ${id}`).then(result => {
        console.log(result);
        sql.query(`select * from shopping_cart where id = ${id}`).then(results => res.send(results.rows[0]));
    })
})
app.delete('/cart-items/:id', (req, res) => {
    const id = parseInt(req.params.id)
    sql.query(`delete from shopping_cart where id = ${id}`).then(() => {
        res.sendStatus(204);
    })
})

app.listen(3000, () => console.log('Listening on port 3000'));