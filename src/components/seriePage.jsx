import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SerieCardPage from './serieCardPage';

function SeriePage() {
  const { id } = useParams();

  const [url,setUrl]=useState(`http://gateway.marvel.com/v1/public/series/${id}?&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126`)

  const [item, setItem]= useState();
 
 useEffect(()=>{
     const fetch= async()=>{
       const res = await  axios.get(url)
       console.log(res.data.data.results)
       setItem(res.data.data.results)
     }
     fetch()
 },[id])

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className=''>
  
          {
            (!item)?<p>Not Found</p>:<SerieCardPage data={item}/> 
        }
      
    </div>
  );
}

export default  SeriePage;