import React, { useEffect, useState } from 'react'
import style from '../classdropdown/ClassDropDown.module.css'
import Dropdown from 'react-bootstrap/Dropdown';
import {useTranslation} from 'react-i18next'

function ClassDropDown() {
  const {t,i18n}=useTranslation()
  const {options}=t("form_option_div")
  const [dropdownName,setDropdownName]=useState()
  useEffect(()=>{
    setDropdownName(options.flights.footer_div.dropdown.class.eco)
  },[i18n.language,options.flights.footer_div.dropdown.class.eco])
  return (
    <>
    <Dropdown>
      <Dropdown.Toggle className={`${style.dropdownButon}`}>
        {dropdownName}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  onClick={()=>setDropdownName(options.flights.footer_div.dropdown.class.eco)}>{options.flights.footer_div.dropdown.class.eco}</Dropdown.Item>
        <Dropdown.Item  onClick={()=>setDropdownName(options.flights.footer_div.dropdown.class.prem_eco)}>{options.flights.footer_div.dropdown.class.prem_eco}</Dropdown.Item>
        <Dropdown.Item  onClick={()=>setDropdownName(options.flights.footer_div.dropdown.class.bsn_cls)}>{options.flights.footer_div.dropdown.class.bsn_cls}</Dropdown.Item>
        <Dropdown.Item  onClick={()=>setDropdownName(options.flights.footer_div.dropdown.class.f_cls)}>{options.flights.footer_div.dropdown.class.f_cls}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  )
}

export default ClassDropDown