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

    const serviceId = "service_ih8axqf";
    const templateId = "template_0yoki5s";
    const publicKey = "q-cbCQKsjxD6F6ajI";

    const templateParams = {
      yourname,
      email,
      message,
      to_name: "Aman Kumar",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
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
    <Container fluid className="about-section" style={{ position: "relative", zIndex: 0 }}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "white" }}>
              Let's Start a <strong className="purple">Conversation</strong>
            </h1>

            <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
              {/* Name */}
              <div className="mb-3" style={{ textAlign: "left" }}>
                <label htmlFor="yourname" style={{ color: "white" }}>
                  <strong className="purple">Name</strong>
                </label>
                <input
                  type="text"
                  id="yourname"
                  placeholder="Enter your name"
                  value={yourname}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3" style={{ textAlign: "left" }}>
                <label htmlFor="email" style={{ color: "white" }}>
                  <strong className="purple">Email</strong>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-3" style={{ textAlign: "left" }}>
                <label htmlFor="message" style={{ color: "white" }}>
                  <strong className="purple">Message</strong>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ ...inputStyle, resize: "none" }}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  backgroundColor: "#6f42c1",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  color: "white",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading && (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                    style={{ color: "white" }}
                  ></span>
                )}
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px", zIndex: 1 }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

const inputStyle = {
  width: "100%",
  color: "black",
  border: "2.5px solid #6f42c1",
  borderRadius: "9px",
  padding: "10px",
  outline: "none",
  fontSize: "15px",
  zIndex: 2,
  position: "relative",
};

export default Contact;
