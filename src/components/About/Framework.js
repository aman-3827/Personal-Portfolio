import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiMongodb, DiNodejs } from "react-icons/di";
import {
  SiGitlab,
  SiVisualstudiocode,
  SiReact,
  SiAngular,
  SiNpm,
  SiGithub,
  SiNodedotjs,
  SiRedux,
  SiNextdotjs,
  SiSass,
  SiExpress,
  SiMysql,
  SiVuedotjs,
  SiBootstrap,
  SiFigma,
} from "react-icons/si";

function Framework() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
              <SiReact />
            </Col>
        <Col xs={4} md={2} className="tech-icons">
              <SiNextdotjs />
            </Col>
        <Col xs={4} md={2} className="tech-icons">
              <SiVuedotjs />
            </Col>
        <Col xs={4} md={2} className="tech-icons">
              <SiNodedotjs />
            </Col>
        <Col xs={4} md={2} className="tech-icons">
              <SiRedux />
            </Col>
        <Col xs={4} md={2} className="tech-icons">
              <SiSass />
            </Col>
        <Col xs={4} md={2} className="tech-icons">
              <SiMysql />
            </Col>
        <Col xs={4} md={2} className="tech-icons">
              <SiFigma />
            </Col>
        <Col xs={4} md={2} className="tech-icons">
              <SiBootstrap />
            </Col>
      
      
      
    </Row>
  );
}

export default Framework;
