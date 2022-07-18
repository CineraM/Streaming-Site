import React, { useEffect, useState } from 'react'
import "./admindash.scss"
import List from "../components/adminlist/Adminlist"
import Navbar from "../components/navbar/Navbar"
import { useNavigate } from 'react-router-dom';

export default function Admindash() {

    let navigate = useNavigate();
    const token = localStorage.getItem('token')
    const [loading, setLoading] = useState(true)
    const [action, setAction] = useState([])
    const [drama, setDrama] = useState([])
    const [adventure, setAdventure] = useState([])
    const [comedy, setComedy] = useState([])
    const [sports, setSports] = useState([])
    const [movies, setMovies] = useState([])
    const [featured, setFeatured] = useState([])

    // Get All featured, Json list from DB
    async function getFeatured() 
    {
      async function fetchFeatured() 
      {
          try {
              const response = await fetch(`https://anifox-cinera.herokuapp.com/api/featured`, {
                method: 'GET',
                
              });
              const mylist = await response.json();
              return mylist;
          } 
          catch (error) {console.error(error);}
      }
  
        const featuredList = await fetchFeatured("Comedy");
        setFeatured(featuredList);
    }
    
    useEffect(() => {
        // Token --> User is logged in, return to home
        if (token) {
            navigate('/home')
          }
        document.title = "Admin-Fox"

        // Query and store genres
        async function getLists() 
        {
            // Function that fetches all anime genres.
            async function fetchList(list) 
            {
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
            
            setLoading(false)
            return actionList; 
        }
    
        getLists()
        getFeatured()
        // eslint-disable-next-line
    }, [])


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
            <div className='admin'>
                <Navbar/>
                <br></br>
                <br></br>
                <h1 className='outert'>Change Featured</h1>
                <div className='change-featured'>

                    <div className='wrapper'>
                        <div className='left'>
                            <img src={featured[0].images} alt="" />
                            
                        </div>
                        <div className='right'>
                            <List title="Action" data={action} isInAnime={false}/>
                        </div>
                    </div>

                    <div className='wrapper'>
                        <div className='left'>
                            <img src={featured[1].images} alt="" />
                            
                        </div>
                        <div className='right'>
                            <List title="Drama" data={drama} isInAnime={false}/>
                        </div>
                    </div>


                    <div className='wrapper'>
                        <div className='left'>
                            <img src={featured[2].images} alt="" />
                            
                        </div>
                        <div className='right'>
                            <List title="Adventure" data={adventure} isInAnime={false}/>
                        </div>
                    </div>



                    <div className='wrapper'>
                        <div className='left'>
                            <img src={featured[3].images} alt="" />
                            
                        </div>
                        <div className='right'>
                            <List title="Comedy" data={comedy} isInAnime={false}/>
                        </div>
                    </div>

                    <div className='wrapper'>
                        <div className='left'>
                            <img src={featured[4].images} alt="" />
                            
                        </div>
                        <div className='right'>
                            <List title="Sports" data={sports} isInAnime={false}/>
                        </div>
                    </div>

                    <div className='wrapper'>
                        <div className='left'>
                            <img src={featured[5].images} alt="" />
                            
                        </div>
                        <div className='right'>
                            <List title="Movies" data={movies} isInAnime={false}/>
                        </div>
                    </div>
                    
                </div>
    
            </div>
      )
    }


}
