import React, { useState } from "react";
import { Row, Spinner } from "react-bootstrap";

function CodilioProfile() {
  const [loading, setLoading] = useState(true);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px", textAlign: "center" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      <a
        href="https://codolio.com/profile/aman_390x"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "900px",
          height: "700px",
          position: "relative",
        }}
      >
        {loading && (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "#f8f9fa",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
              borderRadius: "8px",
            }}
          >
            <Spinner animation="border" variant="primary" />
          </div>
        )}

        <iframe
          src="https://codolio.com/profile/aman_390x/card"
          title="Codilio Profile"
          width="100%"
          height="100%"
          scrolling="no"
          onLoad={() => setLoading(false)}
          style={{
            border: "none",
            borderRadius: "8px",
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: 2,
          }}
        ></iframe>
      </a>
    </Row>
  );
}

export default CodilioProfile;
