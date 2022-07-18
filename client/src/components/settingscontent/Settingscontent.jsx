import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./settingscontent.scss"

export default function Settingscontent() {

    const navigate = useNavigate()
    const [name] = useState(localStorage.getItem('user_name'))
    const [email] = useState(localStorage.getItem('user_email'))
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    async function changePass(event) {
        
        if(password !== repassword)
        {
            alert('Passwords dont match')
            return
        }

        event.preventDefault()
        
        const response = await fetch('https://anifox-cinera.herokuapp.com/api/change_password', {
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
            localStorage.removeItem('token')
            localStorage.removeItem('admin_token')
            localStorage.removeItem('user_name')
            navigate('/login')
        }
    }

  return (
    <div className='settings-content'>

        <div className="container">

            <div className="right">
                <form onSubmit={changePass}>
                    <img src="https://i.imgur.com/C9YJkX6.png" alt="" />
                    <br />
                    <input
                        disabled
                        value={name}
                        type="text"
                    />

                    {/* <input type="Date" placeholder="DOB" /> */}
                    <input
                        disabled
                        value={email}
                        type="email"
                    />
                    <input

                        // onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="New-Password"
                    />
                    <input
                        // onChange={(e) => setRepassword(e.target.value)}
                        type="password"
                        onChange={(e) => setRepassword(e.target.value)}
                        placeholder="Re-enter Password"
                    />
                    <div className='btns'>
                        <button className='changePass-btn' type='submit' >Change Password</button>
                        {/* <button className='deleteAcc-btn'>Delete Account</button> */}
                    </div>
                    
                </form>
            </div>

        </div>

</div>
  )
}
