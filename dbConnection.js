const mongoose = require("mongoose")
const dbUrl = "mongodb://localhost/sample"

mongoose.connect(dbUrl, { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once("open", () => {
    console.log("connected to mongodb")
}).on("error", (error) => {
    console.log(error)
})

