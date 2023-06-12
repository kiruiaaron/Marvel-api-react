import React from 'react'
import unlimited from '.././images/marvel-unlimited.png'

const AdvertSection = () => {
  return (
   <section className='advert'>
       <div className="adt">
           <img src={unlimited} alt="" />
           <h3>
            AVAILABLE NOW
           </h3>
           <h1>
            NEW ON MARVEL UNLIMITED 
           </h1>
           <p>
            Read these plus 30,000+ digital for $9.99 a month
           </p>
           <button>
            GET MARVEL UNLIMITED
           </button>
       </div>
   </section>
  )
}

export default AdvertSection 