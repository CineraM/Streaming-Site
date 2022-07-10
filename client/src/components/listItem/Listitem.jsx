import { AddOutlined, PlayArrowOutlined, ThumbDownAltOutlined, ThumbUpOutlined } from '@material-ui/icons'
import './listitem.scss'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react';


export default function Listitem(props) {

  let navigate = useNavigate();

  return (
    <div className='listItem'>
        <img
            onClick={() => {
              if(props.isAnime)
              {
                localStorage.setItem('LS_ID', props.aniId)
                window.location.reload()
              }
              else
              {
                localStorage.setItem('LS_ID', props.aniId)
                navigate("/anime")
              }
            }} 
            src={props.poster}
            alt="" 
        />

        <div className='itemInfo'>
        <div className='title'>
            {props.title}
          </div>
          {/* <div className="icons">
            <PlayArrowOutlined className='icon' 
              onClick={() => {
                if(props.isAnime)
                {
                  localStorage.setItem('LS_ID', props.aniId)
                  window.location.reload()
                }
                else
                {
                  localStorage.setItem('LS_ID', props.aniId)
                  navigate("/anime")
                }
              }} 
            />
            <AddOutlined className='icon'/>
            <ThumbUpOutlined className='icon'/>
            <ThumbDownAltOutlined className='icon'/>
          </div> */}

      </div>
    </div>
  )
}
