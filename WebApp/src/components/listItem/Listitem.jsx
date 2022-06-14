import { AddOutlined, PlayArrowOutlined, ThumbDownAltOutlined, ThumbUpOutlined } from '@material-ui/icons'
import './listitem.scss'
// import React, { useState } from 'react';

export default function Listitem(props) {
  // const [isHover, setIsHover] = useState(false);
  // {isHover && (html stuff here)}
  
  return (
    <div className='listItem'>
        <img
            src={props.poster}
            alt="" 
        />

        <div className='itemInfo'>
        <div className='title'>
            {props.title}
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
