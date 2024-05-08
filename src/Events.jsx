import { useState } from 'react'
import Event from './Event'


function Events() { 

  return (
    <div className="size-full bg-red-100 p-2">
      <p className="text-xl font-medium">Upcoming Events</p>
      <div className='grid grid-auto-row gap-2 pt-2'>
        <Event title="Event 1" date="2021-10-01" />
        <Event title="Event 2" date="2021-10-02" />
        <Event title="Event 3" date="2021-10-03" />
        <Event title="Event 4" date="2021-10-04" />
        <Event title="Event 5" date="2021-10-05" />
      </div>
    </div>
  )
}

export default Events