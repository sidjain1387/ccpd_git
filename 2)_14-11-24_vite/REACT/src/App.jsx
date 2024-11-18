import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import pic1 from "./assets/download.jpg"
import pic2 from "./assets/download1.jpg"
import pic3 from "./assets/download2.jpg"
import pic4 from "./assets/download3.jpg"



function App() {
  return (
    <div className='aa'>
      <Card name="siddhant" roll="4434343" img={pic1}/>
      <Card name="akhil" roll="12212112" img={pic2}/>
      <Card name="nitin" roll="233322332" img={pic3}/>
      <Card name="gagan" roll="5455454" img={pic4}/>
    </div>
  )
}

export default App
