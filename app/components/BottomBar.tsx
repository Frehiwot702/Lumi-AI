import React from 'react'
import { CiHome } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";

const BottomBar = () => {

    const menus = [
        {
            id: 1,
            menu: 'Home',
            icon: CiHome,
            link: '/dashboard'
        },
        {
            id: 2,
            menu: 'Report',
            icon: HiOutlineDocumentReport,
            link: '/dashboard'
        },
        {
            id: 3,
            menu: 'Profile',
            icon: IoPersonOutline,
            link: '/profile'
        },
    ]
    
  return (
    <div className='bg-black p-5'>
        <ul className='flex justify-between text-md text-white/60'>
            {menus.map((m) => (
                <li key={m.id} className='items-center space-y-2'>
                    <m.icon className='text-xl mx-auto'/>
                    <h3>{m.menu}</h3>
                </li>
            ))}
          
        </ul>
    </div>
  )
}

export default BottomBar