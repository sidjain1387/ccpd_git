// import React from 'react'

// const Child2 = ({user}) => {
//   return (
//     <div>
//         <h2>{user.name}'s profile Web</h2>
//         <p>Id: {user.Id}</p>
//         <p>Hobbies: {user.hobbies.join(",")}</p>
//         <p>{user.isMember ? 
//         "Member" : "Not a Member"}</p>
      
//     </div>
//   )
// }

// export default Child2


import React from 'react'
import Child3 from './Child3'

const Child2 = ({studentData}) => {
  return (
    <div>
      <h3>Child 2</h3>
      <Child3 studentData={studentData}/>
    </div>
  )
}

export default Child2
