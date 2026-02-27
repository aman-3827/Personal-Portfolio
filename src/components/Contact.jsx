import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Particle from "./Particle";
import laptopImg from "../Assets/about.png";

function Contact() {
  const [yourname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ivg3h8p",
        "template_qbxp02d",
        {
          yourname,
          email,
          message,
          to_name: "Aman Kumar",
        },
        "7Td11Mi3wLX_iIvrO"
      )
      .then(() => {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        alert("Oops! Something went wrong.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container fluid className="about-section">
      <Particle />

      {/* Inner container handles spacing */}
      <Container className="contact-inner">
        <Row className="align-items-center gx-5 gy-5">
          {/* FORM */}
          <Col lg={6} md={12} style={{ zIndex: 2 }}>
            <h1 className="contact-heading">
              Let's Start a <span className="purple">Conversation</span>
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-white">Name</label>
                <input
                  type="text"
                  value={yourname}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  style={inputStyle}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="text-white">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={inputStyle}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="text-white">Message</label>
                <textarea
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  style={{ ...inputStyle, resize: "none" }}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={submitStyle(loading)}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </Col>

          {/* IMAGE */}
          <Col lg={5} md={12} className="text-center">
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid contact-img"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  fontSize: "16px",
  borderRadius: "10px",
  border: "2px solid #6f42c1",
  outline: "none",
};

const submitStyle = (loading) => ({
  backgroundColor: "#6f42c1",
  border: "none",
  borderRadius: "6px",
  padding: "12px 28px",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  cursor: loading ? "not-allowed" : "pointer",
  opacity: loading ? 0.8 : 1,
});

export default Contact;
