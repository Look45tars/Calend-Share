import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './Calend-Share_Logo.png'

function App() { 
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* Top bar thingy */}
      <h1 className="h-16 bg-red-50 flex">
        <img src={logo} className='my-auto ml-10 h-16 mr-auto font-bold'>
        </img>
        <button className='mr-10 h-10 bg-red-200 px-2 my-auto'> 
          Sign Up / Log In
        </button>
      </h1>
      {/* Main Area */}
    </>
  )
}

export default App
