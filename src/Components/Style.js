import styled from 'styled-components'

export const Background = styled.div`
    background-color: #0091d4;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`
export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`
export const Marca = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    img {
        width: 75%;
    }
`
export const InputGroup = styled.div`
    background-color: #e2e2e2;
    margin-top: 1rem;
    padding: 10px;
    width: 350px;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const Label = styled.label`
    display: block;
    font-size: 16px;
    color: #333;
    margin: 5px 0;
`