import React from 'react'
import Cars from './Cars.jsx'

function example (props)  {
    const carData = {name: 'Toyota', model: 'Auris', yom: 2024, price: 2100000}
  return (
    <>
    <h1>My name is Kelvin Kuria</h1>
    <p>Have a blessed Monday</p>
    <Cars vehicle = {carData} />
    </>
  )
}

export default example