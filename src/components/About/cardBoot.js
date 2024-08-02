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
        <Card.Body style={{ maxWidth: '400px' }} className="about-name-para-button">
          <Card.Title>Syed Umar Kalimulla</Card.Title>
          <Card.Text className="para-about">
            Software Enginner Intern @Salesine
          </Card.Text>
          <Card.Text className="para-about">
          Aspiring full-stack developer with a solid foundation in web technologies and a proven track record of delivering impactful projects. Committed to contributing expertise and innovation across the entire web development spectrum.
          </Card.Text>
         <a href='https://drive.google.com/uc?export=download&id=1__MJndzxztlxfniKl8iFW4evomllpMOI'>
         <button class="button"> Resume
    </button>
         </a>
        </Card.Body>
        
      </Card>
     
      
    </CardGroup>
    </Container>
  );
}

export default CardBoot;