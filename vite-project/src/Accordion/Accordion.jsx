import React from "react";
import AccordionItem from "./AccordionItem";
const Accordion = () => {
    const data = [
        { title: 'What is React?', content: 'React is a JavaScript library for building user interfaces.' },
        { title: 'What is a component?', content: 'Components let you split the UI into independent, reusable pieces.' },
        { title: 'What is state?', content: 'State is a built-in React object used to contain data or information about the component.' }
    ];

  return (
    <div className="max-w-md mx-auto mt-8">
       {data.map((d,index)=><AccordionItem key={index} title={d.title} content={d.content}  />)}
    </div>
  );
};

export default Accordion;