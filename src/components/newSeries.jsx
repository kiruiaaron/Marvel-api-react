import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SerieCard from './serieCard';


const NewSeries = () => {
    
    const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/series?limit=8&offset=80&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126")

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
    <section className='series'>
<h1>
    NEW RELEASE
</h1>
<div className="serie-card">
            {
                (!item)?<p>Not Found</p>:<SerieCard data={item}/> 
            }
            </div>
</section>
  )
}

export default NewSeries