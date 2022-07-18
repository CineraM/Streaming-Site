
import Listitem from '../adminlistItem/AdminlistItem'
import './adminlist.scss'

export default function List(props) {

  return (
    <div className='admin-list'>
      
        <span className='listTitle'>
          {props.title}
        </span>

        <div className="poster_row">
          {/* react props should have unique keys, key={i} solves this "bug" */}
          {props.data.map((lists, i) => {
            return (
                <Listitem key={i} genres={lists.genres} title = {lists.title} poster={lists.images} 
                aniId={lists.id} isAnime={props.isInAnime} links={lists.links} synopsis={lists.synopsis}/>
            )
          })}

        </div>

    </div>
  )
}