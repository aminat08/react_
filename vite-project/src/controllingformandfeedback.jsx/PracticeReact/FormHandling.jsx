import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const FormHandling = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.password) formErrors.password = 'Password is required!';
    if (!formData.confirmPassword) formErrors.confirmPassword = 'Confirm your password!';
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      formErrors.confirmPassword = 'Passwords do not match!';
    }

    setError(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-pink-50 p-6">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-6">
          💖 Registration Form
        </h2>

        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full p-4 border rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-400 transition ${
              error.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full p-4 border rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-400 transition ${
              error.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className={`w-full p-4 border rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-400 transition ${
              error.password ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-pink-600 hover:text-pink-800 transition"
          >
            {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
          </span>
          {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className={`w-full p-4 border rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-400 transition ${
              error.confirmPassword ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-pink-600 hover:text-pink-800 transition"
          >
            {showConfirmPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
          </span>
          {error.confirmPassword && <p className="text-red-500 text-sm mt-1">{error.confirmPassword}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-xl font-extrabold text-lg shadow-md transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormHandling;
