import { useState } from 'react'

function Notes() { 
  const style = {
    display: 'grid',
    gap: '.25rem',
    gridTemplateRows: 'auto 1fr',
  }

  return (
    <div className="size-full bg-red-100 p-2" style={style}>
      <p className="text-xl font-medium">Notes: </p>
      <textarea className="w-full h-full border-2 border-gray-300 p-2" />
    </div>
  )
}

export default Notes