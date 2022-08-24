import { useState } from 'react'
import '../components/styles.css'

const Contact = () => {
  const [inputText, setinputText] = useState({
    email: '',
    someth: '',
  })

  const [visible, setVisible] = useState(false)

  const handleChange = (e) => {
    const val = e.target.value
    setinputText({
      ...inputText,
      [e.target.name]: val,
    })
  }

  const handleSubmit= (event) => {
    setVisible(!visible);
    event.preventDefault()
  }

  return (
    <div className='contact'>
      <form onSubmit={handleSubmit}>
        <div className='email'>
          <input
            name='email'
            value={inputText.email}
            type='text'
            placeholder='Wpisz e-mail'
            onChange={handleChange}
          ></input>
        </div>

        <div className='someth'>
          <input
            name='someth'
            value={inputText.someth}
            type='text'
            onChange={handleChange}
          ></input>
        </div>

        <div className='btn'>
        <button onClick={handleSubmit} type='submit'>
          Wyślij
        </button>
      </div>
      </form>

      {visible && <div className='text'>
        <h2>{inputText.email}</h2>
         <h2>{inputText.someth}</h2>
      </div>}
    </div>
  )
}

export default Contact
