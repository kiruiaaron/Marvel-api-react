import React, { useEffect, useState } from 'react'
//import { Fetchdata } from './function';
import Card from './card';
import axios from 'axios';

const FeaturedCharacter = () => {

 
    const [star,setStar]=useState("http://gateway.marvel.com/v1/public/characters/1010733?&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126")

    const [item1, setItem1]= useState();
   
   useEffect(()=>{
       const fetch= async()=>{
         const res = await  axios.get(star)
         console.log(res.data.data.results)
         setItem1(res.data.data.results)
       }
       fetch()
   },[star])
  
   const [gamora,setGamora]=useState("http://gateway.marvel.com/v1/public/characters?name=GAMORA&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126")
  
    const [item2, setItem2]= useState();
   
   useEffect(()=>{
       const fetch= async()=>{
         const res = await  axios.get(gamora)
         console.log(res.data.data.results)
         setItem2(res.data.data.results)
       }
       fetch()
   },[gamora])


   const [rocket,setRocket]=useState("http://gateway.marvel.com/v1/public/characters?nameStartsWith=rocket&limit=1&offset=0&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126")
  
    const [item3, setItem3]= useState();
   
   useEffect(()=>{
       const fetch= async()=>{
         const res = await  axios.get(rocket)
         console.log(res.data.data.results)
         setItem3(res.data.data.results)
       }
       fetch()
   },[rocket])


   const [groot,setGroot]=useState("http://gateway.marvel.com/v1/public/characters?name=groot&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126")
  
    const [item4, setItem4]= useState();
   
   useEffect(()=>{
       const fetch= async()=>{
         const res = await  axios.get(groot)
         console.log(res.data.data.results)
         setItem4(res.data.data.results)
       }
       fetch()
   },[groot])

   const [nick,setNick]=useState("http://gateway.marvel.com/v1/public/characters?nameStartsWith=nick&limit=1&offset=0&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126")
  
    const [item5, setItem5]= useState();
   
   useEffect(()=>{
       const fetch= async()=>{
         const res = await  axios.get(nick)
         console.log(res.data.data.results)
         setItem5(res.data.data.results)
       }
       fetch()
   },[nick])

   const [talos,setTalos]=useState("http://gateway.marvel.com/v1/public/characters?name=talos&limit=1&offset=0&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126")
  
    const [item6, setItem6]= useState();
    useEffect(()=>{
        const fetch= async()=>{
          const res = await  axios.get(talos)
          console.log(res.data.data.results)
          setItem6(res.data.data.results)
        }
        fetch()
    },[talos])

  return (
   <section className="featured">
    <h1>FEATURED CHARACTERS</h1>
    <div className="LINE">
        <div className="card-item">
            {
                (!item1)?<p>Not Found</p>:<Card data={item1}/> 
            }
             {
                (!item2)?<p>Not Found</p>:<Card data={item2}/> 
            }
             {
                (!item3)?<p>Not Found</p>:<Card data={item3}/> 
            }
             {
                (!item4)?<p>Not Found</p>:<Card data={item4}/> 
            }
             {
                (!item5)?<p>Not Found</p>:<Card data={item5}/> 
            }
             {
                (!item6)?<p>Not Found</p>:<Card data={item6}/> 
            }
        </div>
    </div>
   </section>
  )
}

export default FeaturedCharacter