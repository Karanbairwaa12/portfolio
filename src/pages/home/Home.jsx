import React, { useState } from 'react'
import './home.css'

const Home = () => {
    const [isHello, setIsHello] = useState("Hello")
    const [isIAm, setIsIAm] = useState("I am")
    const [isKaran, setIsKaran] = useState("Karan")
  return (
    <>
        <div className="main">

            <div className="pageLinks">
                <h1 className="myNav" 
                    onMouseEnter={()=>setIsHello("About")}
                    onMouseLeave={()=>setIsHello("Hello")} 
                >
                    <a className="text1" href="/about">{isHello}</a>
                </h1>
                <h1 className="myNav"  
                    onMouseEnter={()=>setIsIAm("Work")}
                    onMouseLeave={()=>setIsIAm("I am")}
                >
                    <a className="text2" href="/work">{isIAm}</a>
                </h1>
                <h1 className="myNav" 
                    onMouseEnter={()=>setIsKaran("Contect")}
                    onMouseLeave={()=>setIsKaran("Karan")}
                >
                    <a className="text3" href="/contact">{isKaran}</a>
                </h1>
            </div>
        </div>
    
        <div className="images">
            <img src="./images/download.png" alt="" />
        </div>
    </>
  )
}

export default Home