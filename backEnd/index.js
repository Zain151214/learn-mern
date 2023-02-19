const express = require("express");
const { connect_database } = require("./model");
const { goalsRouter } = require("./routes");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use("/api/goals", goalsRouter);

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
    connect_database()
});