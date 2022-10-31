const mongoose = require("mongoose");

// create a schema as a proto for "collection"
const TaskSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxlength: [20, "char length should be less than 20..."]
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports =  mongoose.model("Task", TaskSchema);;