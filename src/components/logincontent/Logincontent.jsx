import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./logincontent.scss"


export default function Logincontent() {
    
    let navigate = useNavigate();

  return (
    <div className='login-content'>

        <div className="container">
            <div class="left">
                <form >
                    <img src="https://i.imgur.com/C9YJkX6.png" alt="" />
                    <br />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="https://cdn.discordapp.com/attachments/222875289271664644/980645220288954398/277968806_1162241284539661_4886726701017993053_n.mp4">Forgot your password?</a>
                    <button className='signIn-btn'>Sign In</button>
                </form>
            </div>

            <div class="right">
                <h1>Hello, Friend!</h1>
                <p>Give us your info so we can sell it! </p>
                <button class="signUp-btn" onClick={() => navigate("/register")}> Sign Up</button>
            </div>
        </div>


    </div>
  )
}

