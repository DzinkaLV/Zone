import React from 'react'
import { BiSkipNext, BiSkipPrevious, BiPlay, BiShuffle, BiRepeat, BiVolumeFull, BiVolumeLow, BiVolumeMute, BiVolume } from "react-icons/bi";

function Player() {
  return (
    <div className='fixed flex md:hidden justify-between items-center rounded-t-2xl inset-x-0 p-4 bottom-0 mx-auto bg-slate-100'>
        <div className='flex items-center space-x-2'>
        <button className='btn px-1 bg-transparent border-0 text-black hover:text-white'><BiSkipPrevious className='w-10 h-10' /></button>
        <button className='btn px-1 bg-transparent border-0 text-black hover:text-white'><BiPlay className='w-10 h-10' /></button>
        <button className='btn px-1 bg-transparent border-0 text-black hover:text-white'><BiSkipNext className='w-10 h-10' /></button>
        </div>
        <input type="range" min="0" max="100" value="40" className="range range-neutral range-sm w-2/4" />
        <div className='flex space-x-2'>
          {/* Volume */}
        <label class="swap">
        <input type="checkbox" />
        {/* Volume On */}
        <BiVolume className='w-8 h-8 swap-on fill-current' />
        {/* Volume Off */}
        <BiVolumeMute className='w-8 h-8 swap-off fill-current' />
        </label>
        </div>
    </div>
  )
}

export default Player