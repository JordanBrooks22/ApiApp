const connectDB = require('./startup/db');
const express = require('express');
const app = express();


const products = require('./routes/products');

connectDB();

app.use(express.json());
app.use('/api/products', products);
app.get("/api/products", (req, res) => {
    let products = repoContext.products.findAllProducts();
    res.send(products);
   });
   

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server started on port: ${port}');
});


