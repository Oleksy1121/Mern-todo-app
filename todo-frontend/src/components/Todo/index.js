import React, { useEffect, useState } from "react"
import { TodoContainer, TodoTitle } from "./styles"
import Form from "../Form"
import TodoList from "../TodoList"
import axios from "../../axios"
import Key from "../Key"
import Author from "../Author"

function Todo() {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])

    const fetchData = async () => {
        const response = await axios.get("/todos")
        setTodos(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const addTodo = async (e) => {
        e.preventDefault()
        try {
            if (input.length === 0) return null
            await axios.post("/todos", {
                ...todos,
                text: input,
                completed: false,
            })
        } catch (err) {
            console.log(err.message)
        }
        fetchData()
        setInput("")
    }

    return (
        <TodoContainer>
            <TodoTitle>Todo List</TodoTitle>
            <Form addTodo={addTodo} setInput={setInput} input={input}></Form>
            <TodoList todos={todos} fetchData={fetchData}></TodoList>
            <Key></Key>
            <Author></Author>
        </TodoContainer>
    )
}

export default Todo
