import { useEffect, useState } from 'react'
import '../components/styles.css'
import axios from 'axios'


const Characters = () => {
  const [state, setState] = useState([])

 
    const fetchData = async () => {
      const result = await axios ('https://rickandmortyapi.com/api/character')
      setState(result.data.results)
      console.log( 'result', result.data.results)
    }

    useEffect(() => {
    fetchData()
  }, [])

  return (
    <div key={state.id} className='characters'>
      {state.map((item) => (
        <div> {item.name} - {item.species} {<img className='fotoOfCharacters' src={item.image}/>}</div>
      ))}
    </div>
  )
}
export default Characters


