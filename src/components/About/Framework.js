import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiSass,
  SiMysql,
  SiVuedotjs,
  SiBootstrap,
  SiFigma,
} from "react-icons/si";

function Framework() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* React */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiReact />
        </div>
        <span className="tech-name">React</span>
      </Col>

      {/* Vue.js */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiVuedotjs />
        </div>
        <span className="tech-name">Vue.js</span>
      </Col>

      {/* Node.js */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiNodedotjs />
        </div>
        <span className="tech-name">Node.js</span>
      </Col>

      {/* Redux */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiRedux />
        </div>
        <span className="tech-name">Redux</span>
      </Col>

      {/* Sass */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiSass />
        </div>
        <span className="tech-name">Sass</span>
      </Col>

      {/* MySQL */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiMysql />
        </div>
        <span className="tech-name">MySQL</span>
      </Col>

      {/* Figma */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiFigma />
        </div>
        <span className="tech-name">Figma</span>
      </Col>

      {/* Bootstrap */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiBootstrap />
        </div>
        <span className="tech-name">Bootstrap</span>
      </Col>
      
    </Row>
  );
}

export default Framework;