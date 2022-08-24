import './styles.css'
import React, { useState } from 'react'
import MenuItems from './menuItems'
import '../components/styles.css'
import Omnie from '../pages/omnie'

const Navigation = ({ logoSign, setRoute }) => {
  const changingThePage = (page) => {
    setRoute(page)
  }

  return (
    <div className='container'>
      <div className='nav'>
        <div className='logoSign'>
          <p>{logoSign}</p>
        </div>
        <div className='list'>
          {MenuItems.map((item, index) => {
            return (
              <li  key={index}>
                <a href={item.url} onClick={() => changingThePage(item)}>{item.name}</a>
              </li>
            )
          })}
        </div>
      </div>

      <div className='page'></div>
    </div>
  )
}

export default Navigation
