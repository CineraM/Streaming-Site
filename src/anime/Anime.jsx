import React from 'react'
import Helmet from 'react-helmet'
import Anicontent from '../components/anicontent/Anicontent'
import Featured from "../components/featured/Featured"
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import List from "../components/list/List"
import "./anime.scss"



export default function Anime() {
  return (
    <div className="anime">
        <Helmet>
            <title>{ "Ani-Fox" }</title>
        </Helmet>

        <Navbar/>
        <Featured/>
        <br />
        <Anicontent/>


        <List title="Related Series"/>
        <br />
        <Footer/>
       
    </div>
  )
}
