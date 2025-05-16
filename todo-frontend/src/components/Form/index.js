import React from "react"
import { FormContainer, Input, Button } from "./styles"

function Form({ addTodo, setInput, input }) {
    return (
        <FormContainer>
            <Input
                placeholder="Add new todo"
                onChange={(e) => setInput(e.target.value)}
                value={input}
            ></Input>
            <Button type="submit" onClick={(e) => addTodo(e)}>
                Add
            </Button>
        </FormContainer>
    )
}

export default Form
