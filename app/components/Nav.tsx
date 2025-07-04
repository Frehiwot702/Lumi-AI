import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='bg-black flex justify-between items-center px-16 py-5 text-white font-bold rounded-b-full z-10 relative'>
        <Link href='/'>Home</Link>
        <h3 className={`text-3xl font-bold text-[#CBD83B] uppercase`}>Lumi</h3>
        <Link href='/login'>Sign In</Link>
    </div>
  )
}

export default Nav