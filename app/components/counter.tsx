"use client"
import { useState } from 'react'

const Counter = () => {
    console.log('Counter component')
    const [count, setCount] = useState(0);
  return (
    <button className='px-3 py-1 rounded-md font-semibold shadow-inner sha shadow-green-600 bg-green-500' onClick={() => setCount(count + 1)}>
        Clicked {count} times
    </button>
  )
}

export default Counter