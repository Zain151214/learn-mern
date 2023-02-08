const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.get("/api/goals", (req, res) => {
    res.status(200).json({ message: "Hello Backend" })
});

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});