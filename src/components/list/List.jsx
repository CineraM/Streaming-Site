
// import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
// import { useRef } from 'react';
import Listitem from '../listItem/Listitem'
import './list.scss'

export default function List(props) {
  
  // const ref = useRef(null);
  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };


  var action = [
    "Fullmetal Alchemist: Brotherhood",
    "https://cdn.myanimelist.net/images/anime/7/74317l.jpg?_gl=1*1icm7kf*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTAxNzYuNDA." 
  ];
  return (
    <div className='list'>
      
        <span className='listTitle'>
          {props.title}
        </span>
      
          <div className="poster_row">
              <Listitem title = {props.data[0][0]} poster={props.data[0][1]}/>
              <Listitem title = {props.data[1][0]} poster={props.data[1][1]}/>
              <Listitem title = {props.data[2][0]} poster={props.data[2][1]}/>
              <Listitem title = {props.data[3][0]} poster={props.data[3][1]}/>
              <Listitem title = {props.data[4][0]} poster={props.data[4][1]}/>
              <Listitem title = {props.data[5][0]} poster={props.data[5][1]}/>
              <Listitem title = {props.data[6][0]} poster={props.data[6][1]}/>
              <Listitem title = {props.data[7][0]} poster={props.data[7][1]}/>
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