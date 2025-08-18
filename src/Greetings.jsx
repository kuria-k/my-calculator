import React from 'react'

function Greetings(props) {
  return (
    <>
    <h1>Hello, {props.name}</h1>
    <h1>I am , {props.age}</h1>
    <h1>My gender, {props.gender}</h1>
    </>
  )
}

export default Greetings