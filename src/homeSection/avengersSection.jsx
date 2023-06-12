import axios from "axios";
import React, { useEffect, useState } from "react"
import "react-multi-carousel/lib/styles.css";
import AvengerCard from "./avengerCard";

const AvengersSection = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/series?limit=36&offset=0&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126")

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
    <div className="avengers">
      <div responsive={responsive}>
      {
      (!item)?<p>Not Found</p>:<AvengerCard data={item}/> 
     }
    </div>
    </div>
  );
};

export default AvengersSection;
