import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import Card from './card'
import axios from 'axios'

const MarvelCharacterList = () => {
    
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?limit=36&offset=60&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126")

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
   <section className="marvel-list">
      <h1>MARVEL CHARACTER LIST</h1>
      <form action="" className='form'>
        <div className="form1">
        <input type="search" placeholder='SEARCH'/>
          <MagnifyingGlassIcon className='search'/>
        </div>
          <div className="form-2">
            <h2>SORT BY</h2>
          <select name="" id="">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
          </div>
          
        </form>
        <div className="card-item">
            {
                (!item)?<p>Not Found</p>:<Card data={item}/> 
            }
            </div>
   </section>
   
  )
}

export default MarvelCharacterList