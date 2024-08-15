import React from 'react'
import style from '../passengerdropdown/PassengerDropDown.module.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import { useEffect, useState } from 'react'
import {useTranslation} from 'react-i18next'
function PassengerDropDown() {
  let [adultCount,setAdultCount]=useState(1)
  const [isAdultCountZero,setIsAdultCountZero]=useState(true)
  const [childrenCount,setChildrenCount]=useState(0)
  const [isChildrenCountZero,setIsChildrenCount]=useState(true)
  const [infantCount,setInfantCount]=useState(0)
  const [isinfantCountZero,setIsInfantCountZero]=useState(true)
  const [isPassengerLimitReached,setIsPassengerLimitReached]=useState(false)
  useEffect(()=>{
    if(adultCount===1)
      setIsAdultCountZero(true)
    else
      setIsAdultCountZero(false)
  },[adultCount])
  useEffect(()=>{
    if(childrenCount===0)
      setIsChildrenCount(true)
    else
      setIsChildrenCount(false)
  },[childrenCount])
  useEffect(()=>{
    if(infantCount===0)
      setIsInfantCountZero(true)
    else
      setIsInfantCountZero(false)
  },[infantCount])
    const {t}=useTranslation()
    const {options}=t("form_option_div")
    const {flights}=options
  return (
    <>
        <Dropdown className='dropdown'>
      <Dropdown.Toggle  id="dropdown-basic" className={`${style.dropdownButon}`} >
        {adultCount+childrenCount+infantCount} {adultCount+childrenCount+infantCount===1?flights.footer_div.dropdown.passenger.main_heading.primary:flights.footer_div.dropdown.passenger.main_heading.secondary}
      </Dropdown.Toggle>

      <Dropdown.Menu className={`${style.dropdownmenu}`}>
        <div className='mydiv'>
          <Stack direction='horizontal' gap={4}>
            <Stack>
             <h6>{flights.footer_div.dropdown.passenger.adult.heading}</h6>
             <span style={{fontSize:"10px",fontWeight:"100"}}>{flights.footer_div.dropdown.passenger.adult.range}</span>
            </Stack>
            <button className={`${style.myButton} ${!isAdultCountZero && style.myButton_color}`}  onClick={()=>{setAdultCount((prev)=>prev-1);
            adultCount+childrenCount+infantCount!==8&&setIsPassengerLimitReached(false)
            }} disabled={isAdultCountZero}>-</button>
            <h6>{adultCount}</h6>
            <button className={`${style.myButton} ${!isPassengerLimitReached && style.myButton_color}`} onClick={()=>{setAdultCount((prev)=>prev+1);
            adultCount+childrenCount+infantCount===8&&setIsPassengerLimitReached(true)
            }} disabled={isPassengerLimitReached}>+</button>
          </Stack>
        </div>
        <div className='mydiv'>
        <Stack direction='horizontal' gap={4}>
            <Stack>
             <h6>{flights.footer_div.dropdown.passenger.children.heading}</h6>
             <span style={{fontSize:"10px",fontWeight:"100"}}> {flights.footer_div.dropdown.passenger.children.range}</span>
            </Stack>
            <button className={`${style.myButton} ${!isChildrenCountZero && style.myButton_color}`} onClick={()=>{setChildrenCount((prev)=>prev-1);
          adultCount+childrenCount+infantCount!==8&&setIsPassengerLimitReached(false)  
          }} disabled={
              isChildrenCountZero}>-</button>
            <h6>{childrenCount}</h6>
            <button className={`${style.myButton} ${!isPassengerLimitReached && style.myButton_color}`}  onClick={()=>{setChildrenCount((prev)=>prev+1);
            adultCount+childrenCount+infantCount===8&&setIsPassengerLimitReached(true)
            }} disabled={isPassengerLimitReached}>+</button>
          </Stack>
        </div>
        <div className={`${style.mydiv}`}>
        <Stack direction='horizontal' gap={4}>
            <Stack>
             <h6>{flights.footer_div.dropdown.passenger.infants.heading}</h6>
             <span style={{fontSize:"10px",fontWeight:"100"}}>{flights.footer_div.dropdown.passenger.infants.range}</span>
            </Stack>
            <button className={`${style.myButton} ${!isinfantCountZero && style.myButton_color}`} onClick={()=>{setInfantCount((prev)=>prev-1);
            adultCount+childrenCount+infantCount!==8&&setIsPassengerLimitReached(false)
            }} disabled={isinfantCountZero}>-</button>
            <h6>{infantCount}</h6>
            <button className={`${style.myButton} ${!isPassengerLimitReached && style.myButton_color}`} onClick={()=>{setInfantCount((prev)=>prev+1);
            adultCount+childrenCount+infantCount===8&&setIsPassengerLimitReached(true)
            }} disabled={isPassengerLimitReached}>+</button>
          </Stack>
        </div>
      </Dropdown.Menu>
    </Dropdown>
    </>
  )
}

export default PassengerDropDown