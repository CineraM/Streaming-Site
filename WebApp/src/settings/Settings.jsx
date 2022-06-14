import React, { useEffect } from 'react'
import { useState } from 'react';



export default function Settings() {

    const [action, setAction] = useState([])
    const [drama, setDrama] = useState([])
    const [adventure, setAdventure] = useState([])
    const [comedy, setComedy] = useState([])
    const [sports, setSports] = useState([])
    const [movies, setMovies] = useState([])

    async function fetchList() 
    {
        try 
        {
            const response = await fetch(`http://localhost:1337/api/action`, 
            {
                method: 'GET'
            });
            const mylist = await response.json();
            return mylist;
        } 
        catch (error) 
        {
            console.error(error);
        }
    }

    useEffect(() => {
        async function getList() 
        {
            const mylist = await fetchList();
            setAction(mylist);
            return mylist; 
        }

        getList()
    }, [action])

    console.log(action)

    // fetch('http://localhost:1337/api/action')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log('ERROR'))

    // async function fetchList() 
    // {
    //     try 
    //     {
    //         const response = await fetch(`http://localhost:1337/api/action`, 
    //         {
    //             method: 'GET'
    //         });
    //         const mylist = await response.json();
    //         return mylist;
    //     } 
    //     catch (error) 
    //     {
    //         console.error(error);
    //     }
    // }

    // async function getList() 
    // {
    //     const mylist = await fetchList();
    //     return mylist 
    // }

    
    // console.log(action)

    return (
    <h1>fuck this </h1>
  )
}





















