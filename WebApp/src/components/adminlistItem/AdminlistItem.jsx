import { AddOutlined, PlayArrowOutlined, ThumbDownAltOutlined, ThumbUpOutlined } from '@material-ui/icons'
import './adminlistItem.scss'
import { useNavigate } from "react-router-dom"
// import React, { useState } from 'react';



export default function Listitem(props) {
  // const [isHover, setIsHover] = useState(false);
  // {isHover && (html stuff here)}

  
  let navigate = useNavigate();
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
      </div>
    </div>
  )
}
