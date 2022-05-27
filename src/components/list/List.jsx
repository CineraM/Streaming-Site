
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import { useRef } from 'react';
import Listitem from '../listItem/Listitem'
import './list.scss'

export default function List() {
  
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className='list'>
      
        <span className='listTitle'>Action</span>
      
          <div className="poster_row">
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
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