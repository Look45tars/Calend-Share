import { useState, useMemo, useContext } from 'react'
import Event from './Event'
import DateContext from './DateContext'
const { DateTime } = require("luxon");

//Creates and sets the events
function Events() { 
  const [events, setEvents] = useState([
    { title: 'Event 1', date: '2024-05-08', data: 'Event 1 data' },
    { title: 'Event 2', date: '2024-05-09', data: 'Event 2 data' },
    { title: 'Event 3', date: '2024-05-10', data: 'Event 3 data' },
    { title: 'Event 4', date: '2024-05-11', data: 'Event 4 data' },
    { title: 'Event 5', date: '2024-05-12', data: 'Event 5 data' },
  ])

  const dateContext = useContext(DateContext)

  function dateGEQ(date1, date2) {
    // DO SOME DATE COMPARISON MUMBO JUMBO
    // THIS IS STUPID AND SHOULD BE REPLACED WITH A LIBRARY (TRUEEE)

    return true
  }

  //Filters upcoming events
  const visibleEvents = useMemo(() => {
    return events.filter(event => dateGEQ(new Date(event.date), dateContext.date))
  }, [events, dateContext.date])

  return (
    //Displays Events
    <div className="size-full bg-red-100 p-2">
      <p className="text-xl font-medium">Upcoming Events</p>
      <div className='grid grid-auto-row gap-2 pt-2'>
        {visibleEvents.map((event, index) => (
          <Event key={index} event={event} />
        ))}
      </div>
    </div>
  )
}

export default Events