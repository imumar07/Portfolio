import React from 'react'
import "./index.css"
import Experiences from './bootCard'
import Certifications from '../Certifications'

export default function Achievements() {
  return (
    <div className="achievements-container" id="experiences">
       <div className='m-3 mt-4'>
        <div className='d-flex flex-row justify-content-center'>
            <h1>Experiences</h1>
          </div>
          <div>
              <Experiences/>
          </div>
       </div>
        <div className='m-3 mt-4' id='certifications'>
          <div className='d-flex flex-row justify-content-center'>
            <h1>Certifications</h1>
          </div>
          <div>
              <Certifications/>
          </div>
        </div>
    </div>
  )
}
