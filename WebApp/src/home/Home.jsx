import Navbar from "../components/navbar/Navbar"
import Featured from "../components/featured/Featured"
import "./home.scss"
import List from "../components/list/List"
import Footer from "../components/footer/Footer"
import { Helmet } from 'react-helmet'
import React, { useState, useEffect } from "react";
import jwt from 'jwt-decode'
import { useNavigate } from "react-router-dom"

const Home = () => {

  const [action, setAction] = useState([])
  const [drama, setDrama] = useState([])
  const [adventure, setAdventure] = useState([])
  const [comedy, setComedy] = useState([])
  const [sports, setSports] = useState([])
  const [movies, setMovies] = useState([])

  const token = localStorage.getItem('token')
  let navigate = useNavigate();
  
  useEffect(() => {
    // user validation
    if (token) {
    
      const user = jwt(token)
      if (!user) {
        console.log('jkhg')
        localStorage.removeItem('token')
        navigate('/login')
      }
    }
    else
    {
      console.log('asdasd')
      localStorage.removeItem('token')
      navigate('/login')
    }

    // Query and store genres
      async function getLists() 
      {

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
        
          const actionList = await fetchList("action");
          setAction(actionList);

          const sportsList = await fetchList("sports");
          setSports(sportsList)

          const dramaList = await fetchList("drama");
          setDrama(dramaList);

          const comedyList = await fetchList("comedy");
          setComedy(comedyList);

          const adventureList = await fetchList("adventure");
          setAdventure(adventureList);

          const moviesList = await fetchList("movies");
          setMovies(moviesList);

          return actionList; 
      }

      getLists()
      // eslint-disable-next-line
  }, [])



  return (
    <div className='home'>
      <Helmet>
        <title>{ "Ani-Fox" }</title>
      </Helmet>
      <Navbar/>
      <Featured type="series"/>
      <br/>

      <List title="Action" data={action} isInAnime={false}/>
      <List title="Sports" data={sports} isInAnime={false}/>
      <List title="Drama" data={drama} isInAnime={false}/>
      <List title="Comedy" data={comedy} isInAnime={false}/>
      <List title="Adventure" data={adventure} isInAnime={false}/>
      <List title="Movies" data={movies} isInAnime={false}/>

      
      <br/>
      <Footer/>
    </div>
  )
}

export default Home