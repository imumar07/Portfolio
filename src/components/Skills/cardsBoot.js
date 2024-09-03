import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const fullStackSkills = [
    { id: 1, skillName: 'Frontend',skills:['HTML','CSS','Boostrap','Flexbox','React js','Javascript','Flutter'],style:""},
    { id: 2, skillName: 'Backend',skills:['Node js','Express js','Spring Boot','REST Api','Go'] ,style:""},
    { id: 3, skillName: 'Database',skills:['Mysql','Sqlite','Firebase'],style:"center" },
    { id: 4, skillName: 'Others',skills:['GCP','Java','Python','Git','OOPS','AI/ML','DevOps','App Development'],style:"" },
    // Add more skills as needed
  ];
  
function CardsBoot() {
  return (
    <Container>
        <Row xs={1} s={2} md={3} lg={4} className="g-4">
      {fullStackSkills.map((each) => (
        <Col key={each.id}  className='center '>
          <Card style={{ maxWidth: '300px' }} className='text-center shadow-2xl'>
            
            <Card.Body className='height-width'>
              <Card.Title>{each.skillName}</Card.Title>
              <ul className={each.style}>
              {(each.skills).map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default CardsBoot;