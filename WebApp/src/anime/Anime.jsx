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
  const [mylist, setMylist] = useState([])

  async function fetchList(list) 
  {
      try {
          const response = await fetch(`http://localhost:1337/api/${list}`, {
              method: 'GET'
          });
          const mylist = await response.json();
          return mylist;
      } 
      catch (error) {console.error(error);}
  }
  
	useEffect(() => {
    document.title = "Ani-Fox"
    window.scrollTo(0, 0) 
    async function getLists() 
    {   
      const tempList = await fetchList("action");
      setMylist(tempList);
    }

    getLists()
    
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
