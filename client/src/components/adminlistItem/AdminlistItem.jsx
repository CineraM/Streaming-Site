import { useEffect, useState } from 'react';
import './adminlistItem.scss'

export default function Listitem(props) {

  const [genres, setGenres] = useState('')
  const [id, setId] = useState(props.aniId)
  const [images, setImages] = useState('')
  const [links, setLinks] = useState('')
  const [synopsis, setSynopsis] = useState('')
  const [title, setTitle] = useState('')
  const [likes, setLikes] = useState([])

  // Change the featured series on the database
  async function changeFeatured() {
    const response = await fetch('https://anifox-cinera.herokuapp.com/api/change_featured', {
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

// Get likes for a specific series
async function get_anime_likes() {
  try {
    const response = await fetch('https://anifox-cinera.herokuapp.com/api/get_anime_likes', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          id,
      }),
    });
    const mylist = await response.json();
    return mylist;
  } catch (error) {console.error(error);}  
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

    const likesList = await get_anime_likes()
    setLikes(likesList) 
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
      
      <div className="newfeat"> New Featured </div>

      <div className='wrapper'>
        <div className="likes"> {likes.length} likes </div>

        <img
            src={props.poster}
            alt="" />
      </div>

        <div className='itemInfo'>
        <div className='title'>
            {props.title}
          </div>
      </div>
      <h1>
      </h1>
    </div>
  )
}
