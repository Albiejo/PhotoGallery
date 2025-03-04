import { useState } from 'react'
import Uploadform from './components/Uploadform'
import Gallery from './components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Uploadform/>
    <Gallery/>
    </>
  )
}

export default App
