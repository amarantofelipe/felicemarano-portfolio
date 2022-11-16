import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import mobImg1 from "../assets/img/mobile-img1.png";
import mobImg2 from "../assets/img/mobile-img2.png";
import mobImg3 from "../assets/img/mobile-img3.png";
import softImg1 from "../assets/img/software-img1.png";
import softImg2 from "../assets/img/software-img2.png";
import softImg3 from "../assets/img/software-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {

  const projects = [
    {
      title: "Sito Web Portfolio",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const mobile = [
    {
      title: "Gestionale ",
      description: "iOS Development",
      imgUrl: mobImg1,
    },
    {
      title: "Card war game",
      description: "iOS Development",
      imgUrl: mobImg2,
    },
    {
      title: "Covid App",
      description: "macOS Development",
      imgUrl: mobImg3,
    },
  ];

  const software = [
    {
      title: "Dematerializzazione ",
      description: "Software Development: Java",
      imgUrl: softImg1,
    },
    {
      title: "InstaDownloader",
      description: "Software Development: Python",
      imgUrl: softImg2,
    },
    {
      title: "PlayTube",
      description: "Software Development: Python",
      imgUrl: softImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Questi sono alcini dei miei progetti realizzati, ogni progetto è stato realizzato con la massima cura nei dettagli, intervenendo sia nella parte di programmazione come e-commerce che nella parte di design. Tutti i siti sono al 100% responsive</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Software</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          mobile.map((mob, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...mob}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          software.map((mob, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...mob}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
