import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Background, Marca, InputGroup, Container, Label } from '../Components/Style'
import Logo from '../logo.svg'

const Signup = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [disabled, setDisabled] = useState(false)

    const handleCadastro = (e) => {
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
                        <form onSubmit={handleCadastro}>
                            <div className="input-group">
                                <Label>Nome<span>*</span>:</Label>
                                <input type="text" value={nome} disabled={disabled} placeholder="Seu Nome" onChange={(e)=>setNome(e.target.value)} />

                                <Label>Email<span>*</span>:</Label>
                                <input type="email" value={email} disabled={disabled} placeholder="seu@email.com" onChange={(e)=>setEmail(e.target.value)} />
                                
                                <Label>Senha<span>*</span>:</Label>
                                <input type="password" value={pass} disabled={disabled} placeholder="*******" onChange={(e)=>setPass(e.target.value)} />
                                
                                <button type="submit">Enviar</button>
                                <div className="flex-links">
                                    <Link to="/">Já possuo uma conta</Link>
                                </div>
                            </div>
                        </form>
                    </InputGroup>
                </Container>
            </Background>
        </>
    )
}

export default Signup