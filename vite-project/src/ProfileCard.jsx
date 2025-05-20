import React from 'react'
const ProfileCard = ({name,role,image,bio}) => {
     console.log(name, role, image, bio)
  return (
    <div className='bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition duration-300'>
        <img src={image} alt={name}  className='w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-300'/>
        <h2  className='text-xl font-bold text-pink-600'>{name}</h2>
        <p className='text-sm text-gray-500'>{role}</p>
        <p className='mt-3 text-gray-700'>{bio}</p>
    </div>
  )
}

export default ProfileCard