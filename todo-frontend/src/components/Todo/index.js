import React from 'react'
import { TodoContainer, TodoTitle } from './styles'
import Form from '../Form'

function Todo() {
  return (
    <TodoContainer>
        <TodoTitle>Todo List</TodoTitle>
        <Form></Form>
    </TodoContainer>
  )
}

export default Todo
