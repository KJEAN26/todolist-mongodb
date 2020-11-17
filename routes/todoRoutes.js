const express = require("express");
const {getTodos,addTodo,deleteTodo,updateTodo,goToUpdate}=require('../controllers/todoController')
const router = express.Router();

router.get('/get',getTodos);

router.post('/add', addTodo);

router.post('/delete/:id', deleteTodo);

router.post('/update/:id',updateTodo);
router.get('/update/:id',goToUpdate);




module.exports=router;