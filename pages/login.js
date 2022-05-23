import React from 'react';
import Image from 'next/image';
import {
BsSpotify
} from 'react-icons/bs';

export default function login() {
  return (
    <div className='bg-slate-100 w-screen h-screen opacity-75 -z-1'>
    {/* Sign up Spotify */}
      <div className='flex justify-center items-center w-full h-full'>
        <button className='btn btn-circle w-28 flex justify-center items-center rounded-full bg-green-500 hover:bg-green-600'>
        <BsSpotify className='w-6 h-6 text-white mr-2'/><span className="text-white font-bold">Sign Up</span>
        </button>
      </div>
    </div>
  )
}
