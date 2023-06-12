import React, { useEffect, useState } from 'react'
import unlimited from '../images/marvel-unlimited.png'
import SellingComicCard from './sellingComicsCard';
import axios from 'axios';
import EventUnlimitedCard from './eventUnlimitedCard';

const EventUnlimited = () => {
             
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/events?limit=50&offset=30&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126")

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
        <p>WANT TO STAY UPDATED FOR OUR NEW EVENTS LIKE THE ONE BELOW!!! <br />WAIT NO MORE! HIT THE BUTTON BELOW</p>
        <button>
            SUBSCRIBE
        </button>
      </div>
      </div>
      <div className="sellingItem">
            {
                (!item)?<p>Not Found</p>:<EventUnlimitedCard data={item}/> 
            }
            </div>
   </section>
  )
}

export default EventUnlimited