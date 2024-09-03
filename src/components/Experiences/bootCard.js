import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const achievementData = [

  {id:1,title: 'Tech Consultant Intern',company:"HRLytics",duration:"7 Months",startDate:"October 2023",endDate:"April 2024", displayText: 'As a Tech Consultant Intern specializing in Spring Boot, I contributed to the learning and professional development of individuals by actively engaging in the exploration of Spring Boot technologies.',skills:["Java","Spring Boot","RESTful API","Mysql","Spring MVC","Hibernates","JSP"]},
  {id:2,title: 'Teaching Assistant',company:"Nxt Wave",duration:"3 Months",startDate:"August 2023",endDate:"October 2023", displayText: 'As a teaching assistant, I resolve over 300 Python and web-related doubts, offering detailed solutions andguidance to foster students understanding and successwhile committed to facilitating a supportive learningenvironment.',skills:["HTML","CSS","Bootstrap","Python","Resposiveness","Flex Box","Js"]},
  
]
function Experiences() {
  return (
    <Row xs={1} s={2} md={2} className="g-4">
      {achievementData.map((each) => (
        <Col key={each.id} >
          <Card className='card-size'>

            <Card.Body className='d-flex flex-column justify-content-center'>
              <Card.Title>{each.title}</Card.Title>
              <Card.Text>
                {each.company}
              </Card.Text>
              <Card.Text>
               Duration: {each.duration} <br></br>
               {each.startDate} - {each.endDate}
              </Card.Text>
              <Card.Text>
               Skills Worked on:
              </Card.Text>
              <ul>
              {(each.skills).map((item,index)=>(
                <li key={index} className='text-center'>{item}</li>
              ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Experiences;