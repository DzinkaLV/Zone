import React from 'react'
import {
BsSpotify,
BsFillLayersFill
} from 'react-icons/bs';
import {
BiSearchAlt
} from 'react-icons/bi';

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
            <button type="submit" className="btn btn-circle hover:bg-slate-400/75 md:bg-transparent bg-slate-400/50 p-2 focus:outline-none focus:shadow-outline">
              <BiSearchAlt className='w-6 h-6 text-white md:text-slate-400'/>
            </button>
          </span>
          <input type="search" name="q" className="hidden md:flex w-96 h-12 text-sm text-slate-400 font-medium rounded-full bg-slate-400/10 placeholder-slate-400 pl-16 focus:outline-none" placeholder="Search for song, artists etc..." autoComplete="off" />
        </div>
      </div>
      {/* Sign up Spotify */}
      <div className='flex justify-end w-full'>
        <button className='btn btn-circle w-12 md:w-28 flex justify-center items-center rounded-full bg-green-500 hover:bg-green-600'>
        <BsSpotify className='w-6 h-6 text-white mr-0 md:mr-2'/><span className="text-white font-bold hidden md:block">Sign Up</span>
        </button>
      </div>
    </nav>
  )
}

export default Navigation