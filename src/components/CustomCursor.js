import React from "react";
import AnimatedCursor from "react-animated-cursor";

function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={25} // Thoda bada arrow
      outerSize={0}  // Outer ring hata di performance ke liye
      innerScale={1}
      trailingSpeed={12} // Speed badha di (Lag khatam ho jayega)
      hasBlendMode={false} 
      innerStyle={{
        /* Arrow shape jo katega nahi */
        clipPath: 'polygon(0% 0%, 0% 100%, 30% 70%, 60% 70%, 0% 0%)',
        backgroundColor: '#C0C0C0',
        transform: 'rotate(-10deg)',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
        zIndex: 999999 // Sabse upar rahega
      }}
      clickables={['a', 'button', '.link', '.tech-icons', '.nav-link']}
    />
  );
}

export default CustomCursor;