import React, { useEffect } from 'react'
import SettingsContent from "../components/settingscontent/Settingscontent"
import Navbar from "../components/navbar/Navbar"
import "./settings.scss"
import { useNavigate } from "react-router-dom"
import jwt from 'jwt-decode'

export default function Settings() {

    let navigate = useNavigate();
    const token = localStorage.getItem('token')

    useEffect(() => {
        document.title = "Ani-Fox"
        // user validation
        if (token) {
            const user = jwt(token)
            if (!user) {
              localStorage.removeItem('token')
              navigate('/login')
            }
          }
          else
          {
            localStorage.removeItem('token')
            navigate('/login')
          }
          
          // eslint-disable-next-line
      }, [])
    
      return (
        <div className="settings">
            <Navbar />
            <div className='content'>
                <SettingsContent />
            </div>
        </div>
      )
}
