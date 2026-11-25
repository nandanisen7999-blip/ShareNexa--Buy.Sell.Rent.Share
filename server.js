const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

// Homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Products API
app.get("/api/products", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Laptop",
            price: 25000,
            category: "Electronics"
        },
        {
            id: 2,
            name: "Bicycle",
            price: 5000,
            category: "Sports"
        },
        {
            id: 3,
            name: "Camera",
            price: 15000,
            category: "Electronics"
        }
    ]);
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`ShareNexa server running on http://localhost:${PORT}`);
});
