import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aman Kumar </span>
            from <span className="purple"> Dehradun, India.</span>
            <br />I am a Computer Science graduate from Govind Ballabh Pant Engineering Pauri.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports Participation
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I think it is crucial to diversify my portfolio!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Aman</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
