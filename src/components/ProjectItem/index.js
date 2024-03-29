import './index.css'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const ProjectItem = props => {
  const {projectDetails} = props
  const {projectId, imageURL, description, title} = projectDetails
  return (
    <>
    <Col key={projectId}  className='project-list-container mt-3'>
          <Card className=' project-item-container'>
          <Card.Img variant="top" src={imageURL} className='project-item-image ' />
            <Card.Body className='project-item-details-container'>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </>
  )
}

export default ProjectItem