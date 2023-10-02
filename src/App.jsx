// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section4 from './components/section4/Section4'
import Footer from './components/Footer'
import Section3 from './components/section3/Section3'
import Section5 from './components/section5/Section5'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer/>
    </div>
  )
}

export default App
