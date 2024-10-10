const express = require('express');
const mongoose = require('mongoose');
const Product = require('./modules/product.model');
const productRoute =require('./routes/product.route')
const PORT = process.env.PORT || 3004;
const app = express()

//middlware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//route
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/products',productRoute);





app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});

mongoose.connect('mongodb+srv://moghazy:604@backenddp.o4uvq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backenddp')
    .then(() => {
        console.log("connected to database");
    })
    .catch(() => {
        console.log("connection failed!");
    })
