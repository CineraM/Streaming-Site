import { ThumbDownAltOutlined, ThumbUpOutlined } from "@material-ui/icons"
import { useEffect, useState } from 'react'
import "./aniheader.scss"

export default function Aniheader(props) {

  const [user, setUser] = useState(localStorage.getItem('user_email'))
  const [anime, setAnime] = useState(localStorage.getItem('LS_ID'))
  const [genres, setGenres] = useState('')
  const [likebool, setLikebool] = useState(false)
  const [loading, setLoading] = useState(true)
  const [aniId, setAniId] = useState(localStorage.getItem('LS_ID'))

  // usestate from react, use a bool variable in the css file
  const [isVertical, setIsVertical] = useState(false);
  const [aniData, setAniData] = useState([{}])


  // console.log(aniData.links[0])

  window.onresize = () =>{
  // let aspectRatio = window.innerWidth/window.innerHeight;
    setIsVertical(window.innerWidth/window.innerHeight < 1 ? true : false);
    return() => (window.onresize = null);
  };

  async function getUserLike() {    
    const response = await fetch('https://anifox-cinera.herokuapp.com/api/find_user_like', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user,
            anime,
        }),
    })
    const data = await response.json()
    console.log(data)
    setLikebool(data)
  }


  async function like() {  
    const response = await fetch('https://anifox-cinera.herokuapp.com/api/like', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user,
            anime,
            genres,
        }),
    })

    const data = await response.json()
    getUserLike()
    if (data.status === 'ok') {
        console.log("Succesfull like")
    }
  }

  async function remove_like() {    
    const response = await fetch('https://anifox-cinera.herokuapp.com/api/remove_like', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user,
            anime,
        }),
    })

    const data = await response.json()
    getUserLike()
    if (data.status === 'ok') {
        console.log("Like Removed")
    }
  }

  

  useEffect(() => {
    setIsVertical(window.innerWidth/window.innerHeight < 1 ? true : false);

    async function fetchAniData() 
    {
        try 
        {
          const response = await fetch('https://anifox-cinera.herokuapp.com/api/anime', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              aniId,
            }),
          });
          const mylist = await response.json();
          setAniData(mylist)
          setLoading(false)
          return mylist;
        } 
        catch (error) 
        {
            console.error(error);
        }
    }
    
    async function getAniData() 
    {  
      const aniDataList = await fetchAniData();
      setAniData(aniDataList)
      setUser(localStorage.getItem('user_email'));
      setAnime(aniDataList.id);
      setGenres(aniDataList.genres);
      getUserLike();
    }

    getAniData()
    // eslint-disable-next-line
  }, [])

  var likebutton;
  if (likebool === false) {    
    likebutton =<button className={isVertical ? "like-btn vertical" : "like-btn"} 
                  onClick={() => {
                    like()
                  }} 
                  >
                  <ThumbUpOutlined className='icon'/>
                </button>
  } else {
    likebutton = <button className={isVertical ? "dislike-btn vertical" : "dislike-btn"} 
                  onClick={() => {
                    remove_like()
                  }} 
                  >
                  <ThumbDownAltOutlined className='icon'/>
                </button>
  }


  if(loading)
  {
    return(
      <div className="aniheader">        
        <div className="loader"></div>
      </div> 
    )
  }
  else
  {
      return (
        <div className={isVertical ? "aniheader vertical" : "aniheader"}>
          <video 
            autoPlay
            loop
            muted
            src= {aniData.links[0]}  // passing a javascript variable
          /> 
  
        <div className="info">
            <div className="left">
              <img className={isVertical ? "poster vertical" : "poster"} src={aniData.images} alt="" />
            </div>
            <div className='right'>
              <h3 className={isVertical ? "title vertical" : "title"}>
                {aniData.title}
                </h3>
                <br />
                <p className={isVertical ? "desc vertical" : "desc"}>{aniData.synopsis}</p>
                
      
                <div className={isVertical ? "details vertical" : "details"}>
                  <p className={isVertical ? "related vertical" : "related"}>
                    Season: {aniData.season}
                  </p>
                  <p className={isVertical ? "related vertical" : "related"}>
                    Genre(s): {aniData.genres}
                  </p>
                  <p className={isVertical ? "related vertical" : "related"}>
                    Studio(s): {aniData.studios}
                  </p>
                  <p className={isVertical ? "related vertical" : "related"}>
                    Rating: {aniData.rating}
                  </p>
                </div>
  
                <div className={likebool ? "buttons likebool" : "buttons"}  >
                  {likebutton}
                </div>
            </div>
          </div>
        </div>
      )
    

  }


}