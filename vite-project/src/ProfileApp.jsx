import React from 'react'
import ProfileCard from './ProfileCard'
const ProfileApp = () => {
  return (
    <div className='flex flex-col gap-8 items-center justify-center  bg-pink-50'>
        <ProfileCard name ='Dahunsi Aminat' role='React Developer' image='https://i.pravatar.cc/150?img=8' bio='Loves pink, coding, and building magical UIs with Tailwind & React 💖'/>
        <ProfileCard name ='Dahunsi Aminat' role='React Developer' image='https://i.pravatar.cc/150?img=8' bio='Loves pink, coding, and building magical UIs with Tailwind & React 💖'/>
    </div>
  )
}

export default ProfileApp