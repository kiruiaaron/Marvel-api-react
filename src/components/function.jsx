 import axios from "axios"

const url = "http://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=6&offset=0&ts=1&apikey=08ca48ffdadf5e14b2dd94b32bd763c1&hash=083fa6e4b8e8eca46645ef9a5dcd8126"
 const Fetchdata=async()=>{
    const respond = await axios.get(url)
    console.log(respond.data.data)
 }

 export {Fetchdata}