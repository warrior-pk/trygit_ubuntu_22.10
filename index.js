const express = require("express");

const app = express();
app.get('/', (req,res) => {

    return res.send('HELLO WORLD')
})
app.listen(3000,() => {console.log('Server started at PORT:3000')})

