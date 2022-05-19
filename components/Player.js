import React from 'react'
import { BiSkipNext, BiSkipPrevious, BiPlay, BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { BsSoundwave, BsList } from 'react-icons/bs';

function Player() {
  return (
    <div className='fixed grid grid-flow-row-dense grid-cols-12 justify-between items-center inset-x-0 bottom-0 mx-auto'>
      {/* PC */}
      <div className='lg:flex items-center hidden lg:col-span-2 bg-slate-100 rounded-tr-2xl p-4 mr-20 h-20'>
        <BsSoundwave className='w-8 h-8'/>
        <div className='grid justify-center w-full row-span-2'>
        <span className='text-sm text-black font-medium'>Curently playing..</span>
        <span className='text-sm text-black font-semibold'>Mountain</span>
        </div>
      </div>
      {/* Mobile and Tablet */}
      <div className='flex items-center space-x-8 col-start-1 lg:col-start-3 col-span-full rounded-tl-2xl bg-slate-100 p-4 h-20'>
        <div className='md:hidden flex'>
        <button className='px-1 bg-transparent border-0 text-black hover:text-white'><BiSkipPrevious className='w-10 h-10' /></button>
        <button className='px-1 bg-transparent border-0 text-black hover:text-white'><BiPlay className='w-10 h-10' /></button>
        <button className='px-1 bg-transparent border-0 text-black hover:text-white'><BiSkipNext className='w-10 h-10' /></button>
        </div>
        <span className='text-md text-black font-semibold'>01:46</span>
        <input type="range" name="quantity" min="1" max="100" className='slider w-full'/>
        <span className='text-md text-black font-semibold'>04:22</span>
        <BsList className='w-8 h-8' />
        {/* Volume */}
        <label class="swap">
        <input type="checkbox" />
        <BiVolumeFull className='w-6 h-6 swap-on' />
        <BiVolumeMute className='w-6 h-6 swap-off' />
        </label>
        <input type="range" name="quantity" min="1" max="100" className='slider w-1/12'/>
      </div>
    </div>
  )
}

export default Player