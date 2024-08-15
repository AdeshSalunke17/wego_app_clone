import React from 'react'
import style from './HotelFormHeader.module.css'
function HotelFormHeader() {
  return (
    <div className={`${style.main}`}>
      <p>Where do you want to stay?</p>
    </div>
  )
}

export default HotelFormHeader