import styled from "styled-components";

export const FormContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width:500px) {
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }
`

export const Button = styled.button`
    width: 70px;
    height: 40px;
    margin-left: 30px;
    font-size: 1.2rem;
    font-weight: 600;
    background:rgb(101, 16, 170);
    border: 1px solid black;
    border-radius: 20px;
    color: #ffff;
    cursor: pointer;
    
    @media (max-width:500px) {
        margin-left: 0px;
        width: 100%;
    }
`


export const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border: 2px solid rgb(101, 16, 170);
    border-radius: 20px;
    padding-left: 20px;

    &:hover{
        border: 3px solid rgb(101, 16, 170)
    }
`