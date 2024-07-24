const express = require('express');
require('./db/config');
const cors = require('cors')
const User = require('./db/User');
const Product = require('./db/Product');

const app = express();

app.use(express.json())
app.use(cors())

app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

app.post('/login', async (req, res) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select('-password');
        if (user) {
            res.send(user)
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
app.listen(5000)
