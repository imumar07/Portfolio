import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import "./index.css"
function CardBoot() {
  return (
    <Container  >
      <CardGroup >
      <Card  className="display-responsive" style={{ border: 'none' }}>
        <Card.Img  src="https://res.cloudinary.com/dqe4ld4cx/image/upload/v1705828006/Umar_cv2g8d.jpg" alt="my-pic" className="my-pic"/ >
        <Card.Body style={{ maxWidth: '400px' }} className="d-flex flex-column justify-content-center">
          <Card.Title>Syed Umar Kalimulla</Card.Title>
          <Card.Text >
          Aspiring full-stack developer with a solid foundation in web technologies and a proven track record of delivering impactful projects. Committed to contributing expertise and innovation across the entire web development spectrum.
          </Card.Text>
        </Card.Body>
        
      </Card>
     
      
    </CardGroup>
    </Container>
  );
}

export default CardBoot;