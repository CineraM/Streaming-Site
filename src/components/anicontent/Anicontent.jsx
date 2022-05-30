import React, { useState } from 'react'
import "./anicontent.scss"



var bg_link = ""

export default function Anicontent() {
   
  const[select, setSelect] = useState();
  return (


    <div className="anicontent">

        <div className="container">

          <div className='left'>
            <select className='themes' onChange={e=>setSelect(e.target.value)}>
              <option value="none" selected disabled hidden>Select an Episode</option>
              <option value="https://staging.animethemes.moe/video/KaguyaSamaWaKokurasetaiS2-OP1-NCBD1080.webm">
                Episode 1</option>
              <option value="https://staging.animethemes.moe/video/KimetsuNoYaibaYuukakuHen-OP1-NCBD1080.webm">
                Episode 2</option>
              <option value="https://staging.animethemes.moe/video/FullmetalAlchemistBrotherhood-OP2.webm">
                Episode 3
              </option>
              <option value="https://staging.animethemes.moe/video/RakugoShinju-OP1.webm">
                Episode 4
              </option>
            </select>
          </div>

          <div className="right">

            <video 
            controls  
              src= {select}  // passing a javascript variable
            />
          </div>




        </div>
    </div>
  )
}
