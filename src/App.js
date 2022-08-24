import Navigation from './components/navigation'
import Omnie from './pages/omnie'
import Contact from './pages/contact'
import ToDo from './pages/todo'
import Characters from './pages/characters'
import MyImage from './components/ja.JPG'
import { useState } from 'react'

const App = () => {
  const [logo, setLogo] = useState('Logo')
  const [inputText, setInputText] = useState('')
  const [route, setRoute] = useState()

  const changeLogoSign = () => {
    setLogo(logo == 'Logo' ? 'Nowe Logo' : 'Logo')
  }
  const handleChange = (e) => {
    setInputText(e.target.value)
  }
  const changeLogoText = () => {
    setLogo(`${logo} ${inputText}`)
  }

  const myName = 'Ewelina Kuźniewska'
  const sentence = 'Welcome on the page dedicated to me'
console.log(route)
  return (
    
    <div className='app'>
      <Navigation logoSign={logo} setRoute={setRoute}>
        {route && <ToDo onClick={changeLogoSign} />}
        {route && (
          <Omnie
            onClick={changeLogoText}
            handleChange={handleChange}
            name={myName}
            text={sentence}
            fotoOfMe={MyImage}
          />
        )}
        {route && <Characters />}
        {route && <Contact />}
      </Navigation>
    </div>
  )
}

export default App
