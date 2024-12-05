import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import pic1 from "./assets/download.jpg"
import pic2 from "./assets/download1.jpg"
import pic3 from "./assets/download2.jpg"
import pic4 from "./assets/download3.jpg"
import Child1 from "./components/child1"
import Child2 from "./components/child2"
import Child3 from './components/child3'
import Child4 from './components/child4'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Registration from './components/Registration'

function App() {
  const [store, setStore] = useState("");


  const user = {
    name: "AJ",
    Id: 27,
    hobbies: ["Reading", "Traveling"],
    isMember: true,
  };

  return (
    <>
      {/* <div className='aa'>

      <Card name="siddhant" roll="4434343" img={pic1}/>
      <Card name="akhil" roll="12212112" img={pic2}/>
      <Card name="nitin" roll="233322332" img={pic3}/>
      <Card name="gagan" roll="5455454" img={pic4}/>
    </div>
      <Child1 name="ABES " year={["1st","2nd"]} date={new Date()}/>
      <Child2 user={user} />
      <Child3/>
      <Child4 /> */}
      {JSON.stringify(store)}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Registration regData={setStore} />}></Route>
            <Route path='/dash' element={<Dashboard />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
