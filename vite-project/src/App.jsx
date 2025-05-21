import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import ProfileApp from './ProfileApp';
import DarkMode_LightMode from './DarkMode_LightMode';
import Accordion from './Accordion/Accordion';
import Post from './MiniBlog/Post';
import BlogList from './MiniBlog/BlogList';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/profileApp' element={<ProfileApp/>}/>
        <Route path='/mode' element={<DarkMode_LightMode/>}/>
        <Route path='/accordion' element={<Accordion/>}/>
        <Route path='/mini' element={<BlogList/>}/>
        <Route path='/post/:id' element={<Post/>}/>
      </Routes>
    </Router>
  )
}

export default App