import React from 'react'
import insider from '../images/marvel-insider.jpg'


const Hero = () => {

  return (
   <section className='heroCharacter'>
    <div className="p">
     <p>REWARD YOUR MARVEL FANDOM WITH <img src={insider} alt="" /> </p>
    </div>
    <div className="p-center">
      <h1>MARVEL CHARACTERS</h1>
      <p>Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!</p>
    </div>
   </section>
  )
}

export default Hero