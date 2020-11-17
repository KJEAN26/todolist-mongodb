const todo = require("../models/todoModel");
const requestParser = require('../utils/bodyParser');
const path = require('path');
const basePath = path.dirname(__dirname)

async function getTodos(req, res) {
    try {
        const data = await todo.find()
        if (!data) return res.status(400).json({ message: "empty " })
        // res.json({ data: data })
        // res.sendFile(path.join(basePath, "views/index.html"));
        console.log(data);
        res.render('index', { title: "Todos", data: data, isUpdate: false });
    } catch (error) {
        res.status(400).json({ error: true, message: error })
    }

}


async function addTodo(req, res) {
    try {
        const newtodolist = new todo({
            title: req.body.title,
            activity: req.body.activity,
        })
        const list = await newtodolist.save()
        if (!list) return res.status(400).json({ message: "Failed to Add" })
        res.redirect('/get');
    } catch (error) {
        res.status(400).json(error)
    }
}


async function deleteTodo(req, res) {
    const id = req.params.id;
    try {
        const deletetodolist = await todo.findByIdAndDelete(id)
        if (!deletetodolist) return res.status(400).json({ message: "Not Found" })
        res.redirect('/get');
    } catch (error) {
        res.status(400).json(error)
    }
}

// async function updateTodo(req,res){
//     const id=req.params.id
//     // const updatetodolist= requestParser(req.body)
//     try {
//         const updatedtodolist = await todo.findByIdAndUpdate(id)
//         if(!updatedtodolist)return res.status(400).json({message:"Not Found"})
//         res.redirect('/get')



//     } catch (error) {
//         res.status(400).json(error)
//     }
// }

async function updateTodo(req, res) {
    const id = req.params.id;
    console.log(req.body);
    try {
        const result = await todo.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );

        if (!result) {
            return res.status(400).json({
                error: "Error in updating a book"
            })
        }
        return res.status(200).redirect('/get')
           

        


    } catch (e) {
        return res.status(400).json({
            error: e
        })
    }
}
async function goToUpdate(req, res) {
    let id = req.params.id
    try {
        let _todo = await todo.findById({_id:id},(err,data)=>{
           res.render('update', { title: "update todo", todoItem : data });  
        })
       
    } catch (e) {
        return response.status(400).json({
            error: e
        })
    }
}

module.exports = { getTodos, addTodo, deleteTodo, updateTodo, goToUpdate }