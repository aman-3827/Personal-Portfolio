import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/magma.jpeg";
import emotion from "../../Assets/Projects/clock.jpeg";
import editor from "../../Assets/Projects/Moviehub.jpeg";
import chatify from "../../Assets/Projects/algo_visual.jpg";
import suicide from "../../Assets/Projects/weather.jpeg";
import bitsOfCode from "../../Assets/Projects/Designer.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="1. Path Finder & Sorting Visualizer"
              description="The Path Finder & Sorting Visualizer is a web app built using HTML, Sass, JavaScript, ReactJS, NodeJS, and NextJS. It lets users visualize pathfinding algorithms like Dijkstra’s and A*, and sorting methods like Bubble, Merge, and Quick Sort through real-time animations and an interactive interface, making algorithm learning intuitive and engaging."
              ghLink="https://github.com/aman-3827/Path-Finder-Sorting-Visualizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="2. CodeSphere"
              description="CodeSphere is an online code editor built with React and Express.js, allowing users to write HTML, CSS, and JavaScript with a live preview. It provides a seamless and interactive coding experience, making it perfect for web developers and learners to test and visualize their code in real-time."
              ghLink="https://github.com/aman-3827/Online-Editor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="3. Movie-Hub Application"
              description="MoveHub is a movie search and rating platform built with JavaScript, React, and Vue.js. It lets users find movies, view details with a smooth and interactive experience. Perfect for film lovers, MoveHub makes discovering and reviewing movies effortless!"
              ghLink="https://github.com/aman-3827/MovieHub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="4. Weather app"
              description="Weather Info is a dynamic web application that provides real-time weather updates for any city worldwide. Using the Weather API, the platform fetches and displays essential weather details, ensuring users stay informed about current atmospheric conditions."
              ghLink="https://github.com/aman-3827/Weather-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="5. Magma Clone"
              description="Magma clone using HTML, CSS, and JavaScript, incorporating Canva for smooth animations. This project replicates the original site's design and interactive elements, delivering a visually engaging and responsive user experience."
              ghLink="https://github.com/aman-3827/Magma-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="6. Stopwatch"
              description="I have built a fully functional Stopwatch Web App using HTML, CSS, and JavaScript, featuring an interactive and modern UI. This stopwatch allows users to start, stop, and reset the timer effortlessly."
              ghLink="https://github.com/aman-3827/Stopwatch"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
