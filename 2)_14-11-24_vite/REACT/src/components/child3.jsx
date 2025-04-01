// import React, { useState, useEffect } from 'react'

// const Child3 = () => {
//   const [total, setTotal] = useState(0);
//   const [double, setDouble] = useState(0);
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("");
//   const [originalPassword, setOriginalPassword] = useState("");
//   useEffect(()=>{
//     setDouble(total * 2)
//   },[total])

//   const handleClick =(value)=>{
//     setOriginalPassword(password)
//     if(value === "true"){
//       setShowPassword(false)
//       setPassword(originalPassword)
//     }
//     else{
//       setShowPassword(true)
//       setPassword(password.replaceAll(/./g, '*'))
//     }
//   }
//   return (
//     <div>
//       <button onClick={() => setTotal(total + 10000)}>Plus 1</button>
//       <button onClick={() => setTotal(total - 1)}>Minus 1</button>
//       <input type="text" value={password} onChange={e=>setPassword(e.target.value)} />
//       <button value={showPassword} onClick={e=>handleClick(e.target.value)}>Show/Hide</button>
//       <h1>total: {total}</h1>
//       <h1>double: {double}</h1>
//     </div>
//   )
// }

// export default Child3

import React from 'react'


const Child3 = ({studentData}) => {
  return (
    <div>
      <h4>Child 3</h4>
      <h5>Name : {studentData.name}</h5>
      <h5>Roll : {studentData.roll}</h5>
      
    </div>
  )
}

export default Child3
