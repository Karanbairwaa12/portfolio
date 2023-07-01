import React from 'react'
import './contect.css'
import Logo from '../../component/Logo/Logo'
const Contect = () => {
  return (
    <div className="contactPage">
        <Logo/>
        <div className="contact">
            <h1>Contact Me</h1>
            <p>If you wanna get in touch, talk to me about a project collaboration or just say hi,
                fill up the awesome form below or send an email to 
                <b>Karanbairwaa@gmail.com</b>
                 and ~let's talk.</p>

            <div className="contactForm">
                <form method="post">
                    <div className="row">
                        <div className="inputGroup">
                            <input type="text"  name="name" id="name" required/>
                            <label for="name">Your Name</label>
                        </div>
                        <div className="inputGroup">
                            <input type="email"  name="email" id="email" required/>
                            <label for="email">Your Email</label>
                        </div>
                    </div>
                    
                    <div className="inputGroup">
                        <input type="text" name="subject"  id="subject" required/>
                        <label for="subject">Subject</label>
                    </div>
                    
                    <div className="inputGroup">
                        <textarea  name="message" id="message" rows="5" required></textarea>
                        <label for="message">Your Message</label>
                    </div>
                    <button type ="submit"  value="">Send message</button>
                </form> 
                <div className='socialMedia'>

                  <a href="www.linkedin.com/in/karan-bairwa-977a">www.linkedin.com/in/karan-bairwa-977a</a>
                  {/* <a href="www.linkedin.com/in/karan-bairwa-977a">www.linkedin.com/in/karan-bairwa-977a</a> */}
                </div>
                {/* <!-- <form  method="post">
                    <div className="row">
                        
                            <div className="inputGroup">
                                <label for="inputName">Name</label>
                                <input type="text" name="name"  id="name" required>
                            </div>
                                        
                        
                            <div className="inputGroup">
                                <label for="inputEmail">Email</label>
                                <input type="email" name="email"  id="email" required>
                            </div>
                        
                        
                    </div>            
                    <div className="inputGroup">
                        <label for="inputSubject">Subject</label>
                        <input type="text" name="subject"  id="subject" required>
                    </div>
                    <div className="inputGroup">
                        <label for="inputMessage">Message</label>
                        <textarea  name="message" id="message" rows="5" required></textarea>
                    </div>
                    <button type ="submit"  value="">Send message</button>
                </form> --> */}
                
            </div>
        </div>
    </div>
  )
}

export default Contect