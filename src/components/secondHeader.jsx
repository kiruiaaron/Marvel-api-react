import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BarsArrowDownIcon} from '@heroicons/react/24/solid'
import {XMarkIcon} from '@heroicons/react/24/solid'

const SecondHeader = () => {

  const [isMobile, setIsMobile]=useState(false);
  
  return (
    <div className='secondheader'>
       <ul>
       <li> <Link to="/" className='link'>HOME</Link> </li>
        <li> <Link to="/comics" className='link'>COMICS</Link> </li>
        <li><Link to="/series" className='link'>SERIES</Link></li>
        <li><Link to="/creators" className='link'>CREATORS</Link></li>
        <li><Link to="/character" className='link'>CHARACTERS</Link></li>
        <li><Link to="/stories" className='link'>STORIES</Link></li>
        <li><Link to="/events" className='link'>EVENTS</Link></li>
       </ul>
       <button>

      { isMobile ? <BarsArrowDownIcon className='toggleArrow'/> :<XMarkIcon className='toggleArrow'/>
}
       </button>
    </div>
  )
}

export default SecondHeader