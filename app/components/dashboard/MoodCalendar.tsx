'use client'
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { format } from 'date-fns'

interface MoodEntry {
  date: string // format: YYYY-MM-DD
  mood: string
}

// Example mood data
const moodEntries: MoodEntry[] = [
  { date: '2025-06-25', mood: '😊' },
  { date: '2025-06-24', mood: '😐' },
  { date: '2025-06-23', mood: '😞' },
  { date: '2025-06-10', mood: '😞' },
  { date: '2025-06-04', mood: '😐' },
]

const MoodCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const today = new Date()

  const getMoodForDate = (date: Date) => {
    const formatted = format(date, 'yyyy-MM-dd')
    return moodEntries.find(entry => entry.date === formatted)?.mood
  }

  return (
    <div className="w-full max-w-md mx-auto p-4 rounded-xl shadow">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        // This makes the calendar always display the month of "today"
        activeStartDate={new Date(today.getFullYear(), today.getMonth(), 1)}
        tileContent={({ date, view }) => {
          if (view === 'month') {
            const mood = getMoodForDate(date)
            return (
              <div className="text-xl mt-1">
                {mood ? mood : ''}
              </div>
            )
          }
        }}
        className="rounded-xl bg-transparent w-full" 
      />
    </div>
  )
}

export default MoodCalendar
