const PORT = 5000;
const express = require("express");
const app = express();

// import "env"
require('dotenv').config();

// import 'task' for use with 'base' route
const task = require("./routes/task");

// import db
const connectDB = require("./db/connect");

// for getting 'body' from 'req'
app.use(express.urlencoded( {extended: false} ));
// parse "json"
app.use(express.json());

// invoke a middleware with "base" route
app.use("/api/v1/task", task);


// connect to 'db' and invoke 'server'
const connectToDB = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server listening on PORT ${PORT}...`)
        });
    } catch (error) {
        console.log(error);
    }
};

connectToDB();

