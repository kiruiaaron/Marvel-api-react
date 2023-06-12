import React from 'react'
import insider from '../images/marvel-insider.jpg'
import logo2 from '../images/logo2.png'
import unlimited from '../images/marvel-unlimited.png'

const Footer = () => {
  return (
    <section className='footer-section'>
        <div className="footer">

       
        <div className="insider">
            <img src={insider} alt="" />
        </div>
        <div className="watch-earn">
            <h3>MARVEL INSIDER</h3>
            <h2>Watch, Earn, Redeem</h2>
            <p>Get rewarded for doing what you already do as a fan</p>
            <button>JOIN NOW</button>
        </div>
        <div className="M">
            <img src={logo2} alt="" />
        </div>
        <div className="dec">
           <h2> <a href="/">ABOUT MARVEL</a></h2>
           <h2> <a href="/">HELP/FAGS</a></h2>
           <h2> <a href="/">CAREERS</a></h2>
           <h2> <a href="/">INTERNSHIPS</a></h2>
        </div>
        <div className="dec2">
           <h2> <a href="/">ADVERTISING</a></h2>
           <h2> <a href="/">DISNEY+</a></h2>
           <h2> <a href="/">MARVELHQ.COM</a></h2>
           <h2> <a href="/">REDEEM DIGITAL COMICS</a></h2>
        </div>
        <div className="marvel-insider">
            <div className='row'>
                <div className='img-insider'>
                <img src={insider} alt="" />
                </div>
                <div>
                <h2>MARVEL INSIDER</h2>
                <p>Get Rewarded for Being a Marvel Fan</p>
            </div>
            </div>
            <div className='row'>
                <div className='unlimited'>
                <img src={unlimited} alt="" />
                </div>
                <div>
                <h2>MARVEL UNLIMITED</h2>
                <p>Access Over 30,000+ Digital Comics</p>
            </div>
            </div>
        </div>
        <div className="social">
            <div>
                <h2>FOLLOW MARVEL</h2>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
        </div>
       <ul>
        <li>Terms of Use</li>
        <li> Privacy Policy</li>
        <li>Interest-Based Ads</li>
        <li>License Agreement</li>
        <li>©2023 MARVEL</li>
       </ul>
    </section>
  )
}

export default Footer