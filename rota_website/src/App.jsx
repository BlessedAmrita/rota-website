import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSlider from './Components/Gallery/HeroSlider'
import Nav from './Components/Nav\'/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      <Nav/>
      <HeroSlider/>
    </>
  )
}

export default App
