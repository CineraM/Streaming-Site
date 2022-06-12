import Navbar from "../components/navbar/Navbar"
import Featured from "../components/featured/Featured"
import "./home.scss"
import List from "../components/list/List"
import Footer from "../components/footer/Footer"
import { Helmet } from 'react-helmet'
import { useEffect } from "react"
import jwt from 'jwt-decode'
import { useNavigate } from "react-router-dom"

//import img1 from '../img/test_giff.gif'; // local file 

// rfc RectFunctionalComponent
// rafce ReactArrowFunctionalExportComponent

// home page --> will call navbar, featured, and series sliders

var action = [
  [
    "Fullmetal Alchemist: Brotherhood",
    "https://cdn.myanimelist.net/images/anime/7/74317l.jpg?_gl=1*1icm7kf*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTAxNzYuNDA." 
  ],
  [
    "Vinland Saga", 
    "https://cdn.myanimelist.net/images/anime/1612/93576l.jpg?_gl=1*h8qaa7*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTA2MDUuMTI."
  ],
  [
    "Kimetsu no Yaiba: Yuukaku-hen", 
    "https://cdn.myanimelist.net/images/anime/1908/120036l.jpg?_gl=1*18v2y65*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTA2NjMuMTQ."
  ],
  [
    "Hunter x Hunter",
    "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg?_gl=1*1sbywp3*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTA2OTIuNTA."
  ],
  [
    "Jujutsu Kaisen",
    "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg?_gl=1*tix1k9*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTA3NTMuNjA."
  ],
  [
    "Shingeki no Kyojin",
    "https://cdn.myanimelist.net/images/anime/5/44560l.jpg?_gl=1*16syeg8*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTA4MTEuMg.."
  ], 
  [
    "Yuu☆Yuu☆Hakusho",
    "https://cdn.myanimelist.net/images/anime/1228/111372l.jpg?_gl=1*1gjyj8k*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTA5MTAuNDY."
  ],
  [
    "Naruto: Shippuuden",
    "https://cdn.myanimelist.net/images/anime/5/85122l.jpg?_gl=1*1jup6pk*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTA5NDYuMTA."

  ]
];


const Home = () => {

  let navigate = useNavigate();
  const token = localStorage.getItem('token')
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
      <List title="Sports" data={action}/>
      <List title="Drama" data={action}/>
      <List title="Comedy" data={action}/>

      
      <br/>
      <Footer/>
    </div>
  )
}

export default Home

