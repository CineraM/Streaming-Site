import './listitem.scss'
import { useNavigate } from "react-router-dom"

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

      </div>
    </div>
  )
}
