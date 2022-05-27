import { AddOutlined, PlayArrowOutlined, ThumbDownAltOutlined, ThumbUpOutlined } from '@material-ui/icons'
import './listitem.scss'
import React, { useState } from 'react';


var synopsis = "After their triumphant victory over Shiratorizawa Academy, the Karasuno High School volleyball team has earned their long-awaited ticket to nationals. As preparations begin, genius setter Tobio Kageyama is invited to the All-Japan Youth Training Camp to play alongside fellow nationally recognized players. Meanwhile, Kei Tsukishima is invited to a special rookie training camp for first-years within the Miyagi Prefecture. Not receiving any invitations himself, the enthusiastic Shouyou Hinata feels left behind. However, Hinata does not back down. Transforming his frustration into self-motivation, he boldly decides to sneak himself into the same rookie training camp as Tsukishima."

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
