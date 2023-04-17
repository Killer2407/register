import React, { useState } from 'react'

function Login(props) {
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)

    }

    return (
        <div className='form'>
            <h2>Login</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="johndoe@gmail.com" id="email" name="email" />
                <label htmlFor='password'>Password: </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="*****" id="password" name="password" />
                <button>Log In</button>
            </form>
            <button className='link-button' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register!</button>
        </div>
    )
}

export default Login