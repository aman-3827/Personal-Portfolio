import React from "react";
import { Col, Row } from "react-bootstrap";

import { 
  SiGitlab, 
  SiGithub, 
  SiGit,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"; 

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiGithub />
        </div>
        <span className="tech-name">GitHub</span>
      </Col>

      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiGitlab />
        </div>
        <span className="tech-name">GitLab</span>
      </Col>
 
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <VscVscode />
        </div>
        <span className="tech-name">VS Code</span>
      </Col>


      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiGit />
        </div>
        <span className="tech-name">Git</span>
      </Col>
      
    </Row>
  );
}

export default Toolstack;