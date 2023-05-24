import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import apple from "../assets/img/AppleTeacher_black.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Mobile Developer", "Software Developer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Benvenuto nel mio Portfolio!</span>
                <h1>{`Ciao, sono Felice un:`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Mobile Developer", "Software Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Sono un diplomato come perito informatico. Durante il mio percorso, ho dedicato il mio tempo libero alla realizzazione di un progetto personale ambizioso: una macchina a guida autonoma, che mi ha permesso di mettere in pratica le mie conoscenze e di affinare le mie abilità ingegneristiche. <br></br>
                  Nel mio percorso professionale c’è l’apprendimento delle nuove tencologie sviluppate da Apple, dimostrando la mia competenza nell'utilizzo delle loro soluzioni innovative, acquisendo il titolo di “Apple Teacher”.<br></br>
                  Attualmente, mi occupo di sviluppo software come software developer, per creare soluzioni tecniche efficaci e intuitive.
                  </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  {/* <img src={apple} className="App-logo" alt="logo" /> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
