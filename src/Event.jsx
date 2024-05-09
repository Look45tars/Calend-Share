import { useState } from 'react'

function Event({event}) { 
  const {title, date, data} = event
  
  return (
    <div className="size-full bg-red-200 p-2">
      <h1 className="text-md">{title}: {new Date(date).toDateString()}</h1>
      <h1 className="text-sm">{data}</h1>
    </div>
  )
}

export default Event