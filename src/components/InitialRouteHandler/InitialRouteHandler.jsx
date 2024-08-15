import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function InitialRouteHandler() {
    const navigate=useNavigate()
    useEffect(()=>{
        navigate("/flights")
    },[navigate])
  return null;
}

export default InitialRouteHandler