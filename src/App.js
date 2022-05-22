import './styles/styles.scss';
import {useRef} from "react";
import Cv from './components/Cv';
import {Container, Button, Col, Row, Card} from "react-bootstrap";
import {savePDF} from "@progress/kendo-react-pdf";

function App() {
  const cv = useRef(null);

  const exportPDF = () => {
    if (!cv.current) {
      return;
    }

    savePDF(cv.current, {
      paperSize: "A4",
      fileName: `Romaric_Guth_CV.pdf`,
      scale: 0.8,
    });
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-center my-5">
          <Col xs="auto">
            <Button onClick={exportPDF}>Export to PDF</Button>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col xs="auto">
            <Card className="cv-page">
              <div ref={cv}>
                <Cv/>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
