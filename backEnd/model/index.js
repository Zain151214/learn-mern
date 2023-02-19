const mongoose = require("mongoose");

const { Goal } = require("./goal");

const connect_database = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(`${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`).then(() => {
        console.log("Database Connected Successfully");
    }).catch((err) => {
        console.log("error >>> ", err)
    })
}

module.exports = {
    connect_database,
    Goal
}