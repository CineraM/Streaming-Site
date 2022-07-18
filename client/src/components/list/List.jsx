
// import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
// import { useRef } from 'react';
import Listitem from '../listItem/Listitem'
import './list.scss'

export default function List(props) {
  return (
    <div className='list'>
      
        <span className='listTitle'>
          {props.title}
        </span>

        <div className="poster_row">
          {/* react props should have unique keys, key={i} solves this "bug" */}
          {props.data.map((lists, i) => {
            return (
                <Listitem key={i} title = {lists.title} poster={lists.images} aniId={lists.id} isAnime={props.isInAnime}/>
            )
          })}

        </div>

    </div>
  )
}
