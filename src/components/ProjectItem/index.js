import './index.css'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
const ProjectItem = props => {

  const {projectDetails} = props
  const {projectId, imageURL, description, title,projectLink} = projectDetails
  return (
    <>
    {library.add( faArrowUpRightFromSquare)}
    <Col key={projectId}  className='project-list-container mt-3'>
          <Card className=' project-item-container'>
          <Card.Img variant="top" src={imageURL} className='project-item-image ' />
            <Card.Body className='project-item-details-container'>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              
              {title === 'Floral AI' ?
              <div className="text-center">
                <a href='https://github.com/imumar07/FloralAI_Frontend.git' target='__blank'>
                  <Button className='link-button'>Frontend <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></Button>
                </a>
                <a href='https://github.com/imumar07/FloralAI_Backend.git' target='__blank'>
                  <Button className='link-button ms-2'>Backend <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></Button>
                </a>
              </div>  
              : <div className='text-center'><a href={projectLink}><Button className='link-button'>Project Link <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></Button></a></div>}

            </Card.Body>
          </Card>
        </Col>
      
    </>
  )
}

export default ProjectItem