import React, { useEffect, useState } from 'react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [feedBack, setFeedBack] = useState(()=>{
    const savedFeedbacks = JSON.parse(localStorage.getItem('f'));
    return savedFeedbacks ? savedFeedbacks :[]
  });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.feedback) {
      setMessage('please fill out all fields');
      return;
    }
    setFeedBack([...feedBack, formData]);
    setMessage('Thank you for the feedback!');
    setFormData({ name: '', email: '', feedback: '' });
    //u can also use else{} but i think writing it this way is cooler purrr💅
  };

  // Write to localStorage whenever feedBack changes
  useEffect(() => {
    localStorage.setItem('f', JSON.stringify(feedBack));
  }, [feedBack]);

 

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <h2 className="text-3xl font-bold text-pink-600 text-center">✍️ Feedback App</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            value={formData.name}
            placeholder="Your Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-pink-50 border border-pink-200 rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          {/* Email Input */}
          <input
            type="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-pink-50 border border-pink-200 rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          {/* Feedback Textarea */}
          <textarea
            name="feedback"
            id="feedback"
            value={formData.feedback}
            placeholder="Your Feedback"
            onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
            className="w-full bg-pink-50 border border-pink-200 rounded-xl py-3 px-5 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Submit
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="text-center text-amber-500 font-bold text-xl">{message}</p>
        )}

        {/* Feedback List */}
        {feedBack.length === 0 ? (
          <p className="text-center text-gray-400 italic">no feedback found</p>
        ) : (
          <ul className="space-y-4">
            {feedBack.map((f, index) => (
              <li
                key={index}
                className="bg-pink-50 border border-pink-200 rounded-2xl p-4 shadow-sm space-y-2"
              >
                <p className="text-pink-700 font-medium">
                  {f.name}{' '}
                  <span className="text-gray-500 italic">with</span>{' '}
                  <span className="text-pink-500">{f.email}</span>{' '}
                  <span className="text-gray-500 italic">says:</span>
                </p>
                <p className="text-gray-800">{f.feedback}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Feedback;
