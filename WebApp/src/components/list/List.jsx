
// import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
// import { useRef } from 'react';
import Listitem from '../listItem/Listitem'
import './list.scss'

export default function List(props) {
  
  // const ref = useRef(null);
  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };

  
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

// alternative if I ever figure out how to scroll orizontally on click event

    // <div className='list'>
      
    //     <span className='listTitle'>Action</span>
        
    //     <div className="wrapper">
    //       <ArrowBackIos className='left_button'/>
    //       <ArrowForwardIos className='right_button'/>
    //       <div className="poster_row">
    //           <button onClick={() => scroll(20)}> a</button>
    //           <Listitem onClick={() => scroll(-20)}/>
    //           <Listitem/>
    //           <Listitem/>
    //           <Listitem/>
    //           <Listitem/>
    //           <Listitem/>
    //           <Listitem/>
    //           <Listitem/>
    //           <Listitem/>
    //           <Listitem/>
    //           <Listitem/>
    //           <Listitem/>
    //           <Listitem/>
    //           <Listitem/>
    //           <Listitem/>
    //           <Listitem/>
    //       </div>
          
    //     </div>

        
    // </div>