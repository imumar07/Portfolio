import "./index.css"
import TabItem from '../TabItem';
import { Component } from 'react';
import ProjectItem from '../ProjectItem';
import Row from 'react-bootstrap/Row';

const tabsList = [
    {tabId: 'STATIC', displayText: 'Static'},
    {tabId: 'RESPONSIVE', displayText: 'Responsive'},
    {tabId: 'DYNAMIC', displayText: 'Dynamic'},
    {tabId: 'JAVA', displayText: 'Java'},
    {tabId: 'PYTHON', displayText: 'Python'},
  ]
const projectsList = [
    {
      projectId: 0,
      category: 'STATIC',
      imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
      title: 'Music Page',
      description: 'Browse through images of all-time favorite music albums.',
    },
    {
      projectId: 1,
      category: 'STATIC',
      imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
      title: 'Tourism Website',
      description: 'Browse through images of popular destinations.',
    },
    {
      projectId: 2,
      category: 'STATIC',
      imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
      title: 'Advanced Technologies',
      description: 'Basic understanding of Advanced Technologies.',
    },
    {
      projectId: 3,
      category: 'STATIC',
      imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s2-img.png',
      title: 'Happy Meals',
      description: 'Discover the best foods in over 1,000 restaurants.',
    },
    {
      projectId: 4,
      category: 'RESPONSIVE',
      imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
      title: 'VR Website',
      description: 'Explore AR and VR Products and Industry happenings.',
    },
    {
      projectId: 5,
      category: 'RESPONSIVE',
      imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
      title: 'Food Munch',
      description: 'User-centric food tech website.',
    },
    {
      projectId: 6,
      category: 'RESPONSIVE',
      imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
      title: 'Portfolio',
      description: 'Best alternative for a resume to showcase your skills to the digital world.',
    },
    {
      projectId: 7,
      category: 'RESPONSIVE',
      imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
      title: 'Design',
      description: 'Showcase the best features and give more information about the Design tool.',
    },
    {
      projectId: 8,
      category: 'DYNAMIC',
      imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
      title: 'Speed Typing Test',
      description: 'Calculate the time to type the randomly generated quote.',
    },
    {
      projectId: 9,
      category: 'DYNAMIC',
      imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
      title: 'Random Joke Page',
      description: 'API-based dynamic Web Application that generates a new joke.',
    },
    {
      projectId: 10,
      category: 'DYNAMIC',
      imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
      title: 'Sizing An Image',
      description: 'Dynamic web application capable of adjusting the size of an element using DOM manipulations.',
    },
    {
      projectId: 11,
      category: 'JAVA',
      imageURL: 'https://res.cloudinary.com/dqe4ld4cx/image/upload/v1708767497/8316271_wleyov.jpg',
      title: 'Hotel Application',
      description: 'Java hotel application streamlining booking, reservations, and guest services for efficient management.',
    },
    {
      projectId: 12,
      category: 'PYTHON',
      imageURL: 'https://res.cloudinary.com/dqe4ld4cx/image/upload/v1708767862/6982904_3371524_ozjjzx.jpg',
      title: 'Calculator',
      description: 'Python-based calculator project facilitating basic arithmetic operations with user-friendly interface.',
    },
  ];
  

class Projects extends Component{
    state = {
        activeTabId: tabsList[0].tabId,
      }
    
      clickTabItem = tabValue => {
        this.setState({activeTabId: tabValue})
      }
    
      getFilteredProjects = () => {
        const {activeTabId} = this.state
        const filteredProjects = projectsList.filter(
          eachprojectDetails => eachprojectDetails.category === activeTabId,
        )
        return filteredProjects
      }
    render(){
        const {activeTabId}=this.state
        const filteredProjects = this.getFilteredProjects()
        return (
            <div id="projects" className="projects-container pt-1 ml-0" >
              <h1 className="text-center" style={{margin:"20px",marginTop:"70px"}}>Projects</h1>
            <ul className="tabs-container">
                  {tabsList.map(tabDetails => (
                    <TabItem
                      key={tabDetails.tabId}
                      tabDetails={tabDetails}
                      clickTabItem={this.clickTabItem}
                      isActive={activeTabId === tabDetails.tabId}
                    />
                  ))}
                </ul>
                <Row xs={1} s={2} md={2} xl={4} className="g-4"  style={{marginRight:"0",justifyContent:"center"}}>
                {filteredProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
                </Row>
            </div>
          );
    }
}


export default Projects;
