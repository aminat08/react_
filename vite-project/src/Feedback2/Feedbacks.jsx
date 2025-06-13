import React, { useState } from 'react'
import Feedbackbutton from './Feedbackbutton'
import Feedbackstats from './Feedbackstats'

const Feedbacks = () => {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);
  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg'>
        <h1 className='text-2xl font-bold mb-4 text-center text-pink-50'></h1>
        <div className='flex justify-between gap-4'>
        <Feedbackbutton label ='Good' color='green' onClick={()=> setGood(good + 1)}  />
        <Feedbackbutton label='Bad' color='red' onClick={()=> setBad(bad + 1)}  />
        <Feedbackbutton label='Neutral' color='gray' onClick={()=> setNeutral(neutral + 1)} />
        </div>
        <Feedbackstats good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default Feedbacks