import '../components/styles.css'
import { useState } from 'react'

const Omnie = ({ name, text, fotoOfMe, onClick, handleChange}) => {
   
 

  return (
    <div className='me'>
      <h1>Hello</h1>
      <h1>I'm {name} </h1>
      <h2>{text}</h2>
      <img style={{ width: 300, height: 300 }} src={fotoOfMe} />
      <br />
      <input onChange={handleChange} />
      <button onClick={onClick}>Dodaj tekst do Logo</button>
    </div>
  )
}

export default Omnie
