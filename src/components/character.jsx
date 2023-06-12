import React from 'react'
import Hero from './hero'
import FeaturedCharacter from './featuredCharacter'
import CharacterSpotlight from './characterSpotlight'
import MarvelCharacterList from './marvelCharacterList'


const Character = () => {
  return (
    <div>
    <Hero/>
    <FeaturedCharacter/>
    <CharacterSpotlight/>
    <MarvelCharacterList/>
    </div>
  )
}

export default Character