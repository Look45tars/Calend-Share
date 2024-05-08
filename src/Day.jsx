import { useState } from 'react'

function Day({day, today, selectedDay, onClick}) { 
  if (day == today)
    return <div className='w-16 h-16 bg-red-400 grid place-items-center'>{day}</div>
  else if (day == selectedDay)
    return <div className='w-16 h-16 bg-red-300 grid place-items-center text-center' onClick={onClick}>{day}</div>
  else
    return <div className='w-16 h-16 bg-red-200 grid place-items-center text-center' onClick={onClick}>{day}</div>
}

export default Day