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
import ProductFilter from './controllingformandfeedback.jsx/ProductFilter';
import BuildShoppingCart from './controllingformandfeedback.jsx/BuildShoppingCart';
import FormHandling from './controllingformandfeedback.jsx/PracticeReact/FormHandling';
import Shoppingcart from './controllingformandfeedback.jsx/PracticeReact/Shoppingcart';
import Feedbacks from './Feedback2/Feedbacks';
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
        <Route path='/productfilter' element={<ProductFilter/>}/>
        <Route path='/shoppingcartss' element={<BuildShoppingCart/>}/>
        <Route path='/formhandling' element={<FormHandling/>}/>
        <Route path='/shoppingcar~' element={<Shoppingcart/>}/>
        <Route path='/feedbacksss' element={<Feedbacks/>} />
      </Routes>
    </Router>
  )
}

export default App