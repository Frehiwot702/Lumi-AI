import React from 'react'
import MoodCalendar from './MoodCalendar'
import Link from 'next/link'

const MonthSummery = () => {

  return (
    <div className='px-5'>
        <div className='flex justify-between items-center'>
            <h3 className='text-xl font-bold'>June Report</h3>
            <Link
                href='/'
                className='text-[#CBD83B] text-sm underline'
            >
                View Report
            </Link>
        </div>
        <div>
            <div>
                <MoodCalendar />
            </div>
        </div>
    </div>
  )
}

export default MonthSummery