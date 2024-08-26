import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

export const SetupCounter = () => {
  const [count, setCount] = useState(0)

  return (
    //make centered and add some styles, preferably dracula styles
    <div className='flex flex-col h-full'>
      <h1 className="text-3xl font-bold underline bg-red">
        This page was deployed using Github actions!🚀
      </h1>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="text-4xl">Counter: {count}</div>
        <button className="bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount((c) => c - 1)}>Decrement</button>
        <button className="bg-cyan hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(0)}>Reset</button>
        <button className="bg-red hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
      {import.meta.env.VITE_commitId && (<div>Commit: {import.meta.env.VITE_commitId}</div>)}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app')!)
root.render(<SetupCounter />)
