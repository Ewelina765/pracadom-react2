import { useState } from 'react'
import '../components/styles.css'

const ToDo = ({ onClick }) => {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const addTodo = () => {
    setTodos((prev) => [...prev, inputText])
  }

  const deleteItem = (index) => {
    const newTodos = todos.filter((it, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <div className='toDo'>
      <div>
        <input
          onChange={handleChange}
          type='text'
          placeholder='Wpisz element listy'
        />
      </div>
      <div>
        <button onClick={addTodo} type='submit'>
          Dodaj
        </button>
      </div>
      <div>
        {todos.map((item, index) => {
          return (
            <div key={index} className='list'>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => deleteItem(index)}
              >
                {item}
              </li>
            </div>
          )
        })}
      </div>
      <div className='toDoButton'>
        <ToDoButton onClick={onClick} />
      </div>
    </div>
  )
}

const ToDoButton = ({ onClick }) => {
  return (
    <button type='button' onClick={onClick}>
      Zmień stan napisu Logo w komponencie Rodzicu{' '}
    </button>
  )
}

export default ToDo
