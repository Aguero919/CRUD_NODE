const mongoose = require("mongoose");

const connectDB = (URI) => {
    return mongoose
                  .connect(URI)
                  .then(res => "connected to DB...")
                  .then(err => console.log(err));
};

module.exports = connectDB;