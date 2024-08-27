const express = require('express');
require('./db/config');
const cors = require('cors')
const User = require('./db/User');
const Product = require('./db/Product');

const jwt = require('jsonwebtoken')
const jwtKey = 'arun'
const app = express();

app.use(express.json())
app.use(cors())

app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    jwt.sign({ result }, jwtKey, { expiresIn: '1d' }, (err, token) => {
        if (err) {
            res.send({ result: 'something went wrong' })
        }
        res.send({ result, auth: token })
    })
})

app.post('/login', async (req, res) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select('-password');
        if (user) {
            jwt.sign({ user }, jwtKey, { expiresIn: '1d' }, (err, token) => {
                if (err) {
                    res.send({ result: 'something went wrong' })
                }
                res.send({ user, auth: token })
            })
        } else {
            res.send("No user found")
        }
    } else {
        res.send("Please enter valid email and password")
    }
})

app.post('/add-product', async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save()
    res.send(result)
})


app.get("/products", async (req, res) => {
    let products = await Product.find();
    if (products.length > 0) {
        res.send(products)
    } else {
        res.send('No products found')
    }
})

app.delete('/delete-product/:id', async (req, res) => {
    console.log()
    let deleted = await Product.deleteOne({ _id: req.params.id })
    res.send(deleted)
})

app.get('/product/:id', async (req, res) => {
    let product = await Product.findById({ _id: req.params.id });
    res.send(product)
})

app.put('/product/:id', async (req, res) => {
    let product = await Product.updateOne({ _id: req.params.id }, { $set: req.body })
    res.send(product)
})

app.get('/search/:key', async (req, res) => {
    let search = await Product.find({
        "$or": [
            {
                name: { $regex: req.params.key }
            },
            {
                company: { $regex: req.params.key }
            },
            {
                category: { $regex: req.params.key }
            }
        ]
    })
    res.send(search)
})


app.listen(5000)
