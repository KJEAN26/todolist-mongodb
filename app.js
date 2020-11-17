const express = require("express");
const app = express();
const todoRoute= require("./routes/todoRoutes")
const path = require('path');
app.set('view engine',"ejs")
app.set('views',__dirname+'/views');
const bodyParser = require("body-parser")
 require ("./dbConnection")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(todoRoute)
app.use('/static',express.static(path.join(__dirname,'Public'))); 






app.listen(3000, () => {
    console.log("port is running on 3000");
});

