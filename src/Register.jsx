import React, { useState } from 'react'

function Register(props) {
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [name, setName] = useState(" ");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)

    }

    return (
        <div className='form'>
            <h2>Register</h2>
            <form className='register-form' onSubmit={handleSubmit}>
                <label> Full Name: </label>
                <input value={name} onChange={(e) => setName(e.target.value)}htmlFor= 'name' type='name' placeholder="Full Name" id='name' name='name' />
                <label htmlFor='email'>Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="johndoe@gmail.com" id="email" name="email" />
                <label htmlFor='password'>Password: </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="*******" id="password" name="password" />
                <button>Log In</button>
            </form>
            <button className='link-button' onClick={() => props.onFormSwitch('login')}>Already have an account? Log In!</button>
        </div>
    )
}

export default Register