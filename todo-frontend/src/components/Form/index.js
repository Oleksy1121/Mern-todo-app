import React, { useState } from 'react'
import { FormContainer, Input, Button } from './styles'

function Form() { 
    const [input, setInput] = useState('')
    const getInput = (e) => {
        setInput(e.target.value)
    }

    console.log(input, 'input')

  return (
    <FormContainer>
        <Input placeholder='Add new todo' onChange={getInput}></Input>
        <Button>Add</Button>
    </FormContainer>
  )
}

export default Form
