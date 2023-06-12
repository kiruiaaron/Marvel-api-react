
import React from 'react'
import ComicHero from './comicHero';
import NewRelease from './newRelease';
import SellingComics from './sellingComics';
import NewUnlimitedComic from './newUnlimitedComic';

const Comics = () => {

  return (
    <div >
      <ComicHero/>
     <NewRelease/>
     <SellingComics/>
     <NewUnlimitedComic/>
    </div>
  )
}

export default Comics