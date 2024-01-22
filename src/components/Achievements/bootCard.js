import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const achievementData = [
  {id:0,title: 'Tech Consultant Intern',company:"HRLytics",duration:"6 Months", displayText: 'As a Tech Consultant Intern specializing in Spring Boot, I contributed to the learning and professional development of individuals by actively engaging in the exploration of Spring Boot technologies.'},
  {id:1,title: 'Teaching Assistant',company:"Nxt Wave",duration:"3 Months", displayText: 'As a teaching assistant, I resolve over 300 Python and web-related doubts, offering detailed solutions andguidance to foster students understanding and successwhile committed to facilitating a supportive learningenvironment.'},
  
]
function AchievementsCard() {
  return (
    <Row xs={1} s={2} md={2} className="g-4">
      {achievementData.map((each) => (
        <Col key={each.id} >
          <Card className='card-size'>

            <Card.Body>
              <Card.Title>{each.title}</Card.Title>
              <Card.Text>
                {each.company}
              </Card.Text>
              <Card.Text>
                {each.duration}
              </Card.Text>
              <Card.Text style={{textAlign:"justify"}}>
                {each.displayText}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default AchievementsCard;