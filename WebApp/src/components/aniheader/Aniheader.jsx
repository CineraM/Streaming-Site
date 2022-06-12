import { AddOutlined, ThumbDownAltOutlined, ThumbUpOutlined } from "@material-ui/icons"
import { useState } from 'react'
import Anicontent from "../anicontent/Anicontent"
import "./aniheader.scss"

// harcoded variable
var bg_link = "https://staging.animethemes.moe/video/HaikyuuS5-OP1-NCBD1080.webm" 
var ani_img = "https://cdn.myanimelist.net/images/anime/1813/105367l.jpg?_gl=1*1ihd1ya*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1MzAwOTAyNS4zOC4xLjE2NTMwMTE4OTUuMzU."
var synopsis = "After their triumphant victory over Shiratorizawa Academy, the Karasuno High School volleyball team has earned their long-awaited ticket to nationals. As preparations begin, genius setter Tobio Kageyama is invited to the All-Japan Youth Training Camp to play alongside fellow nationally recognized players. Meanwhile, Kei Tsukishima is invited to a special rookie training camp for first-years within the Miyagi Prefecture. Not receiving any invitations himself, the enthusiastic Shouyou Hinata feels left behind. However, Hinata does not back down. Transforming his frustration into self-motivation, he boldly decides to sneak himself into the same rookie training camp as Tsukishima. Even though Hinata only lands himself a job as the ball boy, he comes to see this as a golden opportunity. He begins to not only reflect on his skills as a volleyball player but also analyze the plethora of information available on the court and how he can apply it. As the much-anticipated national tournament approaches, the members of Karasuno's volleyball team attempt to overcome their weak points and refine their skills, all while aiming for the top!"

export default function Aniheader() {

  // usestate from react, use a bool variable in the css file
  const[isVertical, setIsVertical] = useState(false);

  // if the page offset is larger than 0, unblur the navbar
  window.onresize = () =>{
    // let aspectRatio = window.innerWidth/window.innerHeight;
    setIsVertical(window.innerWidth/window.innerHeight < 1 ? true : false);
    return() => (window.onresize = null);
  };


  return (

    <div className={isVertical ? "aniheader vertical" : "aniheader"}>


    <video 
      autoPlay
      loop
      muted
      src= {bg_link}  // passing a javascript variable
    />

    <div className="info">
      <div className="left">
        <img className='poster' src={ani_img} alt="" />
      </div>
      <div className='right'>
        <h3 className={isVertical ? "title vertical" : "title"}>
          Haikyuu!! To the Top
          </h3>
          <br />
          <p className={isVertical ? "desc vertical" : "desc"}>{synopsis}</p>
          

          <div className={isVertical ? "details vertical" : "details"}>
            <p className={isVertical ? "related vertical" : "related"}>
              Season: Winter 2020
            </p>
            <p className={isVertical ? "related vertical" : "related"}>
              Genre(s): Sports
            </p>
            <p className={isVertical ? "related vertical" : "related"}>
              Studio(s): Production I.G
            </p>
            <p className={isVertical ? "related vertical" : "related"}>
              Rating: PG-13
            </p>
            

          </div>



          <div className="buttons">
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
}