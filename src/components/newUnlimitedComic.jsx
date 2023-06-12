import React, { useEffect, useState } from 'react'
import unlimited from '../images/marvel-unlimited.png'
import SellingComicCard from './sellingComicsCard';
import axios from 'axios';

const NewUnlimitedComic = () => {
             
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/comics?limit=30&offset=30&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126")

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
   <section className='newUnlimited'>
    <div className="unlimitedCard">
      <div className="unlimitedComic">
        <img src= {unlimited} alt="" />
        <h1>MARVEL UNLIMITED</h1>
        <p>Want to read all these digital comics? Get Instant <br />
        access to all these and more!</p>
        <button>
            JOIN NOW
        </button>
      </div>
      </div>
      <div className="sellingItem">
            {
                (!item)?<p>Not Found</p>:<SellingComicCard data={item}/> 
            }
            </div>
   </section>
  )
}

export default NewUnlimitedComic