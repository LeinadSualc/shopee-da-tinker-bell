import styled from 'styled-components'

export const CardContainer = styled.div`
    max-width: 18rem;
    margin: 10px;
    border: 1px solid #D2D2D2;
    text-align: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Button = styled.button`
    border: 0;
    padding: 15px;
    border-radius: 8px;
    background-color: var(--blue);
    :hover {
        filter: brightness(0.7);
    }
    margin-top: 10px;
`

