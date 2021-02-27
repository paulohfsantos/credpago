import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Background, Marca, InputGroup, Container, Label } from '../Components/Style'
import Logo from '../logo.svg'

const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [disabled, setDisabled] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setDisabled(true)
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
                            <div className="input-group">
                                <Label>Email<span>*</span>:</Label>
                                <input type="email" value={email} disabled={disabled} placeholder="seu@email.com" onChange={(e)=>setEmail(e.target.value)} />
                                
                                <Label>Senha<span>*</span>:</Label>
                                <input type="password" value={pass} disabled={disabled} placeholder="*******" onChange={(e)=>setPass(e.target.value)} />
                                
                                <button type="submit">Enviar</button>
                                <div className="flex-links">
                                    <Link to="/">Esqueci minha senha</Link>
                                    <Link to="/Signup">Cadastrar</Link>
                                </div>
                            </div>
                        </form>
                    </InputGroup>
                </Container>
            </Background>
        </>
    )
}

export default Login