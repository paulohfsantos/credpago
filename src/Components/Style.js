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
        width: 50%;
    }
`
export const InputGroup = styled.div`
    background-color: #fff;
    margin-top: 1rem;
    padding: 30px;
    width: 350px;
    border-radius: 5px;
    
    form {
        display: block;

        .input-group {
            display: flex;
            flex-direction: column;

            .flex-links {
                display: flex;
                justify-content: space-between;
            }
        }
        
        input {
            border: 1px solid #ccc;
            border-radius: 3px;
            padding: 8px 10px;
            margin: 0 0 20px 0;
            outline: 0;

            ::placeholder {
                font-size: 16px;
            }

            :disabled {
                background-color: #f1f1f1;
            }
        }

        button {
            padding: 15px 15px;
            color: #fff;
            background-color: #0dc2ee;
            font-weight: 600;
            border: 0;
            cursor: pointer;
            outline: 0;
            border-radius: 3px;

            :hover {
                background-color: #0d9cbf;
            }
        }

        a {
            margin-top: 1.5rem;
            text-decoration: underline;
            color: #5c5c5c;
        }
    }
`
export const Label = styled.label`
    display: block;
    font-size: 16px;
    color: #333;
    margin: 5px 0;

    span {
        color: #f25b5b;
    }
`