import styled from "styled-components";


export const ListContainer = styled.ul`
    box-sizing: border-box;
    width: 100%;
    margin-top: 20px;
    padding: 10px;;
`


export const Row = styled.li`
    display: flex;
    justify-content: space-between;
    margin-top:10px;
    color: ${props => props.$isCompleted ? 'red' : 'null'};
    text-decoration: ${props => props.$isCompleted ? 'line-through' : 'null'};
    
`

export const Text = styled.span`
    font-size: 1.2rem;
    width: 100%;
    text-align: left;
    padding-left: 5px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background: rgb(222,222,222);
    }
`

export const DeleteIcon = styled.span`
    font-size: 1.2rem;  
    height: 30px;
    width: 30px;
    border-radius: 50%;
    cursor: pointer;
    &:hover{
        background: rgb(222,222,222);
    }
`