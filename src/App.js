import React from 'react'
import Header from './components/header'
import SecondHeader from './components/secondHeader'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Character from './components/character'
import Comics from './components/comics'
import Events from './components/events'
import Creators from './components/creators'
import Series from './components/series'
import Stories from './components/stories'
import Home from './homeSection/home'
import CharacterPage from './components/characterPage'
import ComicPage from './components/comicPage'
import SeriePage from './components/seriePage'
import CreatorPage from './components/creatorPage'
import StoryPage from './components/storyPage'
import EventPage from './components/eventPage'


const App = () => {
  return (
    <Router>
       <div className='headers'>
    <Header />
    <SecondHeader/>
    </div>
      <Routes>
        <Route path='/' >
          
        </Route>
      <Route index element={<Home/>}></Route>
      <Route path='home' element={<Home/>}></Route>
      <Route path='character' element={<Character/>}></Route>
      <Route path='comics' element={<Comics/>}></Route>
      <Route path='events' element={<Events/>}></Route>
      <Route path='creators' element={<Creators/>}></Route>
      <Route path='series' element={<Series/>}></Route>
      <Route path='stories' element={<Stories/>}></Route>
      <Route path="/item/:id" element={<CharacterPage/>} />
      <Route path="/comic/:id" element={<ComicPage/>} />
      <Route path="/serie/:id" element={<SeriePage/>} />
      <Route path="/creator/:id" element={<CreatorPage/>} />
      <Route path="/storie/:id" element={<StoryPage/>} />
      <Route path="/event/:id" element={<EventPage/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App