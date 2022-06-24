import React from 'react'
import "./settingscontent.scss"

export default function Settingscontent() {
  return (
    <div className='settings-content'>

        <div className="container">

            <div className="right">
                <form >
                    <img src="https://i.imgur.com/C9YJkX6.png" alt="" />
                    <br />
                    <input
                        disabled
                        value='Matias'
                        type="text"
                    />

                    {/* <input type="Date" placeholder="DOB" /> */}
                    <input
                        disabled
                        value="matias@gmail.com"
                        type="email"
                    />
                    <input

                        // onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="New-Password"
                    />
                    <input
                        // onChange={(e) => setRepassword(e.target.value)}
                        type="password"
                        placeholder="Re-enter Password"
                    />
                    <div className='btns'>
                        <button className='changePass-btn' type='submit' >Change Password</button>
                        <button className='deleteAcc-btn'>Delete Account</button>
                    </div>
                    
                </form>
            </div>

        </div>

</div>
  )
}
