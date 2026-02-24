import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiPython } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* C++ */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <CgCPlusPlus />
        </div>
        <span className="tech-name">C++</span>
      </Col>

      {/* Python */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <DiPython />
        </div>
        <span className="tech-name">Python</span>
      </Col>

      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <DiJavascript1 />
        </div>
        <span className="tech-name">JavaScript</span>
      </Col>
      
    </Row>
  );
}

export default Techstack;