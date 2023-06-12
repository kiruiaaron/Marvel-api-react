import React, { useEffect, useState } from 'react'
import SeriesFeaturedCard from './seriesFeaturedCard';
import axios from 'axios';

const FeaturedSeries = () => {
           
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/series?limit=50&offset=50&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126")

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
     <section className='selling'>
        <h1>
        BEST FEATURED DIGITAL SERIES
        </h1>
        <div className="sellingItem">
            {
                (!item)?<p>Not Found</p>:<SeriesFeaturedCard data={item}/> 
            }
            </div>
       
    </section>
  )
}

export default FeaturedSeries