import React, { useEffect, useState } from 'react'
import "./anicontent.scss"

export default function Anicontent(props) {
  
  const[select, setSelect] = useState('');
  const [aniData, setAniData] = useState([])
  const aniId = localStorage.getItem('LS_ID')

  async function fetchAniData() 
  {
      try 
      {
        const response = await fetch('https://anifox-cinera.herokuapp.com/api/anime', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            aniId,
          }),
        });

        const mylist = await response.json();
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
    // eslint-disable-next-line
  }, [])

 
  try {
    return (
      <div className="anicontent">
          <div className="container">
            <div className="right">
  
              <video 
              controls  
                src= {select}
              />
            </div>
  
            <div className='left'>
              <select className='themes' onChange={e=>setSelect(e.target.value)} defaultValue="none">
                <option value="none" disabled hidden>Select Episode</option>
  
                {aniData.links.map((lists, i) => {
                return (
                  <option 
                    key={i}
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
        This should not load
      </div>
    ) 
  }


}
