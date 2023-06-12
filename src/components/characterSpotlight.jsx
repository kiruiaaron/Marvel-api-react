import React, { useEffect, useState } from 'react'
import Card from './card'
import axios from 'axios'

const CharacterSpotlight = () => {

  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?limit=12&offset=50&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126")

  const [item, setItem]= useState();
 
 useEffect(()=>{
     const fetch= async()=>{
       const res = await  axios.get(url)
       console.log(res.data.data.results)
       setItem(res.data.data.results)
     }
     fetch()
 },[url])

 
  
  return (
    <section className="spotlight">
        <h1>CHARACTER SPOTLIGHT</h1>
        
        <div className="spot">
            <div className="card-item">
            {
                (!item)?<p>Not Found</p>:<Card data={item}/> 
            }
            </div>
        </div>
    </section>
  )
}

export default CharacterSpotlight