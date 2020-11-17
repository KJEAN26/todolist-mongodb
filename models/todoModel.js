const mongoose = require('mongoose');


const todolistSchema = mongoose.Schema({
    title: { type: String, required: true },
    activity: { type: String, required: true },
    date_created: { type: Date, default: new Date() }
})



const todolistModel = mongoose.model("todolist", todolistSchema);

module.exports = todolistModel;