import React from 'react'
import './logo.css'
import { useState } from 'react'
const Logo = () => {
    const [isLogo,setIsLogo] = useState("karan")
  return (
    <div className="karanlogo" >
        <div className="linkbox" 
            onMouseEnter={()=>setIsLogo("karan.bairwa")}
            onMouseLeave={()=>setIsLogo("karan")} 
        >
            <a href="/" id="link" className="logotext">{isLogo}</a> 
        </div>
    </div>
  )
}

export default Logo