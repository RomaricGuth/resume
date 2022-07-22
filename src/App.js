import './styles/styles.scss';
import {useRef} from "react";
import Cv from './components/Cv';
import {Container, Button, Col, Row, Card} from "react-bootstrap";
import {savePDF} from "@progress/kendo-react-pdf";
import {CvOptionsContextProvider} from "./utils/CvOptionsContext";
import CvOptions from "./components/CvOptions";

function App() {
  const cv = useRef(null);

  const exportPDF = () => {
    if (!cv.current) {
      return;
    }

    /*
    const resume = new JsPDF('portrait','mm','a4');
    resume.html(document.querySelector('#resume')).then(() => {
      resume.save('Romaric_Guth_Resume.pdf');
    });
     */

    savePDF(cv.current, {
      paperSize: "A4",
      fileName: `Romaric_Guth_CV.pdf`,
      scale: 0.75,
    });
  };

  return (
    <CvOptionsContextProvider>
      <div>
        <Container>
          <Row className="justify-content-center my-5">
            <Col xs="auto">
              <CvOptions />
            </Col>
          </Row>
          <Row className="justify-content-center my-5">
            <Col xs="auto">
              <Button onClick={exportPDF}>Export to PDF</Button>
            </Col>
          </Row>
          <Row className="justify-content-center mb-5">
            <Col xs="auto">
              <Card className="cv-page">
                <div ref={cv} id="resume">
                  <Cv/>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </CvOptionsContextProvider>
  );
}

export default App;
