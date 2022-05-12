import React from 'react'
import { CogIcon, BellIcon, PlusIcon, LightningBoltIcon } from '@heroicons/react/outline'

function Navigation() {
  return (
    <nav className="flex justify-between items-center m-8">
      <a href='#' className='text-3xl text-white font-light flex items-center'><LightningBoltIcon className='text-black w-8 h-8 mr-2' />Zone</a>
      {/* Profile settings */}
      <div className='flex space-x-8 items-center'>
      <button className='bg-white z-10 rounded-lg text-black hover:bg-white border-0 font-bold btn'>Invite</button>
      <a href='#' className='text-slate-600 hover:text-black z-10 transform hover:scale-105 hidden md:block'><CogIcon  className='h-6 w-6'/></a>
      <span class="md:flex relative hidden">
        <a href='#' className=''><BellIcon  className='h-6 w-6'/></a>
        <span class="animate-ping absolute right-0 inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
        <span class="absolute inline-flex right-0 rounded-full h-2 w-2 bg-red-400"></span>
      </span>
      <a href='#' className='w-12 h-12 border-slate-600 grid justify-center items-center border-dashed border-2 rounded-full'><PlusIcon  className='h-5 w-5'/></a>
      </div>
    </nav>
  )
}

export default Navigation