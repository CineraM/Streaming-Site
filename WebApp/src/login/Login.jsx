import React from 'react'
import Helmet from 'react-helmet'
import Logincontent from "../components/logincontent/Logincontent"
import "./login.scss"


export default function Login() {
  return (
    
    <div class="login">
        <Helmet>
          <title>{ "Ani-Fox" }</title>
        </Helmet>
        <Logincontent />
    </div>
  )
}
