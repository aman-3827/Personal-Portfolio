import React, { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Mobile check function
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize(); // Check on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Agar mobile hai toh kuch bhi mat dikhao
  if (isMobile) return null;

  return (
    <AnimatedCursor
      innerSize={25}
      outerSize={0}
      innerScale={1}
      trailingSpeed={12}
      hasBlendMode={false}
      showSystemCursor={true} // Mobile/Tablet ke liye important
      innerStyle={{
        clipPath: 'polygon(0% 0%, 0% 100%, 30% 70%, 60% 70%, 0% 0%)',
        backgroundColor: '#C0C0C0',
        transform: 'rotate(-10deg)',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
        zIndex: 999999
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '.tech-icons',
        '.nav-link'
      ]}
    />
  );
}

export default CustomCursor;