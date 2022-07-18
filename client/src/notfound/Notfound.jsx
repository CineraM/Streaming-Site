import React from 'react'
import { useNavigate } from 'react-router-dom';
import './notfound.scss'

export default function Notfound() {
    let navigate = useNavigate();


  return (
    <div className='nfound'>

        <div className='logo'>
            <img src="https://i.imgur.com/C9YJkX6.png" alt="" onClick={() => {navigate("/home")}} > 
            </img>
        </div>
        
        <div className='text'>
            <div> Error 404: Page Not Found</div>
        </div>
        
        <div className='buttons'>
        <button
            onClick={() => {
            navigate("/home")
            }} >
            <span>Take me back!</span>
        </button>
        </div>

    </div>
  )
}
