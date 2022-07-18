import React, { useState } from 'react'
import Anicontent from '../components/anicontent/Anicontent'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import List from "../components/list/List"
import "./anime.scss"
import Aniheader from '../components/aniheader/Aniheader'
import { useEffect } from "react"
import jwt from 'jwt-decode'
import { useNavigate } from "react-router-dom"


export default function Anime() {

  let navigate = useNavigate();
  const token = localStorage.getItem('token')
  const admin_token = localStorage.getItem('admin_token')
  const [loading, setLoading] = useState(true)
  const [mylist, setMylist] = useState([])
  const [user] = useState(localStorage.getItem('user_email'))

  // Get the series the user liked
  async function get_user_list() {    
    try {
      const response = await fetch('https://anifox-cinera.herokuapp.com/api/get_user_likes_genre', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user,
        }),
    })
    setLoading(false)
    const mylist = await response.json()
    return mylist
   } catch (error) {console.error(error);}
  }
  
	useEffect(() => {
    document.title = "Ani-Fox"
    window.scrollTo(0, 0) 
    async function getLists() 
    {   
      const tempList = await get_user_list();
      setMylist(tempList);
    }

    getLists()

    // admin validation
    if (admin_token) {
      // if admin user, remove user token
      localStorage.removeItem('token')
      navigate('/admin_dashboard')
    }
    
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

  if(loading)
  {
    return(
      <div className="anime">        
        <div className="loader"></div>
      </div> 
    )

  }
  return (
    <div className="anime">

        <Navbar/>
        <Aniheader aniId={localStorage.getItem('LS_ID')}/>
        <br />
        <Anicontent aniId={localStorage.getItem('LS_ID')}/>

        <List title="Recommended" data={mylist} isInAnime={true}/>
        
        <br />
        <Footer/>
       
    </div>
  )
}
