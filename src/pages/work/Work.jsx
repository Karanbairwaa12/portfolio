import React from 'react'
import './work.css'
import Logo from '../../component/Logo/Logo'
const Work = () => {
    
  return (
    <div className="Work_main">
    <div className="Work_container">
        <Logo/>
        <div className="Work_content"> 
            {/* <!-- <a href="#">
                <div className="projects">
                    <h1>Days App</h1>
                    <span>IOS COMPUTE DOWNAPP</span>
                </div>
            </a>
            <a href="#">
                <div className="projects">
                    <h1>inVision</h1>
                    <span>IOS COMPUTE DOWNAPP</span>
                </div>
            </a>
            <a href="#">
                <div className="projects">
                    <h1>Achievo</h1>
                    <span>IOS COMPUTE DOWNAPP</span>
                </div>
            </a>
            <a href="#">
                <div className="projects">
                    <h1>Freelance</h1>
                    <span>IOS COMPUTE DOWNAPP</span>
                </div>
            </a>
            <a href="#">
                <div className="projects">
                    <h1>EDUplay</h1>
                    <span>IOS COMPUTE DOWNAPP</span>
                </div>
            </a> --> */}
            <div className="pro_1">
                <div className="pro_name">
                    <h1>
                        <a href="/about">Netflix</a>
                    </h1>
                    <span>It is a Demo</span>
                </div> 
            </div>
            
            <div className="pro_1">
                <div className="pro_name">
                    <h1>
                        <a href="/">Ecommerce</a>
                    </h1>
                    <span>I will Update soon</span>
                </div> 
            </div>
            
        </div>
    </div>

</div>

  )
}

export default Work