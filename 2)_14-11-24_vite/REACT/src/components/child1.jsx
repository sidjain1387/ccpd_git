// import React from 'react'

// const Child1 = (props) => {


//   return (
//     <>
//     <h2 style={{color:"red"}}>{props.name}</h2>
//     <h2 style={{color:"red"}}>{props.year}</h2>
//     <h2 style={{color:"red"}}>{props.date.toLocaleDateString()}</h2>
//     <h2 style={{color:"red"}}>{JSON.stringify(props.date)}</h2>
      
//     </>
//   )
// }

// export default Child1


import React from 'react'
import Child2 from './Child2'

const Child1 = ({studentData}) => {
  return (
    <div>
      <h2>Child 1</h2>
      <Child2 studentData={studentData}/>
    </div>
  )
}

export default Child1
