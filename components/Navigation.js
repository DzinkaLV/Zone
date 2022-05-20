import React from 'react'
import {
BsSpotify,
BsFillLayersFill,
BsHeadphones,
BsPlus
} from 'react-icons/bs';
import {
BiSearchAlt
} from 'react-icons/bi';
import {
CgCrown
} from 'react-icons/cg';
import {
HiOutlineBell
} from 'react-icons/hi';

function Navigation() {
  return (
    <nav className="flex items-center w-full h-20 px-8">
      {/* Logo  */}
      <div className='btn btn-circle no-animation relative flex shrink-0 justify-center items-center bg-gray-800 outline outline-0 outline-offset-2 hover:outline-2 outline-gray-800 rounded-full'>
      <BsFillLayersFill className='w-6 h-6 absolute text-white' />
      </div>
      {/* Search */}
      <div className="flex items-center justify-center ml-4 md:ml-20">
        <div className="flex relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="btn btn-circle no-animation hover:bg-slate-400/75 md:bg-transparent bg-slate-400/50 p-2 focus:outline-none focus:shadow-outline">
              <BiSearchAlt className='w-6 h-6 text-white md:text-slate-400'/>
            </button>
          </span>
          <input type="search" name="q" className="hidden md:flex w-96 h-12 text-sm text-slate-400 font-medium rounded-full bg-slate-400/10 placeholder-slate-400 pl-16 focus:outline-none" placeholder="Search for song, artists etc..." autoComplete="off" />
        </div>
      </div>
      {/* Sign up Spotify */}
      <div className='flex justify-end w-full hidden'>
        <button className='btn btn-circle w-12 md:w-28 flex justify-center items-center rounded-full bg-green-500 hover:bg-green-600'>
        <BsSpotify className='w-6 h-6 text-white mr-0 md:mr-2'/><span className="text-white font-bold hidden md:block">Sign Up</span>
        </button>
      </div>
      {/* --- Logged in user --- */}
      <div className='flex justify-end items-center w-full space-x-8'>
      <HiOutlineBell className='w-6 h-6 text-gray-800' />
      {/* Leader - DJ */}
      <div class="avatar indicator dropdown flex justify-center">
        <span class="indicator-item indicator-bottom indicator-center badge"><CgCrown className='w-5 h-5 text-yellow-500'/></span> 
        <div tabIndex="0" class="w-14 rounded-full border-2 border-slate-300 hover:border-slate-400 cursor-pointer">
          <img src="https://api.lorem.space/image/face?hash=92310" />
        </div>
        {/* User Settings */}
        <ul tabindex="0" class="dropdown-content bg-gray-700 menu p-2 shadow rounded-box w-30 text-white -bottom-28">
        <li className='text-sm'><a href="#" className='hover:bg-gray-600'>Settings</a></li>
        <li className='text-sm'><a href="#" className='hover:bg-gray-600'>Invite</a></li>
        </ul>
      </div>
      {/* Lisseners */}
      <div class="avatar indicator">
        <span class="indicator-item indicator-bottom indicator-center badge"><BsHeadphones className='w-4 h-4 text-white'/></span> 
        <div class="w-14 rounded-full border-2 border-slate-300">
          <img src="https://api.lorem.space/image/face?hash=64318" />
        </div>
      </div>
      {/* Invite New People */}
      <label for="my-modal-6" className='modal-button cursor-pointer flex justify-center items-center w-14 h-14 border-slate-400 hover:border-slate-500 border-2 border-dotted rounded-full'><BsPlus className='w-8 h-8 text-slate-400' /></label>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="flex justify-center font-bold text-lg">You're special invite link</h3>
            <p class="py-4">Share this to invite new people.</p>
            <p class="flex justify-between px-4 items-center w-full pattern-dots pattern-gray-900 pattern-bg-gray-800 pattern-opacity-100 pattern-size-2 rounded-xl outline outline-offset-4 outline-slate-500/25 text-white py-2">http://localhost:3000/<label for="my-modal-6" class="btn flex justify-end text-md">📋Copy</label></p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation