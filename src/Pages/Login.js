import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <p>Login</p>
            <Link to="/Signup">Go to signup</Link>
        </div>
    )
}

export default Login