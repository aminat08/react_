import React, { useState } from 'react'

const DarkMode_LightMode = () => {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
        <div className={`h-screen flex flex-col space-y-20 items-center justify-center ${darkMode? 'bg-black text-white' : 'bg-white text-black' }`}>
            <h1 className='text-[100px]'>{darkMode? 'Dark mode' : 'Light Mode'}</h1>
            <button  onClick={() =>setDarkMode(!darkMode)}  className={`px-4 py-3 rounded-md bg-gray-700 shadow-md ${darkMode? 'bg-black text-white' : 'bg-white text-black'}`}>Toggle Mode</button>
        </div>
    </div>
  )
}

export default DarkMode_LightMode