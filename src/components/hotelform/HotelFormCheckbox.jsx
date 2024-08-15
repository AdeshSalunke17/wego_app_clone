import React from 'react'
import style from './HotelFormCheckbox.module.css'
function HotelFormCheckbox() {
  return (
    <div className={`w-100 h-5 d-flex py-2 justify-content-between`}>
        <div className='d-flex gap-2'>
            <input type="checkbox" className={`${style.checkBoxElement}`} />
            <p className=''>Free cancellation</p>
        </div>
        <div>
            <button className={style.searchButton}>Search</button>
        </div>
    </div>
  )
}

export default HotelFormCheckbox