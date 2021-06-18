import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
      <div className='footer-container'>

            
              
            <div class='footer-link-items'>
              <h2>Contact Me</h2>
              <Link to='https://www.linkedin.com/in/kyle-euman-b51859203/'>Linked In</Link>
              <Link to='https://github.com/KyleEuman'>GitHub</Link>
              <h1>My Phone Number: 740-605-4762</h1>
            </div>
          </div>
           
        
    )         
  }
  
  export default Footer;