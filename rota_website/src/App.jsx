import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSlider from './Components/Gallery/HeroSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      <HeroSlider/>
    </>
  )
}

export default App
