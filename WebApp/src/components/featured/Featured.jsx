import { AddOutlined, PlayArrow, ThumbDownAltOutlined, ThumbUpOutlined } from "@material-ui/icons"
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./featured.scss"

// harcoded variable
var bg_link = "https://staging.animethemes.moe/video/HaikyuuS5-OP1-NCBD1080.webm" 
var ani_img = "https://cdn.myanimelist.net/images/anime/1813/105367l.jpg?_gl=1*1ihd1ya*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1MzAwOTAyNS4zOC4xLjE2NTMwMTE4OTUuMzU."
var synopsis = "After their triumphant victory over Shiratorizawa Academy, the Karasuno High School volleyball team has earned their long-awaited ticket to nationals. As preparations begin, genius setter Tobio Kageyama is invited to the All-Japan Youth Training Camp to play alongside fellow nationally recognized players. Meanwhile, Kei Tsukishima is invited to a special rookie training camp for first-years within the Miyagi Prefecture. Not receiving any invitations himself, the enthusiastic Shouyou Hinata feels left behind. However, Hinata does not back down. Transforming his frustration into self-motivation, he boldly decides to sneak himself into the same rookie training camp as Tsukishima. Even though Hinata only lands himself a job as the ball boy, he comes to see this as a golden opportunity. He begins to not only reflect on his skills as a volleyball player but also analyze the plethora of information available on the court and how he can apply it. As the much-anticipated national tournament approaches, the members of Karasuno's volleyball team attempt to overcome their weak points and refine their skills, all while aiming for the top!"

export default function Features() {

  // usestate from react, use a bool variable in the css file
  const [isVertical, setIsVertical] = useState(false);
  const [featured, setFeatured] = useState([])
  const [index, setIndex] = useState(0)
  let navigate = useNavigate();

  // if the page offset is larger than 0, unblur the navbar
  window.onresize = () =>{
    // let aspectRatio = window.innerWidth/window.innerHeight;
    setIsVertical(window.innerWidth/window.innerHeight < 1 ? true : false);
    return() => (window.onresize = null);
  };



  async function getFeatured() 
  {
    async function fetchFeatured() 
    {
        try {
            const response = await fetch(`http://localhost:1337/api/featured`, {
              method: 'GET',
              
            });
            const mylist = await response.json();
            // console.log(mylist)
            return mylist;
        } 
        catch (error) {console.error(error);}
    }

      const featuredList = await fetchFeatured("Comedy");
      setFeatured(featuredList);
  }

  useEffect(() => {
    // proper aspect ratio of content
    setIsVertical(window.innerWidth/window.innerHeight < 1 ? true : false);
    getFeatured()

  }, [])

  try {
    return (

      <div className={isVertical ? "featured vertical" : "featured"}>
  
      <div className={isVertical ? "category vertical" : "category"}>
        <span>Genres</span>
        {/* <select className="genres" name="genre" id="genre"> */}
        <select className={isVertical ? "genres vertical" : "genres"} onChange={e => {
          setIndex(e.target.value)
        }}>
          <option value="0">Action</option>
          <option value="1"> Drama</option>
          <option value="2">Adventure</option>
          <option value="3">Comedy</option>
          <option value="4">Sports</option>
          <option value="5">Movies</option>
        </select>
      </div>
  
      <video 
        autoPlay
        loop
        muted
        src= {featured[index].links} 
      />
  
      <div className="info">
        <div className="left">
          <img className='poster' src={featured[index].images} alt="" />
        </div>
        <div className='right'>
            <h3 className={isVertical ? "title vertical" : "title"}>
              {featured[index].title}
            </h3>
            <br />
            <p className={isVertical ? "desc vertical" : "desc"}>{featured[index].synopsis}</p>
            
            <div className="buttons">
  
              <button className={isVertical ? "play-btn vertical" : "play-btn"}
                      onClick={() => {
                        localStorage.setItem('LS_ID', featured[index].id)
                        navigate("/anime")
                      }} >
                <PlayArrow/>
                <span>Play</span>
              </button>
  
              <button className={isVertical ? "more-btn vertical" : "more-btn"}>
                <AddOutlined className='icon'/>
              </button>
  
              <button className={isVertical ? "more-btn vertical" : "more-btn"}>
                <ThumbUpOutlined className='icon'/>
              </button>
  
              <button className={isVertical ? "more-btn vertical" : "more-btn"}>
                <ThumbDownAltOutlined className='icon'/>
              </button>
  
            </div>
        </div>
  
        </div>
    </div>
  
    )
  } catch (error) {
    <div className={isVertical ? "featured vertical" : "featured"}>
      meh
    </div>
  }


}