import React from 'react'

const Feedbackbutton = ({color , label , onClick}) => {
  return (
    <div> 
        <button className="text-white px-4 py-2 rounded-md "  onClick={onClick} style={{backgroundColor:color}}>{label}</button>
    </div>
  )
}

export default Feedbackbutton