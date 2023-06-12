import React from 'react'
import logo from '../images/logo.png'
import mainLogo from '../images/marvel (1).jpg'
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="main-logo">
            <img src={mainLogo} alt="" />
        </div>
        <div className="subscribe">
            <div className="unlimited">
                MARVEL UNLIMITED
            </div>
            <div className="sub">
                SUBSCRIBE
            </div>
        </div>
        <div className="search-icon">
           <MagnifyingGlassIcon/>
        </div>
    </div>
  )
}

export default Header