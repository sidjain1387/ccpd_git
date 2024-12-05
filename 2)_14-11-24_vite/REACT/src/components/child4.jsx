import React,{useState} from 'react'

const Child4 = () => {
    const [newColor,setNewColor]=useState('Blue');
  return (
    <div>
        <h1>My favourite Color is <span  style={{color:newColor}}>{newColor}</span> </h1>
        <button onClick={()=>setNewColor("green")}>Green</button>
        <button onClick={()=>setNewColor("red")}>Red</button>
        <button onClick={()=>setNewColor("blue")}>Blue</button>
        <button onClick={()=>setNewColor("pink")}>Pink</button>
      
    </div>
  )
}

export default Child4
