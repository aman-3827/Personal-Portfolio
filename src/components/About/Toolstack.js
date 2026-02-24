import React from "react";
import { Col, Row } from "react-bootstrap";
// Sirf wahi icons import kiye hain jo niche use ho rahe hain
import {
  SiGitlab,
  SiVisualstudiocode,
  SiGithub,
  SiAtom,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* GitHub */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiGithub />
        </div>
        <span className="tech-name">GitHub</span>
      </Col>

      {/* GitLab */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiGitlab />
        </div>
        <span className="tech-name">GitLab</span>
      </Col>

      {/* VS Code */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiVisualstudiocode />
        </div>
        <span className="tech-name">VS Code</span>
      </Col>

      {/* Atom */}
      <Col xs={4} md={2} className="tech-wrapper">
        <div className="tech-icons">
          <SiAtom />
        </div>
        <span className="tech-name">Atom</span>
      </Col>

      {/* Git */}
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