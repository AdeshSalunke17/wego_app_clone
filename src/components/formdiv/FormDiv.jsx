import React from 'react'
import { Outlet, useHref } from 'react-router-dom'
import style from '../formdiv/FormDiv.module.css'
import FormOptionDiv from './FormOptionDiv'
function FormDiv() {
  const urlref=useHref()
  return (
    <div className={`w-100 ${style.main}`}>
        <div className={`${style.sub_main}`}>
          <FormOptionDiv urlref={urlref}/>
          <Outlet/>
        </div>
    </div>
  )
}

export default FormDiv