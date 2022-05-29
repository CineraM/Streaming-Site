import React from 'react'
import "./anicontent.scss"


var bg_link = "https://staging.animethemes.moe/video/KaguyaSamaWaKokurasetaiS2-OP1-NCBD1080.webm" 
export default function Anicontent() {
  return (
    <div className="anicontent">

        <div className="container">

          <div className='left'>
            <select className='themes'>
              <option value="0">Episode 1</option>
              <option value="1">Episode 2</option>
              <option value="2">Episode 3</option>
            </select>
          </div>

          <div className="right">

            <video 
            controls loop 
              src= {bg_link}  // passing a javascript variable
            />
          </div>




        </div>
    </div>
  )
}
