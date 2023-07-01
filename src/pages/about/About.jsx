import React from 'react'
import './about.css'
import Logo from '../../component/Logo/Logo'

const About = () => {
  return (
    <div className="about_main">
        <div className="about_container">
            <Logo/>
            <div className="about_content"> 
                <div className="aheading"><h1>I design & build digital products</h1></div>
                
                <div className="my_img">
                    <img src="images/img.png" alt=""/>
                </div>
                <div className="about_me">
                    <div className="About">
                        <h1>About</h1>
                        <br/>
                        <p className="ptext">
                            Hello, I'm Karan, a passionate and dedicated frontend developer. As a 3rd year BCA student, I have immersed myself in the world of web development and have acquired a strong skill set in various technologies, including HTML, CSS, JavaScript, React, Node.js, and Express.
                            <br/>
                            With a keen eye for detail and a love for clean and elegant designs, I strive to create visually appealing and user-friendly websites. My expertise lies in crafting intuitive user interfaces that provide seamless and engaging experiences for visitors. Through my knowledge of HTML, CSS, and JavaScript, I have mastered the art of transforming ideas into beautiful and functional web pages.
                            <br/>
                            Driven by my enthusiasm for coding, I am constantly seeking opportunities to enhance my skills and stay up-to-date with the latest industry trends and best practices. I am always excited to tackle new challenges and find innovative solutions to problems.
                            <br/>
                            Beyond technical proficiency, I bring a strong work ethic, effective communication skills, and a collaborative approach to every project I undertake. I believe in the power of teamwork and enjoy working alongside designers and backend developers to deliver outstanding results.
                            <br/>
                            As a frontend developer, I am committed to continuous growth and delivering high-quality, responsive, and performant websites that exceed client expectations. I am excited to contribute my skills and creativity to meaningful projects that make a positive impact on the digital landscape.
                        </p>
                        
                        <a href="images/KARANRESUME.pdf" style={{fontSize:"18px"}}>my resume pdf.</a>
                    </div>
                    

                    <div className="my_skills">
                        
                        <h1>Skills</h1>
                        <br/>
                        <div className="container">
                            <div className="text-center drop">
                                <img src="images/html.png" alt=""/>
                                <h2>HTML</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea beatae ex neque!</p>
                            </div>
                            <div className="text-center drop">
                                <img src="images/cs.png" alt=""/>
                                <h2>CSS</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea beatae ex neque!</p>
                            </div>
                            <div className="text-center drop">
                                <img src="images/javas.png" alt=""/>
                                <h2>JAVASCRIPT</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea beatae ex neque!</p>
                            </div>
                        
                        
                            <div className="text-center drop">
                                    <img src="images/react.png" alt=""/>
                                    <h2>REACT</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea beatae ex neque!</p>                                
                            </div>
                            <div className="text-center drop">
                                <img src="images/node.png" alt=""/>
                                
                                <h2>NODE</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea beatae ex neque!</p>
                            </div>
                            <div className="text-center drop">
                                <img src="images/express.png" alt=""/>
                                <h2>EXPRESS</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea beatae ex neque!</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                
            </div>
        </div>

    </div>
  )
}

export default About