import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Background, Marca, InputGroup, Container, Label } from '../Components/Style'
import Logo from '../logo.svg'

const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setEmail('')
        setPass('')
    }

    return (
        <>
            <Background>
                <Container>
                    <Marca>
                        <img src={Logo} alt="Logo Credpago" />
                    </Marca>
                    <InputGroup>
                        <form onSubmit={handleSubmit}>
                            <div className="email">
                                <Label>Email</Label>
                                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className="pass">
                                <Label>Senha</Label>
                                <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />
                            </div>
                            <div className="send">
                                <button type="submit">Enviar</button>
                            </div>
                            <Link to="/">Esqueci minha senha</Link>
                        </form>
                    </InputGroup>
                </Container>
            </Background>
        </>
    )
}

export default Login