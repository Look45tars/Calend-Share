import { useState } from 'react'
import logo from './Calend-Share_Logo.png'
import Calendar from './Calendar'
import Events from './Events'
import Notes from './Notes'

function App() { 
  const [count, setCount] = useState(0)

  const mainGridStyle = {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
  }

  const bodyGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'minmax(auto, 1000px) minmax(auto, 400px)',
    gap: '1rem',	
  }

  const leftGridStyle = {
    display: 'grid',
    gridTemplateRows: '2fr 1fr',
    gap: '1rem',
  }


  return (
    <div className='h-screen w-screen'>
      <div className='size-full mx-auto' style={mainGridStyle}>
        
        <h1 className="h-16 bg-red-50 flex">
          <img src={logo} className='my-auto ml-10 h-16 mr-auto font-bold'/>
          <button className='mr-10 h-10 bg-red-200 px-2 my-auto'> 
            Sign Up / Log In
          </button>
          <button className='mr-10 h-10 bg-red-200 px-2 my-auto'> 
            Options
          </button>
        </h1>
        
        <div className='p-4 h-full' style={bodyGridStyle}>
          <div style={leftGridStyle}>
            <Calendar />
            <Notes />
          </div>
          <Events />
        </div>
      </div>
    </div>
  )
}

export default App
