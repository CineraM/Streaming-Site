
// import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
// import { useRef } from 'react';
import { ListSharp } from '@material-ui/icons'
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
        <tbody>

        </tbody>

        <div className="poster_row">

          {props.data.map(lists => {
            return (
                <Listitem title = {lists.title} poster={lists.images} aniId={lists.id} isAnime={props.isInAnime}/>
            )
          })}

        </div>

        {/* Hard coded */}
          {/* <div className="poster_row">
              <Listitem title = {props.data[0][0]} poster={props.data[0][1]}/>
              <Listitem title = {props.data[1][0]} poster={props.data[1][1]}/>
              <Listitem title = {props.data[2][0]} poster={props.data[2][1]}/>
              <Listitem title = {props.data[3][0]} poster={props.data[3][1]}/>
              <Listitem title = {props.data[4][0]} poster={props.data[4][1]}/>
              <Listitem title = {props.data[5][0]} poster={props.data[5][1]}/>
              <Listitem title = {props.data[6][0]} poster={props.data[6][1]}/>
              <Listitem title = {props.data[7][0]} poster={props.data[7][1]}/>
          </div> */}
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