import React from 'react'

const Topbar = () => {
  return (
    <div className='px-5 py-4 flex justify-between items-center bg-black'>
        <h3 className={`text-2xl font-bold text-[#CBD83B] uppercase`}>Lumi</h3>
        <div>
            <img 
                className='w-[3em] h-[3em] object-cover object-top rounded-full border-2 border-[#CBD83B]'
                src='/profile2.jpg' alt='profile'/>
        </div>
    </div>
  )
}

export default Topbar