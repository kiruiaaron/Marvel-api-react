import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ComicCard from './comicCard';

const NewRelease = () => {
     
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/comics?limit=12&offset=4&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126")

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
    <section className='comicItem'>
        <h1>NEW RELEASE</h1>
        <div className="comicCarItem">
            {
                (!item)?<p>Not Found</p>:<ComicCard data={item}/> 
            }
            </div>
    </section>
  )
}

export default NewRelease