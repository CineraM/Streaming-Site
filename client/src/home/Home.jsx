import Navbar from "../components/navbar/Navbar"
import Featured from "../components/featured/Featured"
import "./home.scss"
import List from "../components/list/List"
import Footer from "../components/footer/Footer"
import React, { useState, useEffect } from "react";
import jwt from 'jwt-decode'
import { useNavigate } from "react-router-dom"

const Home = () => {

  let navigate = useNavigate();
  const token = localStorage.getItem('token')
  const admin_token = localStorage.getItem('admin_token')
  const [loading, setLoading] = useState(true)
  const [action, setAction] = useState([])
  const [drama, setDrama] = useState([])
  const [adventure, setAdventure] = useState([])
  const [comedy, setComedy] = useState([])
  const [sports, setSports] = useState([])
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    document.title = "Ani-Fox"
    // admin validation
    if (admin_token) {
      // if admin user, remove user token
      localStorage.removeItem('token')
      navigate('/admin_dashboard')
    }

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
      // console.log('asdasd')
      localStorage.removeItem('token')
      navigate('/login')
    }

    // Query and store genres
      async function getLists() 
      {
        async function fetchList(list) 
        {
          // setGenre(list)
          const genre = list
            try {
                const response = await fetch(`https://anifox-cinera.herokuapp.com/api/animeGenres`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    genre,
                  }),
                });
                setLoading(false)
                const mylist = await response.json();
                return mylist;
            } 
            catch (error) {console.error(error);}
        }
        
          const actionList = await fetchList("Action");
          setAction(actionList);

          const sportsList = await fetchList("Sports");
          setSports(sportsList)

          const dramaList = await fetchList("Drama");
          setDrama(dramaList);

          const comedyList = await fetchList("Comedy");
          setComedy(comedyList);

          const adventureList = await fetchList("Adventure");
          setAdventure(adventureList);

          const moviesList = await fetchList("Avant Garde");
          setMovies(moviesList);

          return actionList; 
      }

      getLists()
      // eslint-disable-next-line
  }, [])

  // Fetching, display loading animation
  if(loading)
  {
      return (
          <div className="anime">        
            <div className="loader"></div>
          </div> 
  )
  }
  else
  {
      return (
    <div className='home'>

      <Navbar/>
      <Featured/>
      <br/>
      <List title="Action" data={action} isInAnime={false}/>
      <List title="Drama" data={drama} isInAnime={false}/>
      <List title="Adventure" data={adventure} isInAnime={false}/>
      <List title="Comedy" data={comedy} isInAnime={false}/>
      <List title="Sports" data={sports} isInAnime={false}/>
      <List title="Movies" data={movies} isInAnime={false}/>
      <br/>
      
      <Footer/>
      
    </div>
  )
  }
}

export default Home

