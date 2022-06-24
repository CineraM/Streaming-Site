import { AddOutlined, ThumbDownAltOutlined, ThumbUpOutlined } from "@material-ui/icons"
import { useEffect, useState } from 'react'
// import Anicontent from "../anicontent/Anicontent"
import "./aniheader.scss"



export default function Aniheader(props) {

  // usestate from react, use a bool variable in the css file
  const [isVertical, setIsVertical] = useState(false);
  const [aniData, setAniData] = useState([{}])

  const aniId = localStorage.getItem('LS_ID')
  // console.log(aniData.links[0])

  window.onresize = () =>{
  // let aspectRatio = window.innerWidth/window.innerHeight;
    setIsVertical(window.innerWidth/window.innerHeight < 1 ? true : false);
    return() => (window.onresize = null);
  };


  useEffect(() => {
    setIsVertical(window.innerWidth/window.innerHeight < 1 ? true : false);

    async function fetchAniData() 
    {
        try 
        {
          const response = await fetch('http://localhost:1337/api/anime', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              aniId,
            }),
          });
  
          const mylist = await response.json();
          return mylist;
        } 
        catch (error) 
        {
            console.log('ERROR')
            console.error(error);
        }
    }
    
    async function getAniData() 
    {  
      const aniDataList = await fetchAniData();
      setAniData(aniDataList)

    }
    getAniData()
    // eslint-disable-next-line
  }, [])

  try {
    // console.log(aniData.links[0])

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
            <img className='poster' src={aniData.images} alt="" />
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
  } catch (error) 
  {
    return (

        <div className={isVertical ? "aniheader vertical" : "aniheader"}>
    
        
    </div>
    )  
  }


}