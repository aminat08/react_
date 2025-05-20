import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import ProfileCard from './ProfileCard';
import ProfileApp from './ProfileApp';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/profileApp' element={<ProfileApp/>}/>
      </Routes>
    </Router>
  )
}

export default App