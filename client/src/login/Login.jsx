import React, { useEffect } from 'react'
import Logincontent from "../components/logincontent/Logincontent"
import "./login.scss"


export default function Login() {
  useEffect(() => {
    document.title = "Ani-Fox"
  }, [])
  
  return (
    <div className="login">
        <Logincontent/>
    </div>
  )
}
