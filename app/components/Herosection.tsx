import React from 'react'
import {lora, dmSans, outfit} from '../layout'
import Link from 'next/link'

const Herosection = () => {
  return (
    <div className='h-screen'>
        <div className='relative z-20 text-white h-full flex flex-col justify-center space-y-5 m-auto px-10'>
            <h3 className={`${dmSans.className} text-5xl`}>Capture Your Life, <span className='text-[#CBD83B]'> One Day </span> at a Time</h3>
            <p>Lumi is your private visual journal — upload one photo a day, reflect on your moments, and watch your story unfold.</p>
            <Link
              href='/login'
                className='bg-[#CBD83B]/50 rounded-full py-3'
            >Start Your Daily Journey</Link>
        </div>
        
    </div>
  )
}

export default Herosection