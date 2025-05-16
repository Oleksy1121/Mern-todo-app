import styled from "styled-components";

export const KeyContainer = styled.div`
    width: 100% ;
    max-width: 500px;
    display: flex;
    justify-content: space-around;
`

export const BulletPoint = styled.li`
    margin: 10px;
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.$isComplete ? 'red' : 'none'};
    text-decoration: ${props => props.$isComplete ? 'line-through' : 'none'};
    
`