const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('express app is working...')
})

app.listen(5000)
