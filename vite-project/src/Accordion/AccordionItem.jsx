import React, { useState } from 'react'

const AccordionItem = ({title , content}) => {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(!isOpen);
  return (
    <div className="border rounded-md mb-2">
        <button className="w-full text-left px-4 py-2 bg-pink-200 font-semibold" onClick={open}>{title}</button>
          {/* Conditional UI: show content only if isOpen is true */}
        {isOpen && 
           <div className="px-4 py-2 bg-pink-50 text-gray-700">{content}</div>
        }
    </div>
  )
}

export default AccordionItem