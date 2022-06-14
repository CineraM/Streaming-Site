import Navbar from "../components/navbar/Navbar"
import Featured from "../components/featured/Featured"
import "./home.scss"
import List from "../components/list/List"
import Footer from "../components/footer/Footer"
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
import jwt from 'jwt-decode'
import { useNavigate } from "react-router-dom"
import { RssFeedTwoTone } from "@material-ui/icons"

const Home = () => {

  const [action, setAction] = useState([])
  const [drama, setDrama] = useState([])
  const [adventure, setAdventure] = useState([])
  const [comedy, setComedy] = useState([])
  const [sports, setSports] = useState([])
  const [movies, setMovies] = useState([])

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
      async function getLists() 
      {   
        
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

          // return actionList; 
      }

      getLists()
  }, [])

  //user validation
  const token = localStorage.getItem('token')
  let navigate = useNavigate();
	useEffect(() => {
    
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
	}, [])

  

  return (
    <div className='home'>
      <Helmet>
        <title>{ "Ani-Fox" }</title>
      </Helmet>
      <Navbar/>
      <Featured type="series"/>
      <br/>

      <List title="Action" data={action}/>
      <List title="Sports" data={sports}/>
      <List title="Drama" data={drama}/>
      <List title="Comedy" data={comedy}/>
      <List title="Adventure" data={adventure}/>
      <List title="Movies" data={movies}/>

      
      <br/>
      <Footer/>
    </div>
  )
}

export default Home




  // var action = [
  //   {
  //     title: 'Fullmetal Alchemist: Brotherhood',
  //     images: 'https://cdn.myanimelist.net/images/anime/7/74317l.jpg?_gl=1*1icm7kf*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTAxNzYuNDA.' 
  //   },
  //   {
  //     title: 'Vinland Saga', 
  //     images: 'https://cdn.myanimelist.net/images/anime/1612/93576l.jpg?_gl=1*h8qaa7*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTA2MDUuMTI.'
  //   },
  //   {
  //     title: 'Kimetsu no Yaiba: Yuukaku-hen', 
  //     images: "https://cdn.myanimelist.net/images/anime/1908/120036l.jpg?_gl=1*18v2y65*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTA2NjMuMTQ."
  //   },
  //   {
  //     title: 'Hunter x Hunter',
  //     images: 'https://cdn.myanimelist.net/images/anime/1337/99013l.jpg?_gl=1*1sbywp3*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTA2OTIuNTA.'
  //   },
  //   {
  //     title: 'Jujutsu Kaisen',
  //     images: 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg?_gl=1*tix1k9*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTA3NTMuNjA.'
  //   },
  //   {
  //     title: 'Shingeki no Kyojin',
  //     images: 'https://cdn.myanimelist.net/images/anime/5/44560l.jpg?_gl=1*16syeg8*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTA4MTEuMg..'
  //   }, 
  //   {
  //     title: 'Yuu☆Yuu☆Hakusho',
  //     images: 'https://cdn.myanimelist.net/images/anime/1228/111372l.jpg?_gl=1*1gjyj8k*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTA5MTAuNDY.'
  //   },
  //   {
  //     title: 'Naruto: Shippuuden',
  //     images: 'https://cdn.myanimelist.net/images/anime/5/85122l.jpg?_gl=1*1jup6pk*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTA5NDYuMTA.'
  
  //   }
  // ];