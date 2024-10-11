import React from 'react'

function Card({imgurl,path}) {
  return (
    <a href={path} target='_blank' rel="noreferrer">
        <img src={imgurl} className='w-100 rounded h-100'/>
    </a>
  )
}

export default Card