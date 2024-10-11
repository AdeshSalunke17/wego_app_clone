import React, { useState } from 'react'
import style from './RoomDiv.module.css'
import { PiPersonLight } from "react-icons/pi";
import { PiPersonArmsSpreadLight } from "react-icons/pi";
import AgeOfChildrenDropdown from './AgeOfChildrenDropdown';
function RoomDiv({numberOfRoomDiv,setNumberOfRoomDiv,number,setTotalNumberOfGuests}) {
  const [adultCount,setAdultCount]=useState(1)
  const [childCount,setChildCount]=useState(0)
  const childCountArray=new Array(childCount)
  for(let i=0;i<childCountArray.length;i++)
    childCountArray[i]=true
  return (
    <div className={`w-100 ${style.main}`}>
      <div className={` ${style.heading}`}>
        <p style={{display:"inline"}}>Room {number}</p>
        {
          numberOfRoomDiv>1 && <button onClick={()=>setNumberOfRoomDiv((prev)=>prev-1)}>Remove</button>
        }
      </div>
      <div className={` ${style.maincontent}`}>
        <div className={` ${style.adultdiv}`}>
          <div className={` ${style.adultlogodiv}`}>
            <PiPersonLight style={{fontSize:"25px"}}/>
          </div>
          <div className={` ${style.adultcontentdiv}`}>
            <h6 style={{fontWeight:"300",display:"inline"}}>Adults</h6>
            <h6 style={{fontSize:"small",fontWeight:"200",color:"rgb(187, 187, 187)"}}>{'>'} 17 Years</h6>
          </div>
          <div className={` ${style.adultbuttondiv}`}>
            <button className={` ${style.myButton} ${adultCount>1&& style.active}`} style={{marginRight:"10px"}} onClick={()=>{setAdultCount((prev)=>prev-1);setTotalNumberOfGuests((prev)=>prev-1)}} disabled={adultCount===1?true:false}>-</button>
            <h6 style={{display:"inline"}}>{adultCount}</h6>
            <button className={` ${style.myButton} ${adultCount+childCount<40&& style.active}`} style={{marginLeft:"10px"}} onClick={()=>{setAdultCount((prev)=>prev+1);setTotalNumberOfGuests((prev)=>prev+1)}} disabled={adultCount+childCount===40?true:false}>+</button>
          </div>
        </div>
        <div className={` ${style.childdiv}`}>
          <div className={` ${style.childlogodiv}`}>
            <PiPersonArmsSpreadLight style={{fontSize:"25px"}}/>
          </div>
          <div className={` ${style.childcontentdiv}`}>
            <h6 style={{fontWeight:"300",display:"inline"}}>Childrens</h6>
            <h6 style={{fontSize:"small",fontWeight:"200",color:"rgb(187, 187, 187)"}}>{'<'} 17 Years</h6>
          </div>
          <div className={` ${style.childbuttondiv}`}>
            <button className={` ${style.myButton} ${childCount>0&& style.active}`} style={{marginRight:"10px"}} onClick={()=>{setChildCount((prev)=>prev-1);setTotalNumberOfGuests((prev)=>prev-1)}} disabled={childCount===0?true:false}>-</button>
            <h6 style={{display:"inline"}}>{childCount}</h6>
            <button className={` ${style.myButton} ${adultCount+childCount<40&& style.active}`} style={{marginLeft:"10px"}} onClick={()=>{setChildCount((prev)=>prev+1);setTotalNumberOfGuests((prev)=>prev+1)}} disabled={adultCount+childCount===40?true:false}>+</button>
          </div>
        </div>
      </div>
      {
        childCount>0 && <div className={`${style.AgeOfChildrenDiv}`}>
          <p style={{fontWeight:"300"}}>Age of Children</p>
          <div className={`${style.AgeOfChildrenDropdownDiv}`}>
            {
              childCountArray.map((obj,i)=>{
                return <AgeOfChildrenDropdown/>
              })
            }
          </div>
          <br />
          <p style={{fontSize:"13px",color:"rgb(145, 145, 145)"}}>We preset your children's ages to 12 years old. You might get a better price if you enter their actual age.</p>
        </div>
      }
      <hr />
    </div>
  )
}

export default RoomDiv