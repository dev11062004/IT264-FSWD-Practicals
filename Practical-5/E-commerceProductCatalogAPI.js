const express = require('express');

const port = 3000;
const app = express();

let products = [
    { id: 1, name: "Phone", category: "electronics" },
    { id: 2, name: "Headset", category: "electronics" }, 
    { id: 3, name: "Medicine", category: "healthcare" },
    { id: 4, name: "Laptop", category: "electronics" },
    { id: 5, name: "First Aid Kit", category: "healthcare" }
];

app.get('/', (req, res) => {
    res.send("Welcome to the E-commerce Platform API");
});


app.get('/products', (req, res) => {
    const { category } = req.query;
    let filteredProducts = category ? products.filter(p => p.category === category) : products;

    if (filteredProducts.length === 0) {
        return res.status(404).json({ message: "No products found in this category." });
    }

    res.json(filteredProducts);
});

// GET /products/:id → Fetch a specific product by ID
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/ \nfor products : http://127.0.0.1:${port}/products`);
});
