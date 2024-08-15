import React from 'react'
import './SignUpModal.css'
import { BsFillTagsFill } from "react-icons/bs";
import { IoIosFlash } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
const getLogo=(name)=>{
    switch (name) {
        case "flash": return <IoIosFlash />
        case "bell": return <FaBell />
        case "tag": return <BsFillTagsFill/>
    }
}

export default function Banner({logo,heading,msg}) {
  return (
    <div className='banner w-100 d-flex'>
        <div className='logoDiv col-3 d-flex justify-content-center'>
            <div className='logo d-flex justify-content-center'>
                <p style={{fontSize:"22px",marginTop:"5px",color:"green"}}>{getLogo(logo)}</p>
            </div>
        </div>
        <div className='content col-9 '>
            <p style={{fontSize:"14px",fontWeight:"400"}}>{heading}</p>
            <p style={{fontSize:"13px",fontWeight:"400",color:"rgb(182, 182, 182)"}}>{msg}</p>
        </div>
    </div>
  )
}
