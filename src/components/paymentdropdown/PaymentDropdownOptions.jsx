import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './PaymentDropdownOptions.module.css'
function PaymentDropdownOptions({setPaymnetCount,paymentCount}) {
    const options1=[
        {key:1,value:"Diners Club"},
        {key:2,value:"MasterCard "},
        {key:3,value:"MasterCard Debit"},
        {key:4,value:"Visa Credit"},
        {key:5,value:"Visa Debit"},
        {key:6,value:"Alipay"}
    ]
    const options2=[
        {key:7,value:"Net Banking"},
        {key:8,value:"UPI"},
        {key:9,value:"American Express"},
        {key:10,value:"Bank Transfer"},
        {key:11,value:"PayPal"},
        {key:12,value:"Wechat Wallet"},
        {key:13,value:"PayU"},
        {key:14,value:"Western Union"},

    ]
    const [isFullShow,setIsFullShow]=useState(false)
    const [whichButtonToShow,setWhichButtonToShow]=useState("showmore")
    const [paymentOptionLimitReached,setPaymentOptionLimitReached]=useState(false)
    const array=useRef([1,2,3,4,5,6])
    useEffect(()=>{
        if(paymentCount===10)
            setPaymentOptionLimitReached(true)
        else
            setPaymentOptionLimitReached(false)
    },[paymentCount])

    const check=(e,optionKey)=>{
        if(e.target.checked===true)
        {
            array.current.push(optionKey)
            setPaymnetCount((prev)=>prev+1)
        }
        else
        {
            const index=array.current.indexOf(optionKey)
            array.current.splice(index,1)
            setPaymnetCount((prev)=>prev-1)
        }
        // console.log(array.current);
    }
  return (
    <>
    <div className={`${style.main}`}>
        {
            options1.map((option)=>{
                return (
                    <div className={`${style.ref}`} key={option.key}>
                        <input type="checkbox" className={`${style.checkBoxElement}`} onChange={(e)=>check(e,option.key)} disabled={paymentOptionLimitReached && array.current.indexOf(option.key)===-1?true:false} checked={array.current.indexOf(option.key)!==-1?true:false}/>
                        <p>{option.value}</p>
                    </div>
                )
            })
        }
        {
         isFullShow &&  options2.map((option)=>{
                return (
                    <div className={`${style.ref}`} key={option.key}>
                        <input type="checkbox" className={`${style.checkBoxElement}`} onChange={(e)=>check(e,option.key)} disabled={paymentOptionLimitReached && array.current.indexOf(option.key)===-1?true:false} checked={array.current.indexOf(option.key)!==-1?true:false}/>
                        <p>{option.value}</p>
                    </div>
                )
            })
        }
        
    </div>
    <div className={`${style.buttonDiv}`}>
    {
        whichButtonToShow==="showmore"?<button onClick={()=>{setIsFullShow(true);setWhichButtonToShow("showless")}} className={`${style.buttonElement}`}>+ Show More</button>
        :<button onClick={()=>{setIsFullShow(false);setWhichButtonToShow("showmore")}} className={`${style.buttonElement}`}>- Show Less</button>
    }
    
    </div>
    </>
  )
}

export default PaymentDropdownOptions