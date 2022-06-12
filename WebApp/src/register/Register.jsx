import React from 'react'
import Helmet from 'react-helmet'
import Registercontent from "../components/registercontent/Registercontent"
import "./register.scss"


export default function Login() {
  return (
    <div class="login">
      <Helmet>
        <title>{ "Ani-Fox" }</title>
      </Helmet>
        <Registercontent />
    </div>
  )
}
