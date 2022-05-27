import { Info, PlayArrow } from "@material-ui/icons"
import { useState } from 'react'
import "./featured.scss"

// harcoded variable
var bg_link = "https://staging.animethemes.moe/video/HaikyuuS5-OP1-NCBD1080.webm"
var fg_link = "https://cdn.myanimelist.net/images/anime/1813/105367l.jpg?_gl=1*1ihd1ya*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1MzAwOTAyNS4zOC4xLjE2NTMwMTE4OTUuMzU." 
var synopsis = "After their triumphant victory over Shiratorizawa Academy, the Karasuno High School volleyball team has earned their long-awaited ticket to nationals. As preparations begin, genius setter Tobio Kageyama is invited to the All-Japan Youth Training Camp to play alongside fellow nationally recognized players. Meanwhile, Kei Tsukishima is invited to a special rookie training camp for first-years within the Miyagi Prefecture. Not receiving any invitations himself, the enthusiastic Shouyou Hinata feels left behind. However, Hinata does not back down. Transforming his frustration into self-motivation, he boldly decides to sneak himself into the same rookie training camp as Tsukishima. Even though Hinata only lands himself a job as the ball boy, he comes to see this as a golden opportunity. He begins to not only reflect on his skills as a volleyball player but also analyze the plethora of information available on the court and how he can apply it. As the much-anticipated national tournament approaches, the members of Karasuno's volleyball team attempt to overcome their weak points and refine their skills, all while aiming for the top!"

export default function Features() {

  // usestate from react, use a bool variable in the css file
  const[isVertical, setIsVertical] = useState(false);

  // if the page offset is larger than 0, unblur the navbar
  window.onresize = () =>{
    // let aspectRatio = window.innerWidth/window.innerHeight;
    setIsVertical(window.innerWidth/window.innerHeight < 1 ? true : false);
    return() => (window.onresize = null);
  };

  //debug, delete later
  console.log("Test")
  console.log(isVertical)

  return (
    <div className="featured" >
        
            <div className="category">
              <span>Genres</span>
              <select className="genres" name="genre" id="genre">
                <option value="action">Sports</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="fiction">Fiction</option>
              </select>
            </div>
          

        <video 
          autoPlay
          loop
          muted
          src= {bg_link}  // passing a javascript variable
        />
        
        <div className={isVertical ? "info vertical" : "info"}>
          <img
            src= {fg_link}
            alt="" 
          />
        <span className="title">
          Haikyuu!! To the Top
        </span>

          <span className="desc">
            {synopsis}
          </span>
          <div className="buttons">

            <button className="play">
              <PlayArrow/>
              <span>Play</span>
            </button>

            <button className="more">
              <Info/>
              <span>Info</span>
            </button>

          </div>

        </div>
    </div>
  )
}