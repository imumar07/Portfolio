import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLink } from '@fortawesome/free-solid-svg-icons'
const certifications = [
    {id:0,title: 'Programming Data Structures and Algorithms Using Python',issuedBy:"NPTEL",certificateLink:"https://drive.google.com/file/d/1e6Il3PlqFD1TRWRDKwwnGaS5QnMVx5YJ/view?usp=sharing"},
    {id:1,title: 'AWS Academy Graduate - AWS AcademyCloud Foundations',issuedBy:"Amazon",certificateLink:"https://drive.google.com/file/d/1YVIjaPwd_waN0WlKSSjJ7Secu1s6olZy/view?usp=sharing"},
    {id:2,title: 'Azure Fundamentals',issuedBy:"Microsoft",certificateLink:"https://drive.google.com/file/d/1amxT-BQ1SFlU8UOAuOUeZt8kGoY_smL-/view?usp=sharing"},
    
  ]

export default function Certifications() {
    return (
        <Row xs={1} s={2} md={2} lg={3} className="g-4">
        {library.add( faLink)}
          {certifications.map((each) => (
            <Col key={each.id} >
              <Card className='card-size'>
    
                <Card.Body style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <Card.Title style={{textAlign:"center"}}>{each.title}</Card.Title>
                  <Card.Text>
                    {each.issuedBy}
                  </Card.Text>
                  <Card.Text>
                    <a href={each.certificateLink} className='certificate-link' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon="fa-solid fa-link" /> View Certificate</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      );
}
