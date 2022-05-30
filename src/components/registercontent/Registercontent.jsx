import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./registercontent.scss"


export default function Logincontent() {
    
    let navigate = useNavigate();
  return (
    <div className='register-content'>

        <div className="container">

            <div class="left">
                <h1>Already a member?</h1>
                <button class="signUp-btn" onClick={() => navigate("/login")}> Sign In</button>
            </div>

            <div class="right">
                <form >
                    <img src="https://i.imgur.com/C9YJkX6.png" alt="" />
                    <br />
                    <input type="Text" placeholder="Name" />
                    <input type="Date" placeholder="DOB" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Re-enter Password" />
                    
                    <button className='signIn-btn'>Sign Up</button>
                </form>
            </div>



        </div>


    </div>
  )
}

