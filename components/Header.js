import React from 'react'
import Image from 'next/image'
import { BiHeart, BiSkipNext, BiSkipPrevious, BiPlay, BiShuffle, BiRepeat} from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";
import { FiRepeat } from "react-icons/fi";

function Header() {
  return (
    <main>
    <div className='absolute flex justify-center top-0 w-full h-full -z-1'>
    {/* Faded background album cover */}
      <Image src="/master_cover.jpg" alt="Album foreground" layout="raw" width="640" height="640"
      className='relative w-148 h-148 top-0 filters blur-xl' priority/>
    </div>
    <div className='bg-slate-100 absolute w-screen h-screen top-0 opacity-75 -z-1' />
    <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center items-center mt-16 gap-x-20 md:mx-24 lg:mr-48'>
      {/* Album cover */}
      <div className='rounded-3xl p-4 bg-slate-400/10'>
        <div className='relative'>
        {/* Like album */}
        <label class="swap swap-flip absolute top-5 right-5">
        <input type="checkbox" />
        <BiHeart className='h-8 w-8 swap-on text-gray-800'/>
        <span className='mask mask-heart h-8 w-8 swap-off bg-red-500'/>
        </label>
        <Image src="/master_cover.jpg" alt="Album" layout="raw" width="480" height="480"
        className='rounded-3xl shadow-lg object-cover' priority/>
        {/* Media */}
        <div className='md:flex justify-between items-center my-6 mt-10 mx-10 hidden'>
          <button className='btn btn-circle bg-transparent hover:bg-transparent text-gray-800 hover:text-slate-400'><BiShuffle className='h-6 w-6' /></button>
          <button className='btn btn-circle bg-transparent hover:bg-transparent text-gray-800 hover:text-slate-400'><BiSkipPrevious className='h-10 w-10' /></button>
          <button className='border-2 border-solid border-gray-800 hover:border-slate-400 rounded-full w-16 h-16 flex justify-center items-center bg-transparent hover:bg-transparent text-gray-800 hover:text-slate-400'><BiPlay className='h-10 w-10' /></button>
          <button className='btn btn-circle bg-transparent hover:bg-transparent text-gray-800 hover:text-slate-400'><BiSkipNext className='h-10 w-10' /></button>
          <button className='btn btn-circle bg-transparent hover:bg-transparent text-gray-800 hover:text-slate-400'><FiRepeat className='h-6 w-6' /></button>
        </div>
        </div>
      </div>
      {/* Album description */}
      <div className='grid grid-rows-6 space-y-0 w-full justify-items-center md:justify-items-start'>
        <div className='flex justify-between w-full px-10 md:px-0'>
        <h2 className='text-4xl font-bold row-span-1 mt-12 md:mt-0'>Mountain</h2>
        <span className='text-4xl font-bold mt-12 md:mt-0 flex-nowrap flex'>4.5<span className='text-xl'>/5</span></span>
        </div>
        <h3 className='text-md font-semibold row-span-1 flex items-center'>Jason Marz &#8226; 2018 &#8226; 10 Songs</h3>
        <div className='flex w-full justify-between row-span-1 items-center p-4 px-4 bg-gray-800 rounded-xl'>
          <BiPlay className='text-3xl text-white' />
          <span className='text-lg font-medium text-white'>Climbing mount everest.</span>
          <span className='text-xl font-medium text-white'>4:23</span>
        </div>
        <div className='flex w-full justify-between row-span-1 items-center p-4 px-4 list-play'>
          <span className='text-xl font-medium'>2</span>
          <span className='text-lg font-medium'>I lost my journey</span>
          <span className='text-xl font-medium'>2:10</span>
        </div>
      </div>
    </div>
    </main>
  )
}

export default Header