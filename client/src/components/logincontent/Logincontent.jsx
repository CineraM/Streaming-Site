import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./logincontent.scss"

export default function Logincontent() {
    const token = localStorage.getItem('token')
    const admin_token = localStorage.getItem('admin_token')

    localStorage.setItem('LS_ID', '19')         // default anime page id

    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    let navigate = useNavigate()

    async function loginUser(event) {
        
		event.preventDefault()

		const response = await fetch('https://anifox-cinera.herokuapp.com/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()
        if(data.admin_user)
        {
            localStorage.setItem('admin_token', data.admin_user)
            localStorage.setItem('user_name', 'Admin')
            navigate('/admin_dashboard')
        }
        else
        {
            if (data.user) {
                localStorage.setItem('token', data.user)
                localStorage.setItem('user_name', data.name)
                localStorage.setItem('user_email', data.email)
                navigate('/home')
            } else {
                alert('Error: please try again')
            }
        }

	}    

    useEffect(() => {
        if(admin_token)
        {
            navigate('/admin_dashboard')
        }
        if (token) {
            navigate('/home')
        }
        // eslint-disable-next-line
    },[])

  return (
    <div className='login-content'>

        <div className="container">
            <div className="left">
                <form onSubmit={loginUser}>
                    <img src="https://i.imgur.com/C9YJkX6.png" alt="" />
                    <br />
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

                    {/* <a href="https://cdn.discordapp.com/attachments/222875289271664644/980645220288954398/277968806_1162241284539661_4886726701017993053_n.mp4">
                        Forgot your password?</a> */}
                    <button className='signIn-btn' type='submit'>Sign In</button>
                </form>
            </div>

            <div className="right">
                <h1>Hello, Friend!</h1>
                <p>Give us your info so we can sell it! </p>
                <button className="signUp-btn" onClick={() => navigate("/register")}> Sign Up</button>
            </div>
        </div>


    </div>
  )
}