import React from 'react'

const Child1 = (props) => {


  return (
    <>
    <h2 style={{color:"red"}}>{props.name}</h2>
    <h2 style={{color:"red"}}>{props.year}</h2>
    <h2 style={{color:"red"}}>{props.date.toLocaleDateString()}</h2>
    <h2 style={{color:"red"}}>{JSON.stringify(props.date)}</h2>
      
    </>
  )
}

export default Child1
