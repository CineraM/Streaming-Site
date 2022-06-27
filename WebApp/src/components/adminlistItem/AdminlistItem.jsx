import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminlistItem.scss'
// import { useNavigate } from "react-router-dom"
// import React, { useState } from 'react';



export default function Listitem(props) {
  let navigate = useNavigate();

  const [genres, setGenres] = useState('')
  const [id, setId] = useState('')
  const [images, setImages] = useState('')
  const [links, setLinks] = useState('')
  const [synopsis, setSynopsis] = useState('')
  const [title, setTitle] = useState('')

  
  async function changeFeatured() {
        
    console.log(props.links)
    const response = await fetch('http://localhost:1337/api/change_featured', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            genres,
            id,
            images,
            links,
            synopsis,
            title
        }),
    })

    const data = await response.json()

    if (data.status === 'ok') {
        console.log("Succesfull Change")
        window.location.reload(false);
    }
}

useEffect(() => {
  async function get_data() 
  {
   
    setGenres(props.genres);
    setId(props.aniId)
    setImages(props.poster)
    setLinks(props.links[0])
    setSynopsis(props.synopsis)
    setTitle(props.title)
  }
  get_data()

  // eslint-disable-next-line
},[])

  return (
    <div 
      className='admin-listItem' 
      onClick={() => {
        changeFeatured()
       }} >
      
      <div className="centered"> New Featured</div>
        <img
            src={props.poster}
            alt=""

        />

        <div className='itemInfo'>
        <div className='title'>
            {props.title}
          </div>
      </div>
    </div>
  )
}
