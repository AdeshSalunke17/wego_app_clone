import style from '../hotelform/HotelForm.module.css'
import HotelFormCheckbox from './HotelFormCheckbox'
import HotelFormHeader from './HotelFormHeader'
import HotelFormInputs from './HotelFormInputs'

function HotelForm() {
  return (
        <div className={`${style.main}`}>
             <HotelFormHeader/>
             <HotelFormInputs />
             <HotelFormCheckbox/>
        </div>
  )
}

export default HotelForm