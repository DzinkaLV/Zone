import React from 'react'
import Image from 'next/image'
import { BiHeart, BiSkipNext, BiSkipPrevious, BiPlay, BiShuffle, BiRepeat } from "react-icons/bi";
import { StarIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <main>
    <div className='absolute w-full top-0'>
    <img src="/master_cover.jpg" alt="Album cover"
      className='relative -z-10 object-fill object-top w-screen h-200 filters blur-3xl'/>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center items-center mt-20 mx-8'>
      {/* Album cover */}
      <div className='rounded-3xl p-4 bg-transparent/5'>
        <div className='relative'>
        <button className='absolute right-4 top-4 hover:text-red-500 transform duration-150 hover:scale-110'><BiHeart className='h-7 w-7'/></button>
        <Image src="/master_cover.jpg" alt="Album cover" layout="raw" width="480" height="480"
        className='rounded-3xl' priority/>
        {/* Media */}
        <div className='md:flex space-x-8 justify-center items-center my-6 hidden'>
          <span className='media-anim hover:text-white'><BiShuffle className='h-6 w-6' /></span>
          <span className='media-anim hover:text-white'><BiSkipPrevious className='h-10 w-10' /></span>
          <span className='media-anim hover:text-white w-12 h-12 border-2 rounded-full border-black hover:border-white grid justify-center items-center'><BiPlay className='h-8 w-8' /></span>
          <span className='media-anim hover:text-white'><BiSkipNext className='h-10 w-10' /></span>
          <span className='media-anim hover:text-white'><BiRepeat className='h-6 w-6' /></span>
        </div>
        </div>
      </div>
      {/* Album description */}
      <div className='grid grid-rows-6 space-y-6 w-11/12 md:2/4 justify-items-center md:justify-items-start'>
        <div className='flex justify-between w-full'>
        <h2 className='text-4xl font-bold row-span-1 mt-12 md:mt-0'>Mountain</h2>
        <span className='text-4xl font-bold mt-12 md:mt-0 flex-nowrap flex'>4.5<span className='text-xl'>/5</span><StarIcon className='w-6 h-6'/></span>
        </div>
        <h3 className='text-md font-semibold row-span-1 flex items-center'>Jason Marz &#8226; 2018 &#8226; 10 Songs</h3>
        <div className='flex w-full justify-between row-span-1 items-center p-4 px-10 media-select'>
          <BiPlay className='text-3xl' />
          <span className='text-md'>Climbing mount everest.</span>
          <span className='text-lg'>4.23</span>
        </div>
        <div className='flex w-full justify-between row-span-1 items-center p-4 px-10 media-hover'>
          <span className='text-xl'>2</span>
          <span className='text-md'>I lost my journey</span>
          <span className='text-lg'>2.10</span>
        </div>
        <div className='flex w-full justify-between row-span-1 items-center p-4 px-10'>
        <input type="range" min="0" max="100" value="40" className="range z-10 range-xs w-11/12" />
        </div>
      </div>
    </div>
    </main>
  )
}

export default Header