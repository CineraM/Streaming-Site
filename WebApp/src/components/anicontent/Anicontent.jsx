import React, { useEffect, useState } from 'react'
import "./anicontent.scss"


export default function Anicontent(props) {
   
  const[select, setSelect] = useState();

  // const [aniId, setAniId] = useState(5114)
  const [aniData, setAniData] = useState([])
  const aniId = localStorage.getItem('LS_ID')

  async function fetchAniData() 
  {
      try 
      {

        const response = await fetch('http://localhost:1337/api/anime', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            aniId,
          }),
        });

        const mylist = await response.json();
        // console.log(mylist)
        return mylist;
      } 
      catch (error) 
      {
          console.log('ERROR')
          console.error(error);
      }
  }

  useEffect(() => {
    async function getAniData() 
    {  
      const aniDataList = await fetchAniData();
      setAniData(aniDataList)
    }

    getAniData()
  }, [])

 
  try {
    return (

      <div className="anicontent">
  
          <div className="container">
  
            <div className="right">
  
              <video 
              controls  
                src= {select}  // passing a javascript variable
              />
            </div>
  
            <div className='left'>
              <select className='themes' onChange={e=>setSelect(e.target.value)}>
                <option value="none" selected disabled hidden>Select Episode</option>
  
                {aniData.links.map(lists => {
                return (
                  <option 
                    value={lists}>
                    Episode {aniData.links.indexOf(lists) + 1}
                  </option>
                  )
                })}
              </select>
            </div>
  
  
          </div>
      </div>
    )
  } catch (error) {
    return (

      <div className="anicontent">
        meh
      </div>
    ) 
  }


}
