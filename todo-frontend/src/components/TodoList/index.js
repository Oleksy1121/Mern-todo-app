import React from "react"
import { DeleteIcon, ListContainer, Row, Text } from "./styles"
import axios from "../../axios"

function TodoList({ todos, fetchData }) {
    const updateTodo = async (id) => {
        try {
            await axios.put(`/todos/${id}`)
            fetchData()
        } catch (err) {
            console.log(err.message)
        }
    }

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`/todos/${id}`)
            fetchData()
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <ListContainer>
            {todos?.map((todo) => (
                <Row key={todo._id} $isCompleted={todo.completed}>
                    <Text onClick={() => updateTodo(todo._id)}>
                        {todo.text}
                    </Text>
                    <DeleteIcon onClick={() => deleteTodo(todo._id)}>
                        X
                    </DeleteIcon>
                </Row>
            ))}
        </ListContainer>
    )
}

export default TodoList
