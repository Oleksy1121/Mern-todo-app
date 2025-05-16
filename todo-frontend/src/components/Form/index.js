import React, { useEffect, useState } from 'react'
import { FormContainer, Input, Button } from './styles'
import axios from '../../axios'

function Form() { 
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])

    const getInput = (e) => {
        setInput(e.target.value)
    }

    const fetchData = async () => {
        const response = await axios.get('/todos')
        setTodos(response.data)
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    const addTodo = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/todos', {
                ...todos,
                text: input,
                completed: false
            })
        } catch (err) {
            console.log(err.message)
        }

        fetchData()
        setInput('')
    }

    // console.log(todos, 'todos')

  return (
    <FormContainer>
        <Input placeholder='Add new todo' onChange={getInput}></Input>
        <Button onClick={addTodo}>Add</Button>
    </FormContainer>
  )
}

export default Form
