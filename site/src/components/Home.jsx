import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
// import Navbar from './Navbar'

const Home = () => {
  return (
   
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'> Hi, I am</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Nico Pinguel</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div>
                <button>View Work<HiArrowNarrowRight/></button>
            </div>
        </div>

    </div>
  )
}

export default Home
