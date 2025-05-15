const mongoose = require('mongoose')
const Todos = require('../dbTodos')


const getTodos = async (req, res) => {
    try {
        const allTodos = await Todos.find({})
        res.status(200).send(allTodos)
    } catch (err) {
        res.status(400).send(err.message)
    }
}

const createTodo = async (req, res) => {
    const newTodo = req.body
    try {
        const createTodo = await Todos.create(newTodo)
        res.status(201).send(createTodo)
    } catch (err) {
        res.status(401).send(err.message)
    }
}

const updateTodo = async (req, res) => {
    const {id} = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`Invalid task id: ${id}`)
        }
        const todoID = {_id: id}
        const todoStatus = {completed: true}
        const updateTodo = await Todos.findOneAndUpdate(todoID, todoStatus)
        if (!updateTodo) {
            return res.status(404).send(`Invalid task id: ${id}`)
        }
        res.status(200).send(updateTodo)
    } catch (err) {
        res.status(400).send(err.message)
    }
}

const deleteTodo = async (req, res) => {
    const {id} = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`Invalid task id: ${id}`)
        }
        const deleteTodo = await Todos.findOneAndDelete({_id: id})
        if (!deleteTodo) {
            return res.status(404).send(`Invalid task id: ${id}`)
        }
        res.status(200).send(deleteTodo)
    } catch (err) {
        res.status(400).send(err.message)
    }
}


module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}