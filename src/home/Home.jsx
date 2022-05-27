import Navbar from "../components/navbar/Navbar"
import Featured from "../components/featured/Featured"
import "./home.scss"
import List from "../components/list/List"
import Footer from "../components/footer/Footer"
import { Helmet } from 'react-helmet'

//import img1 from '../img/test_giff.gif'; // local file 

// rfc RectFunctionalComponent
// rafce ReactArrowFunctionalExportComponent

// home page --> will call navbar, featured, and series sliders
const Home = () => {
  return (
    <div className='home'>
      <Helmet>
        <title>{ "Ani-Fox" }</title>
      </Helmet>
      <Navbar/>

      <Featured type="series"/>
      <br/>

      <List/>
      <List/>
      <List/>
      <List/>

      <br/>
      <Footer/>
    </div>
  )
}

export default Home

