import React from 'react'

const Feedbackstats = ({good, bad , neutral}) => {
    const total = good + bad + neutral;
    const average = total === 0 ? 0 : ((good - bad)/total).toFixed(2);
    const positive = total === 0 ? 0 : ((good/total) * 100).toFixed(1)
  return (
    <div className='mt-6' >
        <h2 className='text-xl font-bold mb-2'>stats</h2>
        {total === 0 ? (<p>no feedback yet</p>) :(
            <ul>
                <li>Good:{good}</li>
                <li>Bad:{bad}</li>
                <li>Neutral:{neutral}l</li>
                <li>Total:{total}</li>
                <li>Average:{average}l</li>
                <li>Positive:{positive}l</li>
            </ul>
        )}
    </div>
  )
}

export default Feedbackstats