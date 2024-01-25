import React from 'react'
import "./index.css"
import { Linkedin, Mail } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXTwitter,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (
    
    <div className='footer' id="footer">
  {library.add( faXTwitter,faGithub,faRocket)}

      <h1>Lets Get Connected <FontAwesomeIcon icon="fa-solid fa-rocket" className='icon'/></h1>
      <div className='icons-container'>
          <div>
            <a href="https://www.linkedin.com/in/syedumarkalimulla"><Linkedin className='icon'/></a>
          </div>
          <div>
          <a href="https://twitter.com/Umar91092583"><FontAwesomeIcon icon="fa-brands fa-x-twitter fa-lg" className='icon'/></a>
          </div>
          <div>
            <a href='mailto:umar630934@gmail.com'><Mail className='icon'/></a>
          </div>
          <div>
          <a href='https://github.com/imumar07'><FontAwesomeIcon icon="fa-brands fa-github" className='icon'/></a>
          </div>
          
      </div>
      <p>Build By Umar</p>
    </div>
  )
}
