import React, { useEffect, useState } from 'react'

export default function Test() {

const [email] = useState('admin002@anifox.com')
const [password] = useState('Pass123!')

async function registerAdmin() {
        
    
    const response = await fetch('http://localhost:1337/api/register_admin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })

    const data = await response.json()

    if (data.status === 'ok') {
        console.log("worked?")
    }
}
useEffect(() => {


    // eslint-disable-next-line
},[])

  return (
    <div>
        <button onClick={() => {
        registerAdmin()
       }} > test</button>
       </div>
    
  )
}
