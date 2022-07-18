import React, { useEffect } from 'react'
import Registercontent from "../components/registercontent/Registercontent"
import "./register.scss"


export default function Login() {
  useEffect(() => {
    document.title = "Ani-Fox"
  }, [])

  return (
    <div className="login">
        <Registercontent />
    </div>
  )
}
