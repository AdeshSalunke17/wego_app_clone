import React from 'react'
import style from '../paymentdropdown/PaymentDropDown.module.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import PaymentDropdownOptions from './PaymentDropdownOptions';
import { useState } from 'react';
import {useTranslation} from 'react-i18next'
function PaymentDropDown() {
  const {t}=useTranslation()
  const {options}=t("form_option_div")
  const [paymentCount,setPaymnetCount]=useState(6)
  return (
    <>
    <Dropdown>
      <Dropdown.Toggle className={`${style.dropdownButon}`}>
        {paymentCount} {options.flights.footer_div.dropdown.payment.heading}
      </Dropdown.Toggle>

      <DropdownMenu as="div" align="end">
          <div className={`${style.dropDownMenu}`}>
            <div className={`${style.dropDownHeader}`}>
              <p className={`${style.dropDownHeaderContent}`}>{options.flights.footer_div.dropdown.payment.header_content}</p>
            </div>
            <PaymentDropdownOptions setPaymnetCount={setPaymnetCount} paymentCount={paymentCount}/>
            <div className={`${style.dropDownFooter}`}>
              <p className={`${style.dropDownHeaderContent}`}>{options.flights.footer_div.dropdown.payment.tip}</p>
              <hr />
            </div>
          </div>
      </DropdownMenu>
    </Dropdown>
    </>
  )
}

export default PaymentDropDown