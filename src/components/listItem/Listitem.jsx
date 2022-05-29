import { AddOutlined, PlayArrowOutlined, ThumbDownAltOutlined, ThumbUpOutlined } from '@material-ui/icons'
import './listitem.scss'
// import React, { useState } from 'react';

export default function Listitem() {
  // const [isHover, setIsHover] = useState(false);
  // {isHover && (html stuff here)}
  
  return (
    <div className='listItem'>
        <img
            src="https://cdn.myanimelist.net/images/anime/1813/105367l.jpg?_gl=1*1ihd1ya*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1MzAwOTAyNS4zOC4xLjE2NTMwMTE4OTUuMzU." 
            alt="" 
        />

        <div className='itemInfo'>
        <div className='title'>
            Haikyuu!! To the Top
          </div>
          <div className="icons">
            <PlayArrowOutlined className='icon'/>
            <AddOutlined className='icon'/>
            <ThumbUpOutlined className='icon'/>
            <ThumbDownAltOutlined className='icon'/>
          </div>

          
          
      </div>
    </div>
  )
}
