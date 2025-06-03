import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import ProfileApp from './ProfileApp';
import DarkMode_LightMode from './DarkMode_LightMode';
import Accordion from './Accordion/Accordion';
import Post from './MiniBlog/Post';
import BlogList from './MiniBlog/BlogList';
import Apps from './Shopping cart ui/Apps';
import WeatherApp from './WeatherApp/WeatherApp';
import Feedback from './controllingformandfeedback.jsx/feedback';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/profileApp' element={<ProfileApp/>}/>
        <Route path='/mode' element={<DarkMode_LightMode/>}/>
        <Route path='/accordion' element={<Accordion/>}/>
        <Route path='/mini' element={<BlogList/>}/>
        <Route path='/post/:id' element={<Post/>}/>
        <Route path='/shoppingcart' element={<Apps/>}/>
        <Route path='/weather' element={<WeatherApp/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
      </Routes>
    </Router>
  )
}

export default App