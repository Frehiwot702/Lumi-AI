import Link from 'next/link'
import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <>
      <Nav/>
      <div className='space-y-10 px-10 py-16'>
        <h3 className='text-3xl font-bold '>Login</h3>

        <form className='text-start space-y-2'>
          <div>
            <h3> Email </h3>
            <input 
              type='email'
              name='email'
              placeholder='example@gmail.com'
              className='w-full bg-white/10 text-md px-3 rounded-lg py-3 my-2'
            />
          </div>
          <div>
            <h3> Password </h3>
            <input 
              type='password'
              name='password'
              placeholder='******'
              className='w-full bg-white/10 text-md px-3 rounded-lg py-3 my-2'
            />
          </div>
        
          <div className='py-5 flex space-x-3 items-center text-white/50 text-sm'>
            <input type='checkbox'/>
            <h3>Remember Me?</h3>
          </div>

          {/* <button
            type='submit'
            className='bg-[#CBD83B] w-1/2 py-2 rounded-lg font-bold'
          >
            Login
          </button> */}
          <Link
            href='/dashboard'
            className='bg-[#CBD83B] w-1/2 py-2 px-5 rounded-lg font-bold'
          >
            Login
          </Link>

          <h3 className=''>Dont have an account?  <span className='text-[#CBD83B]'>Register</span></h3>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default Login