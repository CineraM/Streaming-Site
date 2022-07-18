import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./registercontent.scss"


export default function Registercontent() {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    async function registerUser(event) {
        setLoading(true)
        if(password !== repassword)
        {
            alert('Passwords dont match')
            return
        }

        event.preventDefault()
        
        const response = await fetch('https://anifox-cinera.herokuapp.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
            navigate('/login')
        }
    }


    useEffect(() => {
        if (token) {
            navigate('/home')
        }
        // eslint-disable-next-line
    },[])

    if(loading)
    {
        return (
            <div className='login-content'>
                <div className="loader"></div>
            </div>
          )
    }
    else
    {
        return (
            <div className='register-content'>
        
                <div className="container">
        
                    <div className="left">
                        <h1>Already a member?</h1>
                        <button className="signUp-btn" onClick={() => navigate("/login")}> Sign In</button>
                    </div>
        
                    <div className="right">
                        <form onSubmit={registerUser}>
                            <img src="https://i.imgur.com/C9YJkX6.png" alt="" />
                            <br />
        
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Name"
                            />
        
                            {/* <input type="Date" placeholder="DOB" /> */}
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email"
                            />
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                            />
                            <input
                                value={repassword}
                                onChange={(e) => setRepassword(e.target.value)}
                                type="password"
                                placeholder="Re-enter Password"
                            />
                            <button className='signIn-btn' type='submit' >Sign Up</button>
                        </form>
                    </div>
        
                </div>
        
            </div>
          )
    }

}

