import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/counter'
import Counter from './components/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
    </>
  )
}

export default App
